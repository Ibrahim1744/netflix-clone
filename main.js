const tabs=document.querySelectorAll('.tab-item ')
const contentTab=document.querySelectorAll('.tab-content-item')
tabs.forEach(item => {
   item.addEventListener("click",(eo)=>{
      tabs.forEach(element => {
       element.classList.remove('tab-border')
      });
       item.classList.add('tab-border')
   }) 
});
tabs.forEach((item,index) => {
   item.addEventListener("click",(eo)=>{
       contentTab.forEach(element => {
           element.classList.remove('show');   
       });
       contentTab[index].classList.add('show')           
   })
});

