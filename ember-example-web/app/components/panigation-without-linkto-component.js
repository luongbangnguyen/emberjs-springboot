import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		goTofistPage: function(){
			this.sendAction('actionReturn',0);
		},
		backwardPage: function(){
			this.sendAction('actionReturn', this.get('meta.number') - 1);
		},
		goToPage: function(page){
			this.sendAction('actionReturn', page - 1);
		},
		forwardPage: function(){
			this.sendAction('actionReturn', this.get('meta.number') + 1);
		},
		goToLastPage: function(){
			this.sendAction('actionReturn', this.get('meta.totalPages') - 1);
		}
	}
});
