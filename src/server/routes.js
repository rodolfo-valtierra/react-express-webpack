import * as express from 'express';
const login = require ('./db/login');
var path = require('path');

const router = express.Router();

router.get('/usuarios', async (req, res) =>{
    try{
        let data = await login.all();
        res.json(data);
    }catch(e){
        console.log(e);
        res.sendStatus("500");
    }
})

router.get('*', (req, res) => {                       
    res.sendFile(path.resolve('src/client', 'index.html'));                               
  });


export default router;