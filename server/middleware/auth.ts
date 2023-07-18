import UrlPattern from "url-pattern";
import { getUserById } from "../db/users";

export default defineEventHandler(async (event) => {

  const endpoints = [
    "/api/auth/user",
    "/api/user/tweets"
  ];

  const isHandledByThisMiddleware = endpoints.some((endpoint) => {
    const pattern = new UrlPattern(endpoint);

    return pattern.match(event.req.url);
  });

  if (!isHandledByThisMiddleware) {
    return;
  }

  const token = event.req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    });
  }

  const decoded = decodeAccessToken(token);

  if (!decoded) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    });
  }

  try {
    const userId = decoded.userId;

    const user = await getUserById(userId);

    event.context.auth = { user };
  } catch (error) {
    return;
  }
});

