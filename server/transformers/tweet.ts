import { mediaFileTransformer } from "./mediaFile";
import { userTransformer } from "./user";
import human from 'human-time'

type TweetType = {
  mediaFile: any;
  id: string;
  text: string;
  author: any;
  replies: any;
  replyTo: any;
  createdAt: Date;
};

export const tweetTransformer = (tweet: TweetType): any | undefined => {
  return {
    id: tweet.id,
    text: tweet.text,
    mediaFiles: tweet.mediaFile
      ? tweet.mediaFile.map(mediaFileTransformer)
      : [],
    author: !!tweet.author ? userTransformer(tweet.author) : null,
    replies: !!tweet.replies ? tweet.replies.map(tweetTransformer) : [],
    replyTo: !!tweet.replyTo ? tweetTransformer(tweet.replyTo) : null,
    repliesCount: !!tweet.replies ? tweet.replies.length : 0,
    postedAtHuman: human(tweet.createdAt),
  };
};
