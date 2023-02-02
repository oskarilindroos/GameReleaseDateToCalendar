export interface APIresponse {
  id: number;
  cover: {
    id: number;
    image_id: string;
  };
  first_release_date: number;
  name: string;
  screenshots: number[];
  summary: string;
}

// Formatted game
export interface Game {
  id: number;
  name: string;
  summary: string;
  coverId: string;
  screenshots: Array<number>;
  releasingInString: string;
  firstReleaseDateString: string;
}
