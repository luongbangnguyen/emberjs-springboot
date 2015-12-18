import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		save: function () {
			this.sendAction('save');
		},
		close: function(){
			this.sendAction('close');
		}
	}
});
