const config = {
  development: {
    backendUrl: `${process.env.VITE_BACKEND_URL}/api/v1/dalle`,
  },
  production: {
    backendUrl: `${process.env.VITE_BACKEND_URL}/api/v1/dalle`,
  },
};

export default config;
