const path = require('path');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');

const PORT = process.env.PORT || 9000;
const app = express();

app.use(helmet());
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
