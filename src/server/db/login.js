import mysql from './connection';

export const all = (email, pass) =>{
    return new Promise ((resolve, reject)=>{
            mysql().query('SELECT * FROM usuarios', (err, results) =>{
                if(err){
                    return reject(err);
                }
                resolve(results);
            })
        }
    )
}


export default {
    all
}