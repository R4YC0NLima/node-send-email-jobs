// import { AppDataSource } from "../../ormconfig";

// AppDataSource.initialize()
//     .then(() => {
//         console.log("conexão de banco de dados estabelecida com sucesso!");
//     })
//     .catch((error:any) => console.log(error))

import {createConnection, getConnectionOptions} from 'typeorm';

createConnection().then(() => console.log("conexão de banco de dados estabelecida com sucesso!"));
// interface IOptions {
//     host: string;
// }

// getConnectionOptions().then(options => {
//     const newOptions = options as IOptions;
//     newOptions.host = "sqldata";
//     createConnection({
//         ...options
//     }).then(() => {
//         console.log("conexão de banco de dados estabelecida com sucesso!");
//     }).catch(()=>{
//         console.log("Failed Connect");
//     });
// });