import { prisma } from ".";
import * as bcrypt from "bcrypt";

export const createUser = (userData: {
  username: any;
  email: any;
  password: any;
  name: any;
}) => {
  const finalUserData = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10),
  };

  return prisma.user.create({
    data: finalUserData,
  });
};

export const getUserByName = (username: string) => {
  return prisma.user.findUnique({
    where: {
      username,
    },
  });
};
