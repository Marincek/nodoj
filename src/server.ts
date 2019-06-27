import * as Koa from 'koa';
import {router} from './routers/routes';
import {logger} from './logging';
import * as winston from 'winston';
import { createModels } from './models';
import { UserFactory } from './models/User';
import * as koaJson from 'koa-json';

const app = new Koa();

const db = createModels();
db.sequelize.sync();

app.context.db = db;
//db.User.build({name: "Petar"}).save();

app.use(koaJson());
app.use(logger());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);

console.log('Server running on port 3000');