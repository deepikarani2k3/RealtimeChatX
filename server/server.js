const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample test route
app.get('/', (req, res) => {
  res.send('API is working ✅');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
