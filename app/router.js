import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('short', function() {
    this.route('new');
  });
  this.route('red', {path: '/red/:short_str'});
});

export default Router;
