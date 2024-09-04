export interface ToolsItem {
  icon: string;
  title: string;
}

export interface FeatureItem {
  description: string;
  icon: string;
  title: string;
}

export interface FooterLink {
  icon: string;
  url: string;
}

export interface WebsiteContent {
  seo: {
    title: string;
    description: string;
  };
  header: {
    navItems: {
      name: string;
      url: string;
    }[];
  };
  splash: {
    one: string;
    two: string;
    three: string;
  };
  intro: {
    title: string;
    one: string;
    two: string;
    three: string;
    button_one: string;
    button_two: string;
  };
  features: {
    title: string;
    text: string;
    one: {
      title: string;
      text: string;
    };
    two: {
      title: string;
      text: string;
    };
  };
  tools: {
    title: string;
    text: string;
  };
  end: {
    title: string;
    text: string;
  };
  languageSwitch: string;
}
