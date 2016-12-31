var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current time: ', now.unix());

var timestamp = 1483186051;
var currentMoment = moment.unix(timestamp);
console.log('Current Moment :', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
