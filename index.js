const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.port || 3000

// Routes
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});



router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/about.html'));
});

// Middleware
app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})