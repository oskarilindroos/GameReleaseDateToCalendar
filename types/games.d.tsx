export interface APIresponse {
  id: number;
  cover: {
    id: number;
    image_id: string;
  };
  first_release_date: number;
  name: string;
  screenshots?: [
    {
      id: number;
      image_id: string;
    }
  ];
  platforms: [
    {
      id: number;
      abbreviation: string;
    }
  ];
  summary: string;
}

// Formatted game
export interface Game {
  id: number;
  name: string;
  summary: string;
  coverURL: string;
  screenshotURLs: Array<object> | null;
  platforms: Array<string | null>;
  releasingInString: string;
  firstReleaseDateString: string;
  firstReleaseDate: number;
}
