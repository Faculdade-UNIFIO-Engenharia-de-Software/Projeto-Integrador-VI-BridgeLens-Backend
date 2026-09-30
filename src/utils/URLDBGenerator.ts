import "dotenv/config"

const user= process.env["PG_USER"]
const password= process.env["PG_PASSWORD"]
const host = process.env["PORT_DB_HOST"]
const db_name = process.env["PG_DB_NAME"]






export const URL_DATABASE: string = `postgresql://${user}:${password}@localhost:${host}/${db_name}?schema=public`

console.log(URL_DATABASE)
