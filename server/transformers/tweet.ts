export const tweetTransformer = (tweet: { id: string; text: string }) => {
  return {
    id: tweet.id,
    text: tweet.text,
  };
};
