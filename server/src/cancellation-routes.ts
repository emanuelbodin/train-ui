import { Router } from 'express';
import * as trafikverketClient from './trafikverket-client.js';
const router = Router();

router.get('/:from', async (req, res) => {
  const from = req.params.from as string;
  const cancellations = await trafikverketClient.getCancellations(from);
  res.json(cancellations);
});

export default router;
