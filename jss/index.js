let button = document.getElementById('openButton');
let hideButton = document.getElementById('hideButton');
let list = document.getElementById('lists');
list.style.display = 'none';
hideButton.style.display = 'none';

button.onclick = function() {
    // if (list.style.display === 'none') {
      list.style.display = 'inline-block';
      button.style.display = 'none';
      hideButton.style.display = 'inline';
    // } else if (list.style.display !== 'none') {
    //   list.style.height = 'none';
    // }
};

hideButton.onclick = function() {
    list.style.display = 'none';
    hideButton.style.display = 'none';
    button.style.display = 'inline';
}