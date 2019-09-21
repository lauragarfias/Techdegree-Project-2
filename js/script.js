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
   for(let i = 0; i <= studentList.length; i ++) {
      if(i >= startIndex && i <= endIndex){
         document.write(studentList[i]);
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

   for(let i = 0; i < page; i ++) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const link = document.createElement('a');
      link.href = '#';
      const text = i + 1
      link.textContent = text
      li.appendChild(link);
      if(link.textContent === 1) {
         link.className = 'active';
      }
      link.addEventListener('click', (e) => {
         const allLinks = document.getElementsByTagName('a');
         const clicked = event.target;
         for(let i = 0; i < allLinks.length; i ++) {
            link.textContent[i].classList.remove('active');
         }
         clicked.className = 'active';
         showPage(studentList, link.textContent);
      })
   }
}

appendPageLinks(studentList);