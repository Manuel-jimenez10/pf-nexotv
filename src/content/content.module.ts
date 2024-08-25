import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentResolver } from './content.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from './entities/content.entity';

@Module({
  providers: [ContentResolver, ContentService],
  imports: [TypeOrmModule.forFeature([Content])],
  exports: [ContentService, TypeOrmModule]
})
export class ContentModule {}
