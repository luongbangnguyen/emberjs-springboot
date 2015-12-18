import Ember from 'ember';

export default Ember.Component.extend({
	keywordSearch: '',
	pageCurrent: undefined,
	flash: "success",
	textAlert: "",
	categoryChosen: null,
	actions:{
		gotoPageCategory: function(page){
			this.set('pageCurrent',page)
			this.sendAction('gotoPage', page, this.get('keywordSearch'));
		},
		searchCategory: function(){
			this.send('gotoPageCategory', this.get('pageCurrent'));
		},
		typeKeyword: function(){
			if(this.$('.not_found_keyword').length){
				this.$('.not_found_keyword').css({display:'none'});
			}
			if(event.which === 13){
				this.send('searchCategory');
			}
		},
		checkedCategory: function(category){
			this.set('categoryChosen', category);
		},
		chooseCategory: function(){
			if(this.get('categoryChosen') === null){
			  return this.send('alertMessageError', "You have to choose least a category !");
			}

			this.sendAction('chooseCategory', this.get('categoryChosen'));
		},
		alertMessageError: function(message){
			this.set('flash', 'danger')
			this.send('messagePopup', message);
		},
		messagePopup: function(message){

			this.set('textAlert',message);
			this.$('.alert').show();

			 Ember.run.later(() => {
		        this.$('.alert').hide();
		     }, 1500);
		}
	}
});
