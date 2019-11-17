const ghpages = require("gh-pages");

ghpages.publish(
  "stage",
  {
    remote: "remote-staging",
    user: {
      name: "Angelovski",
      email: "marko.angelovsk@gmail.com"
    }
  },
  function(err) {
    console.warn(err);
  }
);
