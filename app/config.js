// Configure RequireJS
require.config({

  // After configuring RequireJS, initialize the application.
  deps: ["main"],

  paths: {
    // Allow javascript library files to be required using "libs/backbone", "libs/jquery", "libs/mylib", etc.
    libs: "../assets/js"
  },

  shim: {
    // Configure dependencies for Backbone and export it to global Backbone variable.
    "libs/backbone": {
      deps: ["libs/underscore", "libs/jquery"],
      exports: "Backbone"
    },

    // Configure dependencies for Backbone-relational.
    "libs/backbone-relational": ["libs/backbone"],

    // Configure dependencies for the main application.
    "main": ["libs/backbone", "libs/backbone-relational"]
  }

});
