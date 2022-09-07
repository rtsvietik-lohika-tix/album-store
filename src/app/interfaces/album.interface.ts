import { Track } from './track.interface';

export interface Album {
  name: string;
  releaseDate: string;
  coverImage: string;
  tracks: Track[];
}
