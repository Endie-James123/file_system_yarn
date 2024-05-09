import {
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { editFileName, imageFileFilter } from './utils';
import { diskStorage } from 'multer';
import { FilesInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';

@Controller('file')
export class FileController {
  @Post('multiple')
  @UseInterceptors(
    FilesInterceptor('image', 3, {
      storage: diskStorage({
        destination: './src/images',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadMultipleFiles(@UploadedFiles() files) {
    const response = [];
    files.forEach((file) => {
      const fileResponse = {
        originalname: file.originalname,
        filename: file.filename,
      };
      response.push(fileResponse);
    });
    return response;
  }

  @Get(':imgpath')
  deleteImg(@Param('imgpath') image, @Req() req, @Res() res): Promise<string> {
    fs.rm('./src/files/' + image, (err) => {
      if (err) {
        throw err;
      }
    });
    return res.end(`${image} successfully deleted`);
  }
}
