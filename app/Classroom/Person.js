define(["app"], function(app) {

  /**
   * Abstract Person
   */
  app.ns.Classroom.Person = Backbone.RelationalModel.extend({

    /**
     * A Person can either be a Student or a Professor
     */
    subModelTypes: {
      'Student': 'Classroom.Student',
      'Professor': 'Classroom.Professor'
    },

    sayHello: function() {}
  });

  return app.ns.Classroom.Person;

});
