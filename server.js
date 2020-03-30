const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const server = next({dev});
const handle = server.getRequestHandler();

//CREATE EXPRESS APP
const app = express();

app.use(bodyParser.urlencoded({extended: true}));


// SET STORAGE
const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now() + '.txt')
    }
});

const upload = multer({storage: storage});

server.prepare().then(() => {

//ROUTES WILL GO HERE
    app.get('/make-order', function (req, res) {
        return server.render(req, res, '/', req.query)
    });

    app.post('/upload',
        upload.single('myFile'),
        (req, res, next) => {
            const file = req.file;
            if (!file) {
                const error = new Error('Please upload a file');
                error.httpStatusCode = 400;
                return next(error)
            }
            console.log(file);

            res.status(200).json({"res": {'fileName': file.originalname, 'fileSize': file.size}})

        });

    app.all('*', (req, res) => {
        return handle(req, res)
    });

    app.listen(8080, () => console.log(`Server started on http://localhost:8080/`));
});
