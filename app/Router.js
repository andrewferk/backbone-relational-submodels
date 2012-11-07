define(function() {
  var Router = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    initialize: function() {
      console.info("Router initialized");
    },

    index: function() {
      console.info("route to #index");
    }
  });

  return Router;
});
