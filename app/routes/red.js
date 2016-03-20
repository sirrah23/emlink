import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('link');
  },
  afterModel(model, transition){
    //Link that the user wants to go to
    var short_link = 'http://localhost:4200/red/' + transition.params.red.short_str;
    //See if it exists in our database as a shortened link
    var linkMap = this.store.peekAll('link').filter(function(l){
      return l.get('short') === short_link;
    });
    //If the link does not exist in our db then send
    //them to the home page
    if (linkMap.length == 0){
      this.transitionTo('short.new');
    }
    //Else send them to the actual link
    var sendTo = linkMap[0].get('actual') ;
    window.location.replace("http://" + sendTo);
  }
});
