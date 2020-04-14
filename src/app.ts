/* eslint-disable import/first */
import 'reflect-metadata'
// eslint-disable-next-line import/newline-after-import
import { initEnv } from './init/initEnv'
initEnv()
import { initKoa, init } from './init/index'

import * as decorators from './decorators/index'
import * as dbIndex from './db/index'
import * as util from './util/index'

/* eslint-disable func-names */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const main = async function (): Promise<void> {
  const app = initKoa()

  await init(app)
  // eslint-disable-next-line no-console
  console.log(process.env.DB_MYSQL_PORT)
  app.listen(3000)
}

// main()

const { db } = dbIndex
export {
  decorators,
  initEnv,
  initKoa,
  init,
  db,
  util,
}
