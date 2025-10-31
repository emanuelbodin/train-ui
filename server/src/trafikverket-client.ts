import createClient from 'openapi-fetch';
import type { paths } from '../typings/trafikverket.js';
import config from './config.js';

const client = createClient<paths>({ baseUrl: config.trafikverketServiceUrl });

export const getCancellations = async (from: string) => {
  const { data } = await client.GET('/api/announcements/departures/{from}', {
    params: { path: { from }, query: { canceled: true } },
  });
  return data;
};
