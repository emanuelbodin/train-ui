import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

function getEnvOrThrowError(env: string): string {
  const value = process.env[env];
  if (value === undefined || !value) {
    throw new Error(`Required environment variable ${env} missing`);
  }

  return value;
}

const config = {
  trafikverketServiceUrl: getEnvOrThrowError('TRAFIKVERKET_SERVICE_URL'),
  env: getEnvOrThrowError('ENV'),
};

export default config;
