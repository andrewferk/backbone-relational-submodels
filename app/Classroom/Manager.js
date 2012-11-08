define(["app", "Classroom/PersonCollection"], function(app, PersonCollection) {

  // Classroom Manager initializer
  var ClassroomManager = function() {
    this.people = null;
  };

  //
  // Public methods
  //

  ClassroomManager.prototype.fetchPeople = function() {
    if (!this.people) {
      this.people = _fetchPeople.call();
    }
    return this.people;
  };

  //
  // Private methods
  //

  function _fetchPeople() {
    var people = new PersonCollection(app.json.people);
    return people;
  }

  // Setup namespace and return Classroom Manager
  app.ns.Classroom.Manager = ClassroomManager;
  return app.ns.Classroom.Manager;
});
