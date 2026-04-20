export type FeaturedEvent = {
  category: string;
  dateText: string;
  title: string;
  description: string;
  location: string;
  time: string;
  image: string;
};

export type UpcomingEvent = {
  id: number;
  category: string;
  title: string;
  location: string;
  time: string;
  dateMonth: string;
  dateDay: string;
  attendees: string;
  image: string;
};

export type PastEventItem = {
  id: number;
  date: string;
  title: string;
  image: string;
};
