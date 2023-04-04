// import dotenv from 'dotenv';
// dotenv.config();

const config = {
  development: {
    backendUrl: import.meta.env.VITE_PUBLIC_BACKEND_URL,
  },
  production: {
    backendUrl: import.meta.env.VITE_PUBLIC_BACKEND_URL,
  },
};

export default config;
