export interface Planet {
  name: string;
  class: string;
  overview: {
    content: string;
  };
  structure: {
    content: string;
  };
  geology: {
    content: string;
  };
  facts: {
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
  };
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
}
