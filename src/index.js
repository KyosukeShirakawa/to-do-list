
const main = (function() {

  ///cache DOM
  let logo = document.getElementById('logo');
  let headCreateBtn = document.getElementById('header-create-btn');
  let mainCreateBtn = document.getElementById('main-create-btn');

  //even listeners
  logo.addEventListener('click', () => {
    document.location = './index.html';
    console.log('ds')
  });

  headCreateBtn.addEventListener('click', () => {
    document.location = './create.html';
    console.log('ds')
  });

  mainCreateBtn.addEventListener('click', () => {
    document.location = './create.html';
    console.log('ds')
  });


  return {
  }
})();


