define(function() {

  // app is used as shared storage for the application. This is not ideal,
  // but has its uses.
  var app = {};

  // app.ns is used for namespacing, mostly used with Backbone-relational.
  app.ns = {};
  app.ns.Classroom = {};

  // Application's data store
  app.json = {};
  app.json.people = [{
    name: "Max Malchow",
    type: "Professor"
  },{
    name: "Jamie Libbey",
    type: "Student"
  },{
    name: "Mathew Godley",
    type: "Student"
  }];

  return app;
});
