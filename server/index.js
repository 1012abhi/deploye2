import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

app.get('/api/message', (req, res) => 
  res.json({message: 'Hello World!'}));

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`)
)