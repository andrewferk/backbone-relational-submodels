require(["router"], function(Router) {

  // Initialize router
  var router = new Router();

  // Initialize route dispatching, and start with index.
  Backbone.history.start({ pushState: false, root: "/" });
});
