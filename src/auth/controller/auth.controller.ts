import { Request, Body, Post, UseGuards, Controller } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../service/auth/auth.service';
import { Users } from '../entity/user.entity';

@Controller('api/v1/auth/')
export class AuthController {
  constructor(private userService: AuthService) {}

  @Post('signup')
  async signup(@Body() user: Users): Promise<Users> {
    return this.userService.signup(user);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.userService.login(req.user);
  }
}
