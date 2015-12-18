import Ember from 'ember';

export default Ember.Route.extend({
	title: "Category",
	itemService : Ember.inject.service('item-service'),
	queryParams: {
	    page: {
	      refreshModel: true
	    }
	  },
	model(params){
			var page = params.page || 1;
			return this.store.query('category', {page: page-1});
	},
	setupController: function(controller, model) {
	    this.controllerFor('category').set('model', model);
	 },
	actions: {
		saveCategory: function(){
			var category = this.controller.get('categoryObject');
			var items = this.controller.get('listItem');
			var page = this.controller.get('page') || 0;
			category.save().then(data => {
				this.send('saveListItemFlowCategory', data, items);
				if(page < 1){
					this.transitionTo('category', {queryParams: {page: 1}});
				}else{
					this.refresh();
				}	
			});
		},
		saveListItemFlowCategory: function(category, items){
			if(items.get('length') > 0){
				items.forEach(item => {
					item.set('category', category);
					item.save();
				});
			}
		},
		updateCategory: function(categoryUpdate, listItemUpdate){
			var error = false;
			var self = this;
			if(listItemUpdate !== []){
				listItemUpdate.forEach(item => {
					self.send('updateItem', item);	
				});

			}
			categoryUpdate.save().then( () => {
				this.refresh();
				this.send('notifySuccess', "Category updated successfull !");
			}).catch(() => {
				this.send('notifyError', "Category updated unsuccessfull !");
			});
		},
		deleteConfirm: function(category){
			category.destroyRecord().then( () => {
				this.refresh();
				this.controllerFor('category').send("alertMessage", "Deleted category successfull !");
			});
		},
		notifyError: function(message){
			this.controllerFor('category').send('alertMessageError', message);
		},
		notifySuccess: function(message){
			this.controllerFor('category').send('alertMessage', message);
		},
		updateItem: function(item){
			var categoryInItem = item.category;
			if(!!categoryInItem.get){
				var category = {
					id : item.category.id,
					createDate: categoryInItem.get('createDate'),
					updateDate: categoryInItem.get('updateDate'),
					name: categoryInItem.get('name')
				};

				var itemClone = {
					id: item.id,
					createDate: item.createDate,
					updateDate: item.updateDate,
					name: item.name,
					price: item.price,
					amount: item.amount,
					category: category
				};

				this.get('itemService').updateItem(itemClone, itemClone.id).catch(() => {
					this.send('notifyError', "Item Updated unsuccessfull !");
				});
			}else{
				this.get('itemService').updateItem(item, item.id).catch(() => {
					this.send('notifyError', "Item Updated unsuccessfull !");
				});
			}
			
		}
	}
	
});
