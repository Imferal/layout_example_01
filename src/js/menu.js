window.onscroll = function (){stickyHeader()}

// Находим хедер
const HEADER = document.getElementById('header');

// Получаем текущее положение хедера
let sticky = HEADER.offsetTop;

// Меняем класс в зависимости от позиции скролла
function stickyHeader(){
  if (window.pageYOffset >= sticky) {
    HEADER.classList.add('sticky')
  } else {
    HEADER.classList.remove('sticky')
  }
}
