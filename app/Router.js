define(["app", "Classroom/Manager"], function(app, ClassroomManager) {
  var Router = Backbone.Router.extend({

    // Defined application routes
    routes: {
      "": "index"
    },

    // Route initializer. Useful for loading singletons, such as module managers.
    initialize: function() {

      // Initialize the ClassroomManager
      app.classroomManager = new ClassroomManager();

    },

    // index routed to by "/" or "/#"
    index: function() {

      // Fetch all the people
      var people = app.classroomManager.fetchPeople();

      // Generate a ul list of all the people
      var list = $("<ul/>");
      people.each(function(person) {
        var li = $("<li/>").append(person.sayHello());
        list.append(li);;
      });

      // Append the ul list to the screen
      $("#main").html(list);
    }
  });

  return Router;
});
