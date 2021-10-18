import {
	HttpCode,
	Controller,
	Post,
	Body,
	Get,
	Param,
	Delete,
	Patch,
	NotFoundException,
	UsePipes,
	ValidationPipe
} from '@nestjs/common';
import { FindProductDto } from './dto/find-product.dto';
import { ProductModel } from './product.model';
import {CreateProductDto} from './dto/create-product.dto';
import {ProductService} from './product.service';
import {PRODUCT_NOT_FOUND} from './product.constants';

@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) {
	}
	@Post('create')
	async create(@Body() dto: CreateProductDto){
		return this.productService.create(dto);
	}

	@Get(':id')
	async get(@Param('id') id: string) {
		const product = await this.productService.findById(id);
		if(!product){
			throw new NotFoundException(PRODUCT_NOT_FOUND);
		}
		return product;
	}

	@Delete(':id')
	async delete(@Param('id') id: string){
		const deleteProduct = await this.productService.deleteById(id);
		if(!deleteProduct){
			throw new NotFoundException(PRODUCT_NOT_FOUND);
		}
	}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: ProductModel){
		const updatedProduct = await this.productService.updateById(id, dto);
		if(!updatedProduct){
			throw new NotFoundException(PRODUCT_NOT_FOUND);
		}
		return updatedProduct;
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('find')
	async find(@Body() dto: FindProductDto){

	}
}
