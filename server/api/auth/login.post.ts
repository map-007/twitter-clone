import { createRefreshToken } from "../../db/refreshToken";
import { getUserByName } from "../../db/users";
import { userTransformer } from "../../transformers/user";
import { generateToken, sendRefreshToken } from "../../utils/jwt";
import * as bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid params here!",
    });
  }

  const { username, password } = body;

  if (!username || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid params here!",
    });
  }

  const user = await getUserByName(username);

  if (!user) {
    throw createError({
      statusCode: 400,
      statusMessage: "User doesn't exist",
    });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid Credential!",
    });
  }

  const { accessToken, refreshToken } = generateToken(user);

  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  });

  sendRefreshToken(event, refreshToken)

  return {
    access_token: accessToken,
    user: userTransformer(user),
  };
});
