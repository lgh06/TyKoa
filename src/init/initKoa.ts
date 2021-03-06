import bodyParser from 'koa-bodyparser'
import Koa from 'koa'
import postgraphile from 'postgraphile'
import { dbConnection, postgraphileOptions } from '../db/index'

function initKoa(): Koa {
  const app = new Koa()

  // body parser
  app.use(bodyParser())

  // logger
  app.use(async (ctx, next) => {
    await next()
    const rt = ctx.response.get('X-Response-Time')
    // eslint-disable-next-line no-console
    console.log(`${ctx.method} ${ctx.url} - ${rt}`)
  })

  // x-response-time

  app.use(async (ctx, next) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    ctx.set('X-Response-Time', `${ms}ms`)
  })
  return app
}


function initPostgraphile(app: Koa): void {
  app.use(postgraphile(
    dbConnection,
    'public',
    postgraphileOptions,
  ))
}

export { initKoa, initPostgraphile }
