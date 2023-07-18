import { prisma } from ".";

export const createMediaFile = (mediaFile: {
  url: string;
  providerPublicId: string;
  userId: string;
  tweetId: string;
}) => {
  return prisma.mediaFile.create({
    data: mediaFile,
  });
};
