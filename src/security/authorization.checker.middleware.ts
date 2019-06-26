import {Action} from "routing-controllers";
import * as jwt from 'jsonwebtoken';
import {DataStoredInToken} from "../model/token";

export async function authorizationChecker(action: Action, roles: string[]) {
    const token: string = action.request.headers["authorization"];

    const tokenData = jwt.verify(token, process.env.JWT_SECRET) as DataStoredInToken;

    return tokenData._id == "123";
}