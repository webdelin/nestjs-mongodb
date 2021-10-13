import { Param, Post, Get, Delete, Patch, Body, HttpCode, Controller } from '@nestjs/common';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageModel } from './top-page.model';

@Controller('top-page')
export class TopPageController {
	@Post('create')
	async create(@Body() dto: Omit<TopPageModel, 'id'>){

	}

	@Get(':id')
	async get(@Param('id') id: string) {

	}

	@Delete(':id')
	async delete(@Param('id') id: string){

	}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: TopPageModel){

	}

	@HttpCode(200)
	@Post()
	async find(@Body() dto: FindTopPageDto){

	}
}
