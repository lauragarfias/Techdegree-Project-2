/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//Global variables
let studentList = document.getElementsByTagName('li');
const pageItems =  10;

//Hide all of the items in the list except for the ten I want to show.

const showPage = (list, page) => {
   const endIndex = (page * pageItems) - 1;
   const startIndex = endIndex - 9;
   for(let i = 0; i <= list.length; i ++) {
      if(i >= startIndex && i <= endIndex){
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
      }
   }
}

//Generate, append, and add functionality to the pagination buttons.

/**
 If you console log link then you can see that the value goes from 1 to 6 so the value is always changing and will be 6 due to which your if(link.textContent === 1) will never work.
 One way to get around this is to create array for all your list and a.
 **/

const appendPageLinks = (list) => {
   const parentDiv = document.querySelector('.page');
   const div = document.createElement('div');
   div.className = 'pagination';
   parentDiv.appendChild(div);
   const ul = document.createElement('ul');
   div.appendChild(ul);
   const page = list.length/pageItems;

   for(let i = 0; i < page; i ++) {
      const li = [];
      li[i] = document.createElement('li');
      ul.appendChild(li[i]);
      const link = [];
      link[i] = document.createElement('a');
      link[i].href = '#';
      const text = i + 1;
      link[i].textContent = text;
      li[i].appendChild(link[i]);
      if(i === 0) {
         link[i].className = 'active';
      }
      
      parentDiv.addEventListener('click', (e) => {
         const clicked = event.target;
         for(let i = 0; i <= link.length; i ++) {
            link[i].classList.remove('active');
         }
         if(clicked) {
            clicked.className = 'active';
            showPage(list, link[i].textContent);
         }
      })
   }
   
}

appendPageLinks(studentList);