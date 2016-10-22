import Ember from 'ember';

export default Ember.Controller.extend({

    name: "Elton",
    jobs: this.get('model');

    // can access model data
});
