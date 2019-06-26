import * as Koa from 'koa';
import "reflect-metadata";
import {logger} from './logging';
import {useKoaServer}  from "routing-controllers";
import {AuthController} from "./controllers/auth.controller";
import {authorizationChecker} from "./security/authorization.checker.middleware";
import * as dotenv from "dotenv";

dotenv.config();

const app = new Koa();
app.use(logger());

useKoaServer(app, {
    defaults: {
        //with this option, null will return 404 by default
        nullResultCode: 404,
        //with this option, void or Promise<void> will return 204 by default
        undefinedResultCode: 204,
        paramOptions: {
            required: true,
        },
    },
    authorizationChecker,
    routePrefix: "/api",
    controllers: [AuthController],
});

app.listen(process.env.PORT);

console.log('Server running on port 3000');