define(["app", "./Person"], function(app, Person) {

  app.ns.Classroom.Student = Person.extend({
    sayHello: function() {
      return "Hello, I am student " + this.get("name");
    }
  });

  return app.ns.Classroom.Student;
});
