require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');

const usersRouters = require('./src/routers/users');

const middlewareRequest = require('./src/middleware/logs');
const upload = require('./src/middleware/multer');

const app = express();

app.use(middlewareRequest);
app.use(express.json());
app.use('/assets',express.static('public/images'))

app.use('/users', usersRouters);
app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: 'Upload Berhasil'
    })
})

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server Berhasil Di Running Di Port ${PORT}`);
})