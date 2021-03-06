window.onload = function () {

  isChanged = false
  function inStockOnClick(e) {
    sticky = createSticky(e)
    document.getElementById('canvas').appendChild(sticky);
  }

  function createSticky(event){
    sticky = document.createElement('div');
    sticky.className = 'sticky in_canvas';
    sticky.appendChild(createButton())
    sticky.appendChild(createTextArea(event));
    $(sticky).draggable();
    return sticky
  }

  function createButton(params) {
    button = document.createElement('button')
    button.innerHTML = 'X'
    button.addEventListener('click',function(e) {
      document.getElementById('canvas').removeChild(e.toElement.parentElement)
    })
    return button
  }

  function createTextArea(e) {
    textarea = document.createElement('textarea');
    textarea.style.backgroundColor = e.target.style.backgroundColor;
    textarea.addEventListener("mouseleave", function (e) {
      if(isChanged){
        console.log(e.target.value);
        isChanged = false
      }
      e.target.blur();
    })
    textarea.addEventListener("input", function() {isChanged=true})
    return textarea
  }

  in_stock_stickies = Array.from(document.getElementsByClassName('in_stock'))
  in_stock_stickies.forEach(sticky => {
    sticky.addEventListener('click', inStockOnClick, false);
  });
}