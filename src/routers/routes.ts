import * as Router from 'koa-router';

const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = {
        status : "success",
        message : "Default route in Typescript"
    }
}).get('/hello', (ctx) => {
    ctx.body = {
        status : "success",
        message: "Hello world! You did it!!"
    };
});

export {router};