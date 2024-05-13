import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { FileModule } from './file/file.module';

@Module({
  imports:[
    FileModule
  ]
})
export class AppModule {}
