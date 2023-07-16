import { getRefreshToken } from "../../db/refreshToken";
import { getUserById } from "../../db/users";
import { decodeRefreshToken } from "../../utils/jwt";

export default defineEventHandler(async (event) => {
  const cookies = parseCookies(event);

  const refreshToken = cookies.refresh_token;

  if (!refreshToken) {
    throw createError({
      statusCode: 401,
      statusMessage: "Refresh token is invalid",
    });
  }

  const newToken = await getRefreshToken(refreshToken);

  if (!newToken) {
    throw createError({
      statusCode: 401,
      statusMessage: "New Refresh token is invalid",
    });
  }

  const token = decodeRefreshToken(refreshToken);

  try {
    const user = await getUserById(token.userId);

    if (!user) return;

    const { accessToken } = generateToken(user);

    return { access_token: accessToken };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server",
    });
  }
});
