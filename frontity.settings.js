const settings = {
  packages: [
    {
      name: "imma-theme",
      state: {
        frontity: {
          url: "https://test.frontity.org",
          title: "Test Frontity Blog",
          description: "WordPress installation for Frontity development",
        },
      },
    },
    // {
    //   name: "@frontity/mars-theme",
    //   state: {
    //     theme: {
    //       menu: [
    //         ["Home", "/"],
    //         ["Nature", "/category/nature/"],
    //         ["Travel", "/category/travel/"],
    //         ["Japan", "/tag/japan/"],
    //         ["About Us", "/about-us/"],
    //       ],
    //       featured: {
    //         showOnList: false,
    //         showOnPost: false,
    //       },
    //     },
    //   },
    // },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          // Website url
          url: "https://test.frontity.org",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
