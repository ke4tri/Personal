const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));


app.get('/express_backend', (req, res) => {
    //I think the api/query info will eventually go here
    res.send({express : 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
});