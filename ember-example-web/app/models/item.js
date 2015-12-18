import DS from 'ember-data';
import Model from '../models/model'
export default Model.extend({
   name: DS.attr('string'),
   price: DS.attr('number'),
   amount: DS.attr('number'),
   category: DS.belongsTo('category')
});
