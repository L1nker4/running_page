interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Records',
  siteUrl: 'https://run.l1n.wang',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: '一往无前',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://l1n.wang',
    },
    {
      name: 'About',
      url: 'https://l1n.wang/about/',
    },
  ],
};

export default data;
