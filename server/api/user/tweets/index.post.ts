import formidable from "formidable";
import { createTweet } from "../../../db/tweets";
import { tweetTransformer } from "../../../transformers/tweet";
import { createMediaFile } from "../../../db/mediaFiles";
import { uploadToCloudinary } from "../../../utils/cloudinary";

export default defineEventHandler(async (event) => {
  const form = formidable({});

  const response = await new Promise((resolve, reject) => {
    form.parse(
      event.req,
      (err: any, fields: formidable.Fields, files: formidable.Files) => {
        if (err) {
          reject(err);
        }
        resolve({ fields, files });
      }
    );
  });

  const { fields, files }: formidable = response;

  const userId = event.context?.auth?.user?.id;

  type TweetDataType = {
    text: string,
    authorId: string,
    replyToId?: string,
  }

  const tweetData: TweetDataType = {
    text: fields.text.toString(),
    authorId: userId,
  };

  const replyTo = fields.replyTo

  if (replyTo && replyTo !== 'null') {
    tweetData.replyToId = replyTo
  }

  const newFiles = JSON.parse(JSON.stringify(files));

  const tweet = await createTweet(tweetData);

  const filePromises = Object.keys(newFiles).map(async (key) => {
    const file = newFiles[key];

    const cloudinaryResource: any = await uploadToCloudinary(file[0].filepath);

    return createMediaFile({
      url: cloudinaryResource.secure_url,
      providerPublicId: cloudinaryResource.public_id,
      userId: userId,
      tweetId: tweet.id,
    });
  });

  await Promise.all(filePromises);

  return {
    data: tweetTransformer(tweet),
  };
});
