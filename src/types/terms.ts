export type TermsHighlight = {
  title: string;
  list: string[];
};

export type TermsSection = {
  id: string;
  title: string;
  content?: string;
  list?: string[];
  highlight?: TermsHighlight;
};
