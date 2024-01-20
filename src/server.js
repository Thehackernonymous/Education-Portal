const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json()); 

const statePool = new Pool({
  user: 'newdata',
  host: 'localhost',
  database: 'state',
  password: 'raj',
  port: 5432,
});

const startServer = async () => {
  try {
    await statePool.connect(); 

    console.log('Connected to PostgreSQL');

    app.get('/api/states', async (req, res) => {
      try {
        const result = await statePool.query('SELECT * FROM state');
        const states = result.rows;
        res.json({ states });
      } catch (error) {
        console.error('Error fetching states:', error);
        res.status(500).json({ error: 'Error fetching states' });
      }
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error('Error connecting to PostgreSQL:', err);
  }
};

startServer();
