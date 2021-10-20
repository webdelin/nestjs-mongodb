import {Controller, HttpCode, Post, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express';
import {JwtAuthGuard} from '../auth/guards/jwt.guard';
import {FileElementResponseDto} from './dto/file-element.response';
import {FilesService} from './files.service';
import {MFile} from './mfile.class';

@Controller('files')
export class FilesController {
	constructor(private readonly filesService: FilesService) {
	}

	@Post('upload')
	@HttpCode(200)
	@UseGuards(JwtAuthGuard)
	@UseInterceptors(FileInterceptor('files'))
	async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<FileElementResponseDto[]> {
		const fileArray: MFile[] = [new MFile(file)];
		if(file.mimetype.includes('image')){
			const buffer = await this.filesService.convertToWebP(file.buffer);
			fileArray.push(new MFile({
					originalname: `${file.originalname.split('.')[0]}.webp`,
					buffer
					}));
		}
		return this.filesService.saveFiles(fileArray);
	}
}