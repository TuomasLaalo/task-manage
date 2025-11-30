import dotenv from 'dotenv';

dotenv.config();

// Parse FRONTEND_URL - can be single URL or comma-separated list
const parseFrontendUrls = (): string | string[] => {
  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
  if (frontendUrl.includes(',')) {
    return frontendUrl.split(',').map(url => url.trim());
  }
  return frontendUrl;
};

export const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  frontendUrl: parseFrontendUrls()
};
