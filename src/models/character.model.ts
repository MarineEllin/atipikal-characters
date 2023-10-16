export interface CharacterObject {
    id: number;
    name: string;
    description: string;
    ressourceURI: string;
    thumbnail: {
        path: string;
        extension: string;
    }
    series: {
        "items": [
          {
            resourceURI: string;
            name: string;
          }
        ]
      }
  }