import viteExpress from 'vite-express';
import express from 'express';
import cancellationRouter from './cancellation-routes.js';
import config from './config.js';

const app = express();
app.use('/api/cancellations', cancellationRouter);

viteExpress.config({
  mode: config.env === 'production' ? 'production' : 'development',
  inlineViteConfig: {
    base: '',
    build: { outDir: 'dist' },
  },
});

viteExpress.listen(app, 3000, () =>
  console.info('Server is listening (3000)...')
);
