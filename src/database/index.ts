import {createConnection, getConnectionOptions} from 'typeorm';

createConnection()
    .then(() => console.log("conexão de banco de dados estabelecida com sucesso!"))
    .catch((err: any) => console.log("Erro no conexão!!!"))
