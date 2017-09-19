/**
 * Created by 17272 on 2017/9/13.
 */
/*
var cache = require('memory-cache');

cache.put('001','张三');
console.log(cache.get('001'));

cache.put('002','李四',200);
cache.put('002','李无',200);
console.log('002 will' + cache.get('002'));
if(cache.get('003')){
    console.log(true)
}else{
    console.log(false)
}

setTimeout(function(){
    console.log('002 is' +cache.get('002'))
},100)*/

/*
var names = ['1','2','3'];
var i = 0;
names.map(function (name) {

    console.log(name);
    console.log(i++);
})*/

//var cs = {
//    id:1,
//    name:2,
//    age:3
//};
//for(var i in cs){
//    console.log(i+' : '+cs[i])
//}
/*var key = 2;
var value = '张三';
window.localStorage.setItem(key,value)
key = 3;
value = '张3';
window.localStorage.setItem(key,value)

var value1 = window.localStorage.getItem(2);
consoler.log(value1);
var value2 = window.localStorage.getItem(3);
consoler.log(value2);


window.localStorage.setItem('uid',11)

window.localStorage.setItem('uid',22)

var value1 = window.localStorage.getItem('uid');
consoler.log(value1);*/

/*var moment = require('moment');
var date  = moment().format('YYYYMMDDHHmmss');
console.log(date)*/
var c1 = 3;
var c=1;
var d  = ((c1 ? 11 : 2) ? 22 : 3) ? 33 : 4;
console.log(d);




