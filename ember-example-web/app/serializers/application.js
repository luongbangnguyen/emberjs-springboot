import DS from 'ember-data';
import Ember from 'ember';
export default DS.RESTSerializer.extend({

	 serializeIntoHash: function(hash, type, record, options) {
	     var serialized = this.serialize(record, options);
	   
	     serialized.id = record.id ? record.id : 0;
	   
	     Ember.merge(hash, serialized);
	   }

});
