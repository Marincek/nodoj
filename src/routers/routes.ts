import * as Router from 'koa-router';
import { DbInterface } from '../typings/DbInterface';

const routerOptins : Router.IRouterOptions = {
    prefix: '/api'
};

const router = new Router(routerOptins);

router.get('/', (ctx, next) => {
    console.log("Inside context" + ctx.db);
    let db: DbInterface = ctx.db;
   

    ctx.body = {
        status : "success",
        message : "Default route in Typescript"
    }
}).get('/hello', (ctx) => {
    ctx.body = {
        status : "success",
        message: "Hello world! You did it!!"
    };
}).get('/allUsers', (ctx,next) => {
    let db: DbInterface = ctx.db;

    db.User.findByPk(1).then(user => {
        console.log(user.name);
    })
}).get('/createUser', (ctx, next) => {
    let db: DbInterface = ctx.db;

    db.User.create({
        name: "Petar"
    }).then(function(){
        console.log("Create new user");
    })
});

export {router};