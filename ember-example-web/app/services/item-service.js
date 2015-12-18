import Ember from 'ember';
export default Ember.Service.extend({
	ajax: Ember.inject.service(),
	 getItemsByCategoryId(categoryId,page = 0){
	 	 return this.get('ajax').request('items/category/'+categoryId+'?page='+page);
	 },
	 updateItem(item, id){
	 	return this.get('ajax').put('items/'+id,
	 		{dataType: "JSON",
	 		contentType: "application/json;charset=UTF-8",
	 		data: JSON.stringify({"item":item})});
	 },
	 saveNewItem(item){
	 	return this.get('ajax').post('items',
	 	{dataType: "JSON",
	 	contentType: "application/json;charset=UTF-8",
	 	 data: JSON.stringify({'item': item})
	 	});
	 },
	 getNewItem(){
	 	return this.get('ajax').post('items/getNewItem');
	 },
	 deleteItem(itemId){
	 	return this.get('ajax').del('items/'+itemId,{contentType: "application/json;charset=UTF-8", dataType: "JSON"});
	 }
});
