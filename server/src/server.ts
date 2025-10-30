import viteExpress from 'vite-express';
import express from 'express';

const app = express();

viteExpress.config({
  inlineViteConfig: {
    base: '',
    build: { outDir: '../dist' },
  },
});

viteExpress.listen(app, 3000, () =>
  console.info('Server is listening (3000)...')
);
