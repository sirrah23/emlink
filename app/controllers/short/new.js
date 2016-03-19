import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    shortenLink(){
      var link = this.get('link');
      alert(link);
    }
  }
});
