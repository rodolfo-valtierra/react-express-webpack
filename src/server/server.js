import * as express from 'express';
const login = require ('./db/login');
var bodyParser = require("body-parser");
const app = express();
var path = require('path');
const publicPath = path.join(__dirname, '..', 'public'); //corrige problema con la recarga de paginas

app.use(express.static('public'));
app.use(express.static(__dirname + "../src/client/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/session', async (req, res) =>{
    try{
        let data = await login.all();
        res.json(data);
    }catch(e){
        console.log(e);
        res.sendStatus("500");
    }
})

app.get('/*', (req, res) => {                       
    res.sendFile(path.join(publicPath, 'index.html'))                              
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
