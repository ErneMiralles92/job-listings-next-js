import type { NextApiRequest, NextApiResponse } from 'next';

// interface resultData
export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({ name: 'John Doe' });
};
