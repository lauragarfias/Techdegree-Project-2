/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//global variables
let studentList = document.getElementsByTagName('li');
const pageItems =  10;

//Hide all of the items in the list except for the ten I want to show.

const showPage = (list, page) => {
   const startIndex = (page * pageItems) - pageItems
   const endIndex = page * pageItems
   for(let i = 0; i <= studentList.length; i ++) {
      if(i >= startIndex && i <= endIndex){
         return studentList[i];
      }
   }
}
console.log(showPage(studentList, 1));
//Generate, append, and add functionality to the pagination buttons.

/***
const appendPageLinks = (list) => {

}
***/