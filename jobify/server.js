import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';

// Routers
import jobRouter from './router/jobRouter.js';

const app = express();
const port = process.env.PORT || 5100;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/jobs', jobRouter);

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: 'something went wrong' });
});

app.listen(port, () => {
  console.log(`server running on PORT ${port}....`);
});
