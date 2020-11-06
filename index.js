require('dotenv').config()
const dev = require('debug')('dev'), test = require('debug')('test')
const path = require('path')
const express = require('express')
var MongoClient = require('mongodb').MongoClient
const app = express();

app.use(express.json({ limit: '1mb' }));

app.use(express.static(path.join(__dirname, 'build')))

const url = process.env.DB_URL;
const dbName = 'contact-form';
app.post('/contact-form', (req, res) => {
    const formData = {
        name: req.body.name,
        email: req.body.email,
        title: req.body.title,
        message: req.body.message
    };
    test(formData);

    MongoClient.connect(url, (err, client) => {
        if (err) return dev(err)
        const db = client.db(dbName);
        const collection = db.collection('responses');
        collection.insertOne(formData, (err, result) => {
            if (err) return dev(err);
            dev('Inserted successfully');
        })
    })


    res.json({
        status: true,
        name: req.body.name
    });
})

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));