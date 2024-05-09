import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    MulterModule.register({
      dest:'./uploads',
    }),
    FileModule
  ],
})
export class AppModule {}
