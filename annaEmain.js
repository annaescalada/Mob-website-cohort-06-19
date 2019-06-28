'use strict';



function main() {
  var experimentTitles = document.querySelectorAll('#my-experiments h3');
  console.log(experimentTitles)
  experimentTitles.forEach(function (title) {
    title.addEventListener('click', showAndHide);
  });

  function showAndHide(event) {
    console.log(event.target)
    var title = event.target;
    var header = title.parentNode;
    console.log(header);
    var content = header.nextSibling.nextSibling;
    console.log(content);
    content.classList.toggle('display-none')
  }

}

window.addEventListener('load', main);

