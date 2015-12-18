import Ember from 'ember';

export default Ember.Component.extend({
	itemUpdating: null,
	itemUpdateClone: null,
	itemService : Ember.inject.service('item-service'),
	readOnlyItem: false,
	itemDelete: null,
	itemTitle: "Create new item",
	actions: {
		editItem: function(item){
			this.set('itemTitle', "Update item");
			this.send('getItemUpdateClone', item, data => {
				this.set('itemUpdateClone', data); 
			});
			this.set('itemUpdating', item);
			this.set('readOnlyItem', false);
			this.send('setupModal','modal-update-item');
			this.send('setupModal','modal-categories-chosen');
			this.$('#modal-update-item').modal('show');
		},
		deleteItem: function(item){
			this.set('itemDelete', item);
			this.send('setupModal','modal-delete-item');
			this.$('#modal-delete-item').modal('show');
		},
		deleteConfirm: function(){
			this.$('#modal-delete-item').modal('hide');
			var itemDelete = this.get('itemDelete');
			if(!!itemDelete.destroyRecord){
				this.sendAction('deleteItem', itemDelete);
			}else{
				this.get('itemService').deleteItem(itemDelete.id).then( () => {
					this.sendAction('deleteItem');
				});
			}
		},
		setupModal: function(element){
			let self = this;
			this.$('#'+element).find('[data-dismiss]').removeAttr('data-dismiss');
			this.$('#'+element).find('.closeModal').on('click',function(){
				self.$('#'+element).modal('hide');
			});
		},
		updateItem: function(){
			this.$('#modal-update-item').modal('hide');
			this.sendAction('updateItem',this.get('itemUpdating'));
		},
		closeItemUpdate: function(){
			var itemUpdateClone = this.get('itemUpdateClone');
			if(itemUpdateClone == null){
				return;
			}

			this.set('itemUpdating.name',  itemUpdateClone.name);
			this.set('itemUpdating.price',  itemUpdateClone.price);
			this.set('itemUpdating.amount',  itemUpdateClone.amount);
			this.set('itemUpdating.category', itemUpdateClone.category );
		},
		getItemUpdateClone: function(item, callBack){
			if(!!item.get){
				var itemResult = {
					name: item.get('name'),
					price:  item.get('price'),
					amount: item.get('amount'),
					category: item.get('category')
				};
				return callBack(itemResult);
			}

			var itemResult = {
				name: item.name,
				price: item.price,
				amount: item.amount,
				category: item.category 
			};
			callBack(itemResult);
		},
		viewItem: function(item){
			this.set('itemTitle', "View item");
			this.set('itemUpdating', item);
			this.set('readOnlyItem', true);
			this.send('setupModal','modal-update-item');
			this.$('#modal-update-item').modal('show');
		},
		getNewRecordCategory: function(category, callBack){
			this.sendAction('getNewRecordCategoryUpdate', category, callBack);
		}
	}
});
