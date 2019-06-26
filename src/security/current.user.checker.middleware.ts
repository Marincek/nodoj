import {Action, CurrentUser} from "routing-controllers";
import {UserInfo} from "os";
import {User} from "../model/user";

export async function authorizationChecker(action: Action) {
    // here you can use request/response objects from action
    // you need to provide a user object that will be injected in controller actions
    // demo code:
    const token = action.request.headers["authorization"];

    let user: User;

    user.email = "jan@test.com";
    user.id = "1";

    return user;
}