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

export const getRefreshToken = (token: string) => {
  return prisma.refreshToken.findUnique({
    where: {
      token,
    },
  })
}