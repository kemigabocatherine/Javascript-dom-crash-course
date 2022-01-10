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
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);

//Changing header content
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'Goodbye'; //pays attention to the styling if any
headerTitle.innerHTML = '<h3>Hello</h3>';
