
import sqlite3 from 'sqlite3'

sqlite.verbose()
const db = new sqllite3.Databese('./src/infra/database.db')

export default db;