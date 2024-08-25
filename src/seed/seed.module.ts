import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedResolver } from './seed.resolver';
import { ContentModule } from 'src/content/content.module';

@Module({
  imports: [ContentModule],
  providers: [SeedResolver, SeedService],
})
export class SeedModule {}
