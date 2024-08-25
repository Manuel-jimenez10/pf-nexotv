import { Status, Type } from 'src/content/dto/enums/content.enum';
import { CreateContentInput } from 'src/content/dto/inputs/create-content.input';

export const SEED_DATA: CreateContentInput[] = [
  {
    title: 'Arcane Season 2: Official Teaser movie',
    description:
      'Teaser movie for the highly anticipated second season of Arcane.',
    image: 'https://example.com/arcane-season-2.jpg', // Example image URL
    duration: '2:15',
    category: ['Animation', 'Fantasy', 'Action'],
    type: Type.movie,
    status: Status.active,
    contentUrl: [
      `<script src="https://embed.voomly.com/embed/embed-build.js"></script><div class="voomly-embed" data-id="Bo3sXsozPj1gOi1gb1NZi4huAWxmImDDlB2JFWYSYNEmZgBer" data-ratio="1.777778" data-type="v" data-skin-color="#008EFF" data-shadow="" style="width: 100%; aspect-ratio: 1.77778 / 1; background: linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%); border-radius: 10px;"></div>`,
    ],
  },
  {
    title: 'Blanca Nieves: Tráiler Oficial',
    description: 'Official movie of the new Snow White movie.',
    image: 'https://example.com/blanca-nieves.jpg',
    duration: '1:45',
    category: ['Drama', 'Fantasy'],
    type: Type.movie,
    status: Status.active,
    contentUrl: [
      `<script src="https://embed.voomly.com/embed/embed-build.js"></script><div class="voomly-embed" data-id="KJGf1tnPHdObJxENWHs0urAeWRh1Xqiv_AMVeDRaeK7AQwdUB" data-ratio="1.777778" data-type="v" data-skin-color="#008EFF" data-shadow="" style="width: 100%; aspect-ratio: 1.77778 / 1; background: linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%); border-radius: 10px;"></div>`,
    ],
  },
  {
    title: 'Coming to Max in 2024-2025',
    description:
      'Teaser for active series like The Penguin, The White Lotus, and The Last of Us on Max.',
    image: 'https://example.com/max-2024-2025.jpg',
    duration: '2:30',
    category: ['Drama', 'Thriller'],
    type: Type.movie,
    status: Status.active,
    contentUrl: [
      `<script src="https://embed.voomly.com/embed/embed-build.js"></script><div class="voomly-embed" data-id="3x4AdC9YGO86w1h4L1wRn0bjaHUKHBDOfrINJytccN17gjpgM" data-ratio="1.777778" data-type="v" data-skin-color="#008EFF" data-shadow="" style="width: 100%; aspect-ratio: 1.77778 / 1; background: linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%); border-radius: 10px;"></div>`,
    ],
  },
  {
    title: 'Deadpool & Wolverine: Tráiler Oficial',
    description: 'Official movie of Deadpool and Wolverine.',
    image: 'https://example.com/deadpool-wolverine.jpg',
    duration: '2:05',
    category: ['Action', 'Comedy'],
    type: Type.movie,
    status: Status.active,
    contentUrl: [
      `<script src="https://embed.voomly.com/embed/embed-build.js"></script><div class="voomly-embed" data-id="AsZcFtDqOUDBglcV2EQ-utvfAAyGwTiyhwtQFdrHPabYEh0gX" data-ratio="1.777778" data-type="v" data-skin-color="#008EFF" data-shadow="" style="width: 100%; aspect-ratio: 1.77778 / 1; background: linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%); border-radius: 10px;"></div>`,
    ],
  },
  {
    title: 'Hellboy: The Crooked Man - Official movie',
    description:
      'Official movie of Hellboy: The Crooked Man, premiering at Comic Con 2024.',
    image: 'https://example.com/hellboy.jpg',
    duration: '2:20',
    category: ['Fantasy', 'Action'],
    type: Type.movie,
    status: Status.active,
    contentUrl: [
      `<script src="https://embed.voomly.com/embed/embed-build.js"></script><div class="voomly-embed" data-id="EbmADx8dM9aejsVf0wVh5BvYX86GADaw05IxDSNZSYa3K3Fwf" data-ratio="1.777778" data-type="v" data-skin-color="#008EFF" data-shadow="" style="width: 100%; aspect-ratio: 1.77778 / 1; background: linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%); border-radius: 10px;"></div>`,
    ],
  },
  {
    title: 'Joker: Folie À Deux - Official movie',
    description: 'Official movie for Joker: Folie À Deux.',
    image: 'https://example.com/joker-folie-a-deux.jpg',
    duration: '2:30',
    category: ['Drama', 'Thriller'],
    type: Type.movie,
    status: Status.active,
    contentUrl: [
      `<script src="https://embed.voomly.com/embed/embed-build.js"></script><div class="voomly-embed" data-id="YLuJ1VyuNYTLj9sa1gSaWNO6tEiEHjNWz0tLQI1UnVJk6Wt8S" data-ratio="1.777778" data-type="v" data-skin-color="#008EFF" data-shadow="" style="width: 100%; aspect-ratio: 1.77778 / 1; background: linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%); border-radius: 10px;"></div>`,
    ],
  },
  {
    title: 'Mufasa: El Rey León - Tráiler Oficial',
    description: 'Official movie of Mufasa: El Rey León.',
    image: 'https://example.com/mufasa.jpg',
    duration: '2:00',
    category: ['Animation', 'Drama'],
    type: Type.movie,
    status: Status.active,
    contentUrl: [
      `<script src="https://embed.voomly.com/embed/embed-build.js"></script><div class="voomly-embed" data-id="W0WfFt3Dx_bIGdYPdxMDApsRPSFslWyWglMVQ3Ntbdb4OyxmS" data-ratio="1.777778" data-type="v" data-skin-color="#008EFF" data-shadow="" style="width: 100%; aspect-ratio: 1.77778 / 1; background: linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%); border-radius: 10px;"></div>`,
    ],
  },
  {
    title: 'Secret Level - Teaser movie',
    description: "Teaser movie for Prime Video's active series, Secret Level.",
    image: 'https://example.com/secret-level.jpg',
    duration: '1:50',
    category: ['Thriller', 'Sci-Fi'],
    type: Type.movie,
    status: Status.active,
    contentUrl: [
      `<script src="https://embed.voomly.com/embed/embed-build.js"></script><div class="voomly-embed" data-id="gl6rcHgs2CdHGN4Ef5hzUhtPeWQvGSDXO5YnmEgBAMlbP3a4a" data-ratio="1.777778" data-type="v" data-skin-color="#008EFF" data-shadow="" style="width: 100%; aspect-ratio: 1.77778 / 1; background: linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%); border-radius: 10px;"></div>`,
    ],
  },
];
