const Router = require('koa-router');

const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = {
        status : "success",
        message : "Default route"
    }
}).get('/hello', (ctx) => {
    ctx.body = {
        status : "success",
        message: "Hello world! You did it!!"
    };
});

module.exports = router;