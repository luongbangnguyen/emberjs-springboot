import DS from 'ember-data';
import Model from '../serializers/model'
export default Model.extend(DS.EmbeddedRecordsMixin,{
	attrs: {
	    category: { embedded: 'always' }
	},
	isNewSerializerAPI: true
});
