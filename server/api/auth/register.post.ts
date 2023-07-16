import { createUser } from "../../db/users";
import { userTransformer } from "../../transformers/user";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid params here!",
    });
  }

  const { username, email, password, repeatPassword, name } = body;

  if (!username || !email || !password || !repeatPassword || !name) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid params",
    });
  }

  if (password !== repeatPassword) {
    throw createError({
      statusCode: 400,
      statusMessage: "Password do not match",
    });
  }

  const userData = {
    username,
    email,
    password,
    name,
    profileImage: "https://picsum.photos/200",
  };

  const user = await createUser(userData);

  return {
    data: userTransformer(user),
  };
});
