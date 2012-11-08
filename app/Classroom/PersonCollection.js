define(["app", "./Person", "./Student", "./Professor"], function(app, Person) {

  app.ns.Classroom.PersonCollection = Backbone.Collection.extend({
    model: Person
  });

  return app.ns.Classroom.PersonCollection;
});
