import { Param, Delete, Get, Post, Body, Controller } from '@nestjs/common';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {
	@Post('create')
	async create(@Body() dto: Omit<ReviewModel, 'id'>){

	}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string) {

	}

	@Delete(':id')
	async delete(@Param('id') id: string){

	}
}
