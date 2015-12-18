import Ember from 'ember';

export default Ember.Route.extend({
	title: "Example ember spring boot",
	itemService : Ember.inject.service('item-service'),
	categoryService: Ember.inject.service('category-service'),
	queryParams: {
	    category_page: {
	      refreshModel: true
	    },
	    item_page:{
	    	refreshModel: true
	    },
	    category: {
	    	refreshModel: true
	    },
	    gotoPage:{
	    	refreshModel: true
	    }

	 },
	model(params){
		var pageCategory = params.category_page-1 || 0;
		var pageItem = params.item_page-1 || 0;
		var categoryId = params.category || -1;
		var gotoPage = params.gotoPage || false;
		return new Ember.RSVP.Promise(resove => {
			this.store.query('category', {page: pageCategory}).then(categories => {
				var categoryFirstId = categoryId;

				if(gotoPage === true || gotoPage ===  'true' || categoryId === -1){
					categoryFirstId = categories.get('firstObject').get('id');
				}
				this.get('itemService').getItemsByCategoryId(categoryFirstId, pageItem).then(data => {
					resove({
						items: data.items,
						metaItem: data.meta,
						categories: categories,
						categoryId: categoryFirstId
					});
				});


			});
		});
	},
	actions: {
		gotoPageCategory: function (page) {
			this.transitionTo({ queryParams: { category_page: page+1, gotoPage: true }});
		},
		gotoPageItem: function(page){
			this.transitionTo({ queryParams: { item_page: page+1 }});
		},
		getItems: function(categoryId){
			this.transitionTo({ queryParams: { category: categoryId, item_page: 1, gotoPage: false }});

		}
	}
});

