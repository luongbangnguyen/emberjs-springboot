import Ember from 'ember';

export default Ember.Route.extend({
	title: "Item",
	queryParams: {
	    page: {
	      refreshModel: true
	    }
	 },
	model(params){
		var page = params.page || 1;
			return this.store.query('item', {page: page-1});
	},
	setupController(controller, model) {
	    this.controllerFor('item').set('model', model);
	 },
	actions:{
		addNewItem: function(){
			var item = this.controllerFor('item').get('itemNewObject');
			item.save().then(data => {
				if(data){
					this.send('sendMessageSuccess', "Create new item successfull !");
				}
			}).catch( error => {
				if(error){
					this.controllerFor('item').send('alertMessageError', "Create new item fail !");
				}
			});
		},
		updateItem: function(item){
			item.save().then(data => {
				if(data){
					this.send('sendMessageSuccess', "Update item successfull !");
				}
			}).catch(error => {
				if (error)
					this.controllerFor('item').send('alertMessageError', "Create new item fail !");
			});
		},
		sendMessageSuccess: function(message){
			this.controllerFor('item').send('closeModalAfterAddNewItem');
			this.refresh();
			this.controllerFor('item').send('alertMessage', message);
		},
		deleteItem: function(item){
			item.destroyRecord().then(() => {
				this.send('sendMessageSuccess', "Delete item successfull !");
			}).catch(() =>{
				this.controllerFor('item').send('alertMessageError', "Delete item fail !");
			});
		}
	}
});

