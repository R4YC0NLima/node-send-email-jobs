import path from 'path';
import knexfile from '../../knexfile'

const connection = require('knex')(knexfile)

export default connection;