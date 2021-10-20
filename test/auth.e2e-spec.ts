import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { disconnect } from 'mongoose';
import { AuthDto } from '../src/auth/dto/auth.dto';

const loginDto: AuthDto = {
  login: 'a@a.a',
  password: '123',
};

describe('AuthController (e2e)', () => {
  let app: INestApplication;
  let token: string;
  beforeEach(async () => {
	const moduleFixture: TestingModule = await Test.createTestingModule({
		imports: [AppModule],
	}).compile();

	app = moduleFixture.createNestApplication();
	await app.init();

	const { body } = await request(app.getHttpServer())
		.post('/auth/login')
		.send(loginDto);
	token = body.token;
  });

  it('/auth/login (POST) - success', async () => {
	return request(app.getHttpServer())
		.post('/auth/login')
		.send(loginDto)
		.expect(200)
		.then(({ body }: request.Response) => {
		expect(body.token);
		});
  });

  it('/auth/login (POST) - fail email', async () => {
	return request(app.getHttpServer())
		.post('/auth/login')
		.send({ ...loginDto, login: 'a1a@a1a.a1a' })
		.expect(401, {
		statusCode: 401,
		message: 'User not found',
		error: 'Unauthorized',
		});
  });

  it('/auth/login (POST) - fail pass', async () => {
	return request(app.getHttpServer())
		.post('/auth/login')
		.send({ ...loginDto, password: '1234' })
		.expect({
		statusCode: 401,
		message: 'User data error',
		error: 'Unauthorized',
		});
  });

  afterAll(() => {
	disconnect();
  });
});
