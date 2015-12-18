import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('number'),
  numberOfElements: DS.attr('number'),
  totalPages: DS.attr('number'),
  totalElements: DS.attr('number')
});
