 //EXAMINE THE DOCUMENT OBJECT //
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 123; //can change title
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.forms); //Brings out any form in the document
console.log(document.links);


// SELECTORS //
// GETELEMENTBYID //
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);

//Changing header content
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'Goodbye'; //pays attention to the styling if any
headerTitle.innerHTML = '<h3>Hello</h3>';

//Changing styles
header.style.borderBottom = 'solid 3px #fff';

//GET ELEMENTS BY CLASS NAME //
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[0]);
items[1].textContent = 'Hello2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

//Gives error
items.style.backgroundColour = '#f4f4f4'; 
//instead iterate through the items

for(var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}

//GET ELEMENTS BY TAG NAME//
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello2';
li[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

//Gives error
items.style.backgroundColour = '#f4f4f4'; 
//instead iterate through the items

for(var i = 0; i < li.length; i++){
    li[i].style.backgroundColor = '#f4f4f4';
}

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

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'purple';

//QUERY SELECTOR ALL//
var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'skyBlue';
    even[i].style.backgroundColor = 'orange';
}


// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);
itemList.parentNode.parentNode.parentNode.style.backgroundColor = '#ccc';

// parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

// // childNodes -> Not recommended instead use Children
console.log(itemList.childNodes);
// children
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "yellow";

// // FirstChild
console.log(itemList.firstChild); //not recommended
// firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';
// // Also lastChild & lastElementChild which do the same 

// // next sibling
console.log(itemList.nextSibling);
// next element sibling
console.log(itemList.nextElementSibling);
// // there is also previous element sibling


// //CREATE ELEMENTS

//create a div
var newDiv = document.createElement('div');

// //Add class
newDiv.className = 'hello';

// //Add id
newDiv.id = 'hello1';

// //Add attribute
newDiv.setAttribute('title', 'Hello Div');

// // Create text node
var newDivText = document.createTextNode('Hello World');

// //Add text to div
newDiv.appendChild(newDivText);


var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1);


// EVENT LISTENERS //
var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e){
    console.log('Button Clicked');
    document.getElementById('header-title').textContent = 'Changed';
    document.querySelector('#main').style.cssText = "background-color: #f4f4f4";
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    var output = document.getElementById('output');
    output.innerHTML = '<h3>'+e.target.id+'</h3>';

//     // Event object
    console.log(e.type);

//     // from browser window
    console.log(e.clientX);
    console.log(e.clientY);

//     // from actual element
    console.log(e.offsetX);
    console.log(e.offsetY);

    console.log(e.shiftKey);
}

var button = document.getElementById('button');
var box = document.getElementById('box');
button.addEventListener('click', runEvent);
button.addEventListener('dblclick', runEvent);

// MOUSE EVENTS
button.addEventListener('mousedown', runEvent);
button.addEventListener('mouseup', runEvent);

box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseleave', runEvent);

box.addEventListener('mouseover', runEvent);
box.addEventListener('mouseout', runEvent);
// box.addEventListener('mousemove', runEvent); 

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

itemInput.addEventListener('keydown', runEvent);
itemInput.addEventListener('keyup', runEvent);
itemInput.addEventListener('keypress', runEvent);

itemInput.addEventListener('focus', runEvent);
itemInput.addEventListener('blur', runEvent);

itemInput.addEventListener('cut', runEvent);
itemInput.addEventListener('paste', runEvent);

itemInput.addEventListener('input', runEvent);

select.addEventListener('change', runEvent);
form.addEventListener('submit', runEvent);

function runEvent(e){
    e.preventDefault();
    console.log('EVENT TYPE: '+e.type);
    console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'
    output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

    box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";


}






































































































































































































