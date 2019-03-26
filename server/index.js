import path from 'path'
import Knex from 'knex'
import Http from 'http'
import Chalk from 'chalk'
import dotenv from 'dotenv'
import Express from 'express'
import Webpack from 'webpack'
import { Model } from 'objection'
import bodyParser from 'body-parser'
import WebpackHotMiddleware from 'webpack-hot-middleware'
import WebpackDevMiddleware from 'webpack-dev-middleware'

import knexConfig from '@/knexfile'
import config from '@server/config'
import v1Router from '@server/routes'
import webpackConfig from '@/webpack.config'

dotenv.config()

export const knex = Knex(knexConfig[config.environment])

Model.knex(knex)

const app = new Express()

if (!config.production) {
    const compiler = Webpack(webpackConfig)

    app.use(
        WebpackDevMiddleware(compiler, {
            hot: true,
            publicPath: webpackConfig.output.publicPath
        })
    )

    app.use(WebpackHotMiddleware(compiler))
}

app.use(Express.static(path.resolve(__dirname, 'public')))

app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.use(bodyParser.json())

app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
)

app.use('/api/v1', v1Router)

const server = Http.createServer(app)

server.listen(config.port, () => {
    console.log(
        Chalk.blue(`💚   Project running on http://localhost:${config.port}`)
    )
})

export default server
