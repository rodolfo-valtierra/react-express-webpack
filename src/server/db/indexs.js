import * as mysql from 'mysql';
import config from '../config';
import login from './login';

const connection = mysql.createConnection(config.mysql);

 connection.connect(err => {
    if(err)
        console.log(err);
});

export default {
    connection
}