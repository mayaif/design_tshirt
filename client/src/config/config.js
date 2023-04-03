const config = {
  development: {
    backendUrl: `${process.env.BACKEND_URL}/api/v1/dalle`,
  },
  production: {
    backendUrl: `${process.env.BACKEND_URL}/api/v1/dalle`,
  },
};

export default config;
