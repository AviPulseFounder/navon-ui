export default async function handler(req, res) {
  if (req.method === 'POST') {
    const secret = req.headers['x-finnhub-secret'];

    // Verify the secret for security
    if (secret !== process.env.FINNHUB_SECRET) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const data = req.body;

    console.log('Received Finnhub webhook:', data);

    // For now, just acknowledge receipt
    res.status(200).json({ message: 'Webhook received' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}