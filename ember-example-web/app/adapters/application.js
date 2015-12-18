import DS from 'ember-data';
import config from 'ember-example-web/config/environment'

export default DS.RESTAdapter.extend({
	host: config.api.host
});
