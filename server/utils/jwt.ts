import jwt from "jsonwebtoken";

interface User {
  id: string;
  email: string;
  name: string | null;
  username: string;
  password: string;
  profileImage: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const generateAccessToken = (user: User) => {
  const config = useRuntimeConfig();

  return jwt.sign({ userId: user.id }, config.jwtAccessSecret, {
    expiresIn: "10m",
  });
};

const generateRefreshToken = (user: User) => {
  const config = useRuntimeConfig();

  return jwt.sign({ userId: user.id }, config.jwtRefreshSecret, {
    expiresIn: "4h",
  });
};

export const generateToken = (user: User) => {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};

export const sendRefreshToken = (event: any, token: string) => {
  setCookie(event, "refresh_token", token, {
      httpOnly: true,
      sameSite: true
  })
} 