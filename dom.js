//EXAMINE THE DOCUMENT OBJECT //
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123; //can change title
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.forms); //Brings out any form in the document
//console.log(document.links);


// SELECTORS //
// GETELEMENTBYID //
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);

//Changing header content
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye'; //pays attention to the styling if any
//headerTitle.innerHTML = '<h3>Hello</h3>';

//Changing styles
//header.style.borderBottom = 'solid 3px #fff';

//GET ELEMENTS BY CLASS NAME //
/*var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[0]);
items[1].textContent = 'Hello2';
items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';

//Gives error
//items.style.backgroundColour = '#f4f4f4'; 
//instead iterate through the items

for(var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}*/

//GET ELEMENTS BY TAG NAME//
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello2';
// li[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';

//Gives error
//items.style.backgroundColour = '#f4f4f4'; 
//instead iterate through the items

// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

//QUERY SELECTOR // ->only one item (the first one)
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #000';

var input = document.querySelector('input');
input.value = 'Hello world';

var submit = document.querySelector('input[type= "submit"]');
submit.value = "SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';


