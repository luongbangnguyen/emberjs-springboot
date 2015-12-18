import Ember from 'ember';

export function ifCond(params/*, hash*/) {
  var v1 = params[0];
  var operator = params[1];
  var v2 = params[2];
  switch (operator) {
        case '==':
            return (v1 == v2);
        case '===':
            return (v1 === v2);
        case '<':
            return (v1 < v2);
        case '<=':
            return (v1 <= v2);
        case '>':
            return (v1 > v2);
        case '>=':
            return (v1 >= v2);
        case '&&':
            return (v1 && v2);
        case '||':
            return (v1 || v2);
    }
    return false;

}

export default Ember.Helper.helper(ifCond);
