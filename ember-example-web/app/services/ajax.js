import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import config from 'ember-example-web/config/environment';

export default AjaxService.extend({
  host: config.api.host
});