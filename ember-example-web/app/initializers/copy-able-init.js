import Copyable from 'ember-cli-copyable'; 
export function initialize(/* container, application */) {
  	Ember.Object.reopen(Copyable,{})
}

export default {
  name: 'copy-able-init',
  initialize: initialize
};
