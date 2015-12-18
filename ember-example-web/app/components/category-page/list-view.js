import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		chooseCategory: function(category){
			this.$('.check-category:checked').prop('checked', false);
			this.$(event.target).prop('checked', true);
			this.sendAction('checkedCategory', category);
		}
	}
});
