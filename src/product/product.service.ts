import { Injectable } from '@nestjs/common';
import {InjectModel} from 'nestjs-typegoose';
import {ProductModel} from './product.model';
import {ModelType} from '@typegoose/typegoose/lib/types';
import {CreateProductDto} from './dto/create-product.dto';

@Injectable()
export class ProductService {
	constructor(@InjectModel(ProductModel) private readonly productModel: ModelType<ProductModel>) {
	}
	async create(dto: CreateProductDto){
		return this.productModel.create(dto);
	}
	async findById(id:string){
		return this.productModel.findById(id).exec();
	}
	async deleteById(id: string){
		return this.productModel.findByIdAndDelete(id).exec();
	}
	async updateById(id: string, dto: CreateProductDto){
		return this.productModel.findByIdAndUpdate(id, dto, {new: true}).exec();
	}
	async findWithReviews(){

	}
}
