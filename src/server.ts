import * as Koa from 'koa';
import {router} from './routers/routes';
import {logger} from './logging';
import * as winston from 'winston';

const app = new Koa();

app.use(logger());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);

console.log('Server running on port 3000');