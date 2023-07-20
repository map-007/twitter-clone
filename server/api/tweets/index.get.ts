import { getTweets } from "../../db/tweets";

export default defineEventHandler(async (event) => {
  const tweets = await getTweets({
    include: {
      author: true,
      mediaFile: true,
    },
  });

  return {
    data: tweets,
  };
});
