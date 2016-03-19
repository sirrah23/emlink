import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    shortenLink(){
      var actualLink = this.get('link');
      var host = 'localhost';
      var port = '4200';
      var path = '/red';
      //Generate a string of 5 random alphanumerics
      var shortStr= Math.random().toString(36).substring(2,7);
      //Create full new short link
      var shortLink = 'http://' + host + ':' + port + path + '/' + shortStr;

      //Create new short->actual link model
      var newLink = this.store.createRecord('link',{
        actual: actualLink,
        short: shortLink
      });

      //Save short->actual link path
      newLink.save();

      //Clear form
      this.setProperties({
        link: shortLink
      });
    }
  }
});
