/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//Global variables
let studentList = document.getElementsByClassName('student-item');
const pageItems =  10;

//Hide all of the items in the list except for the ten I want to show.

const showPage = (list, page) => {
   const endIndex = (page * pageItems) - 1;
   const startIndex = endIndex - 9;
   for(let i = 0; i < list.length; i ++) {
      if(i >= startIndex && i <= endIndex){
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
      }
   }
}

//Generate, append, and add functionality to the pagination buttons.

const appendPageLinks = (list) => {
   const parentDiv = document.querySelector('.page');
   const div = document.createElement('div');
   div.className = 'pagination';
   parentDiv.appendChild(div);
   const ul = document.createElement('ul');
   div.appendChild(ul);
   const page = list.length/pageItems;
   const li = [];
   const link = [];

   for(let i = 0; i < page; i ++) {
      li[i] = document.createElement('li');
      ul.appendChild(li[i]);
      link[i] = document.createElement('a');
      link[i].href = '#';
      const text = i + 1;
      link[i].textContent = text;
      li[i].appendChild(link[i]);
      if(i === 0) {
         link[i].className = 'active';
      }
      
      ul.addEventListener('click', (e) => {
         const clicked = event.target;
         for(let i = 0; i < link.length; i ++) {
            console.log(link[i]);
            link[i].classList.remove('active');
         }
         if(clicked) {
            clicked.className = 'active';
            showPage(list, clicked.textContent);
         }
      })
   }
   
}

showPage(studentList, 1);
appendPageLinks(studentList);