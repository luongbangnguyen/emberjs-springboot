import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('index',{path: '/'});
    this.route('login');
    this.route('item');
    this.route('category');
});

export default Router;
