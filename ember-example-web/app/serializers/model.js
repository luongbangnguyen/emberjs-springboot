import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	extractMeta: function(store, typeClass, payload) {
	    if (payload.meta) {
	      	store.set('meta', payload.meta);
	      	delete payload.meta;
	    }
  	}
});
