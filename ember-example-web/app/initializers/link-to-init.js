export function initialize(/* container, application */) {
  	Ember.LinkComponent.reopen({
  		attributeBindings: ['data-toggle','data-page']
	});
	Ember.TextField.reopen({
	  attributeBindings: ['readonly', 'disabled']
	});
}

export default {
  name: 'link-to-init',
  initialize: initialize
};
