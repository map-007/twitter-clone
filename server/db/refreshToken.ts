import { prisma } from ".";

type RefreshToken = {
  token: string;
  userId: string;
};

export const createRefreshToken = (refreshToken: RefreshToken) => {
  return prisma.refreshToken.create({
    data: refreshToken,
  });
};
