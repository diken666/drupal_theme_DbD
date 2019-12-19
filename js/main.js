let menuItems = document.getElementsByClassName('my-menu')[0].children;
for (let i=0; i<menuItems.length; i++) {
  menuItems[i].addEventListener('mouseenter', ()=>{
    for (let item of menuItems[i].children) {
      if (item.tagName === 'UL') {
        item.style.display = 'block';
      }
    }
  });
  menuItems[i].addEventListener('mouseleave', ()=>{
    for (let item of menuItems[i].children) {
      if (item.tagName === 'UL') {
        item.style.display = 'none';
      }
    }
  })
}


let swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

