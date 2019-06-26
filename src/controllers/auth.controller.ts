import {Authorized, Body, HeaderParam, JsonController, Post} from "routing-controllers";
import {AuthService} from "../service/auth.service";
import {User} from "../model/user";

@JsonController("/auth")
export class AuthController {

    constructor(
        private readonly authService: AuthService) {
        this.authService = new AuthService(null);
    }

    @Post("/login")
    login(@Body() user: User) {
        return this.authService.createToken(user);
    }

    @Post("/refresh")
    @Authorized()
    refresh(@HeaderParam("authorization") token: string) {
        return "This action refresh the token "+token;
    }

    @Post("/logout")
    @Authorized()
    logout(@HeaderParam("authorization") token: string) {
        return "This action logout the user "+token;
    }
}
