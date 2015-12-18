import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		deleteConfirm: function(){
			this.sendAction('deleteConfirm');
		}
	}
});
