import * as jwt from 'jsonwebtoken';
import {UserService} from "./user.service";
import {Token, DataStoredInToken} from "../model/token";
import {User} from "../model/user";

export class AuthService {

    constructor(private readonly userService: UserService) {}

    public createToken(user: User): Token {
        const expiresIn = 60 * 60; // an hour
        const secret = process.env.JWT_SECRET;
        console.log("Secret key "+secret);
        const dataStoredInToken: DataStoredInToken = {
            _id: user.id,
        };
        return {
            expiresIn,
            token: jwt.sign(dataStoredInToken, secret, {expiresIn}),
        };
    }
}