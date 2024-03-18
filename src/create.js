const create = (function() {

  console.log("er");
  //cache DOM
  let nextBtn = document.getElementById('next-btn');

  //event listeners 
  nextBtn.addEventListener('click', handleFormClick);


  function handleFormClick(e) {
    e.preventDefault();

    let form = document.getElementById('project-form');
    let projectName = document.getElementById('project-name');
    let projectAuthor = document.getElementById('project-author');

    document.location = './todo.html';

  }



})();