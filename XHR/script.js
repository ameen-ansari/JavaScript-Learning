var container = document.getElementsByClassName('card')[0]
var btn = document.getElementById('btn');
btn.addEventListener('click',() => {
    // var url = 'https://jsonplaceholder.typicode.com/posts'
    var xhr =new XMLHttpRequest()
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true)
    // xhr.onprogress = function () {console.log('onprogress')}
    xhr.onload = function () {
        if(this.status === 200){
        // console.log(JSON.parse(this.responseText))
        var response = JSON.parse(this.responseText) 
        // console.log(response);
        var text = ""
        response.forEach(element => {
            container.innerHTML +=`<div class="card-body">
            <p class="card-text text-center"><b>ID : ${element.id}</b></p>
            <h4 class="card-title text-center">Title : ${element.title}</h4>
            <p class="card-text text-center"><b>body : </b>${element.body}</p>
          </div> <p class="text-center text-primary"><b>---> By Ameen Ansari <---</b></p>`
        });
        }else{
            console.log(this.status);
            console.log('badluck');
        }
    }
    console.log(xhr);
    xhr.send()
})
