define(["app", "./Person"], function(app, Person) {

  app.ns.Classroom.Professor = Person.extend({
    sayHello: function() {
      return "Hello, I am Professor " + this.get("name");
    }
  });

  return app.ns.Classroom.Professor;
});
