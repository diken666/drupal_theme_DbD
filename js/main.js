let menuItems = document.getElementsByClassName('my-menu')[0].children;
for (let i=0; i<menuItems.length; i++) {
  menuItems[i].addEventListener('mouseenter', ()=>{
    console.log("->", i)
    for (let item of menuItems[i].children) {
      if (item.tagName === 'UL') {
        console.log("-->", i)
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
