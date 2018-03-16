const path = require('path');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');

const PORT = process.env.PORT || 9000;
const ASSETS_PATH = path.join(__dirname, 'public');

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.static(ASSETS_PATH));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
