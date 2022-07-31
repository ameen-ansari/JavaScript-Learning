let text = document.getElementById('text');
let btn = document.getElementsByClassName('btn')[0];
btn.addEventListener('click',()=>{
     container = localStorage.getItem('container')
     if(container === null){
          container = []
     }
     else{
          container = JSON.parse(container)
     }
     container.push(text.value)
     localStorage.setItem('container',JSON.stringify(container))
     text.value = ""
})