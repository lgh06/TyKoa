/* eslint-disable import/first */
import 'reflect-metadata'
import {
  initEnv,
  initKoa,
  init,
} from '@edgefront/api'

initEnv()
/* eslint-disable func-names */
const main = async function (): Promise<void> {
  const app = initKoa()

  await init(app)
  // eslint-disable-next-line no-console
  console.log(process.env.DB_MYSQL_PORT)
  app.listen(3000)
}

main()
