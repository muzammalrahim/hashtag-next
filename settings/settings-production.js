const settings = {
  graphql: {
    uri: "",
  },
  meta: {
    rootUrl: "https://hashtag-ca.com/",
    title: "App",
    description: "The app description goes here.",
    social: {
      graphic:
        "https://cheatcode-assets.s3.amazonaws.com/default-social-graphic.png",
      twitter: "@cheatcodetuts",
    },
  },
  routes: {
    authenticated: {
      pathAfterFailure: "/login",
    },
    public: {
      pathAfterFailure: "/documents",
    },
  },
};

export default settings;
