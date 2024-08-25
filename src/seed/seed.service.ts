import { Inject, Injectable } from '@nestjs/common';
import { SEED_MOVIES } from './data/seed-data';
import { ContentService } from 'src/content/content.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Content } from 'src/content/entities/content.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeedService {
  constructor(private readonly contentService: ContentService,
    @InjectRepository(Content)
    private readonly contenidoRepository: Repository<Content>,
  ){}
  

  async loadMovies(){
    const movies = []
    for (const movie of SEED_MOVIES) {
      movies.push(await this.contentService.create(movie))
    }
    return movies[0]
  }
  
  async preloadMovies(): Promise<string> {
    for (const movieData of SEED_MOVIES) {
      const existingContent = await this.contenidoRepository.findOne({
        where: { titulo: movieData.titulo },
      });

      if (!existingContent) {
        const newContent = await this.contentService.create(movieData);
        await this.contenidoRepository.save(newContent);
      }
    }

    return 'Movies preloaded successfully.';
  }
}
