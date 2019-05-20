var text=document.getElementById("text");
var ul=document.getElementById("ul");
text.addEventListener("keyup",(e)=>{
        
       let arrayList=Array.from(ul.children)
              
            arrayList.forEach((item,i) => {
            if(item.textContent.toLowerCase().includes(e.target.value)){
                
                item.style.display="block"
            }else(
                item.style.display="none"
            )
            }
        );     
}
)