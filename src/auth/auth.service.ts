import { Injectable, UnauthorizedException, UsePipes } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { AuthDto } from './dto/auth.dto';
import { UserModel } from './user.model';
import { genSaltSync, hashSync, compare } from 'bcryptjs';
import { USER_DATA_ERROR, USER_NOT_FOND_ERROR } from './auth.constants';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
      @InjectModel(UserModel) private readonly userModel: ModelType<UserModel>,
      private readonly jwtService: JwtService,
  ) {}
  async createUser(dto: AuthDto) {
    const salt = genSaltSync(10);
    const newUser = new this.userModel({
      email: dto.login,
      passwordHash: hashSync(dto.password, salt),
    });
    return newUser.save();
  }

  async findUser(email: string) {
    return this.userModel.findOne({ email }).exec();
  }

  async validateUser(
      email: string,
      password: string,
  ): Promise<Pick<UserModel, 'email'>> {
    const user = await this.findUser(email);
    if (!user) {
      throw new UnauthorizedException(USER_NOT_FOND_ERROR);
    }
    const isCorrectPassword = await compare(password, user.passwordHash);
    if (!isCorrectPassword) {
      throw new UnauthorizedException(USER_DATA_ERROR);
    }
    return {
      email: user.email,
    };
  }

  async login(email: string) {
    const payload = { email };
    return {
      token: await this.jwtService.signAsync(payload),
    };
  }
}