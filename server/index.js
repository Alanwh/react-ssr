const express = require('express');

const app = express();

app.use('/jsonp', (req, res)=>{
    res.send(
        `${req.query.custom_callback}(${JSON.stringify({data: 'come from jsonp'})})`
    )
})

app.listen(8888, ()=>console.log('server is listenning 8888'))