export type NewsItem = {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
  fields: {
    thumbnail: string;
    trailText: string;
  };
};

export type SingleNews = {
  id: string;
  body: string;
  by: string;
  thumbnail: string;
  source: string;
  title: string;
  date: string;
  trailText: string;
};
