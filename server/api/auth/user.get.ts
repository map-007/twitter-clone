import { userTransformer } from "../../transformers/user";

export default defineEventHandler((event) => {
  return {
    user: userTransformer(event.context.auth?.user)
  };
});
