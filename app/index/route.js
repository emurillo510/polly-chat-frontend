import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return [ "Job1", "Job2"]; //some data that the component will use
    }
});
