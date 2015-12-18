import DS from 'ember-data';
import Copyable from 'ember-cli-copyable'; 
export default DS.Model.extend(Copyable,{
    createDate: DS.attr('date',{
    	defaultValue(){
    		return new Date();
    	}
    }),
    updateDate: DS.attr('date', {
    	defaultValue(){
    		return new Date();
    	}
    })
});
