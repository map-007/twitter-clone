import { prisma } from ".";

type TweetData = {
  text: string;
  authorId: string;
};

export const createTweet = (tweetData: TweetData) => {
  return prisma.tweet.create({
    data: tweetData,
  });
};

export const getTweets = (params = {}) => {
  return prisma.tweet.findMany({
    ...params,
  });
};
