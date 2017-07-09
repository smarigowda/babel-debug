let _ = require('underscore');

function selectNames(table) {
  return _.rest(_.map(table, _.first))
  // return _.map(table, _.first)
}

let table = [['Name', 'Age', 'Sex'],
['Santosh', '43', 'Male'],
['Roopa', '40', 'Female'],
['Sukruthi', '12', 'Female']];

let result = selectNames(table);

debugger;