require(["app", "router"], function(app, Router) {

  Backbone.Relational.store.addModelScope(app.ns);

  // Initialize router
  var router = new Router();

  // Initialize route dispatching, and start with index.
  Backbone.history.start({ pushState: false, root: "/" });
});
