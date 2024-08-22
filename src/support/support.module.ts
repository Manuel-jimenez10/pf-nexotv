import { Module } from '@nestjs/common';
import { SupportService } from './support.service';
import { SupportResolver } from './support.resolver';
import { Support } from './entities/support.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [SupportResolver, SupportService],
  imports: [TypeOrmModule.forFeature([Support])],
})
export class SupportModule {}
