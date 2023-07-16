export const userTransformer = (user: {
  id: any;
  name: any;
  email: string;
  username: string;
  profileImage: any;
}) => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    username: user.username,
    profileImage: user.profileImage,
    handle: "@" + user.username,
  };
};
