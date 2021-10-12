export class ProductModel {
	id: string;
	image: string;
	title: string;
	price: number;
	oldPrice: number;
	credit: number;
	calculateRating: number;
	description: string;
	advantages: string;
	disAdventages: string;
	categories: string[];
	tags: string;
	characteristics: {
		[key:string]:string;
	};
}
