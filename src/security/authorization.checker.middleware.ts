import {Action} from "routing-controllers";

export async function authorizationChecker(action: Action, roles: string[]) {
    console.log(Date.now(), "inside authorizationChecker")
    return true;
}