let btn = [...document.querySelectorAll('.slider-control')];
let sliderItems = [...document.querySelectorAll('.slider-item')];
let sliderItemsLength =sliderItems.length;
let isClicked = false;
let itemNumber = 1;
var item_height = sliderItems[0].offsetHeight;

/*window.onload = function() {
  let item_height = document.querySelector('.slider-item').offsetHeight;
};*/
addLoadEvent(sliderClickHandler);
addLoadEvent(initialSliderText);

/*document.ready(() =>{
  console.log('ready');
  console.log(sliderItems[0].offsetHeight);
});*/


function sliderClickHandler(){
  btn.forEach((item, i) => {
    item.addEventListener('click', () =>{
      if(isClicked) return;

      isClicked = true;
      var option = parseInt(item.getAttribute('data-option'), 10);


      itemNumber = itemNumber + option;
      if(itemNumber < 1)
        itemNumber = sliderItemsLength;
      if(itemNumber > sliderItemsLength)
        itemNumber = 1;


      item.classList.add('item-change-animation');

      setTimeout(function() {
        sliderItems[0].setAttribute('style', `margin-top:-${(itemNumber -1) * item_height}px;`);
        console.log(`margin-top:-${(itemNumber -1) * item_height}px;`);
      }, 900);

      setTimeout(function() {
        item.classList.remove('item-change-animation');
        isClicked = false;
        }, 3000);
    });
  });
}

function initialSliderText(){
  let sliderText = [...document.querySelectorAll('.slider-item-title')];
  let textHeight = 0;

  sliderText.forEach((item, i) => {
    if(textHeight < item.offsetHeight)
      textHeight = item.offsetHeight;
  });

  sliderText.forEach((item, i) => {
    item.setAttribute('style',`height:${textHeight}px;`);
  });

  item_height = sliderItems[0].offsetHeight;
  console.log("item_height = " + item_height);
}

function addLoadEvent(newOnLoadfunction) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
      window.onload = newOnLoadfunction;
    } else {
      window.onload = function() {
        if (oldonload) {
          oldonload();
        }
        newOnLoadfunction();
      }
    }
}
/*btn.forEach((item, i) => {
  item.addEventListener('click', () =>{
    if(isClicked) return;

    isClicked = true;
    var option = parseInt(item.getAttribute('data-option'), 10);


    itemNumber = itemNumber + option;
    if(itemNumber < 1)
      itemNumber = sliderItemsLength;
    if(itemNumber > sliderItemsLength)
      itemNumber = 1;


    item.classList.add('item-change-animation');

    setTimeout(function() {
      sliderItems[0].setAttribute('style', `margin-top:-${(itemNumber -1) * item_height}px;`);
      console.log(`margin-top:-${(itemNumber -1) * item_height}px;`);
    }, 900);

    setTimeout(function() {
      item.classList.remove('item-change-animation');
      isClicked = false;
      }, 3000);
  });
});*/

/*btn.addEventListener('click', () =>{
  if(isClicked) return;
  isClicked = true;
  btn.classList.add('item-change-animation');

  setTimeout(function() {
    btn.classList.remove('item-change-animation');
    isClicked = false;
    }, 3000);
});*/
