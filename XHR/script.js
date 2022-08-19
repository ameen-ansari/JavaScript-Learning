var container = document.getElementsByClassName('card')[0]
var readMore = document.getElementsByClassName('readMore')[0]
var btn = document.getElementById('btn')
btn.addEventListener('click', () => {
  // var url = 'https://jsonplaceholder.typicode.com/posts'
  var xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
  // xhr.onprogress = function () {console.log('onprogress')}
  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(JSON.parse(this.responseText))
      var response = JSON.parse(this.responseText)
    }
    console.log(response)
    try{
    if (response.length <= 100) {
        response.length = 10
        response.forEach((element) => {
          container.innerHTML += `<div class="card-body">
                  <p class="card-text text-center"><b>ID : ${element.id}</b></p>
                  <h4 class="card-title text-center">Title : ${element.title}</h4>
                  <p class="card-text text-center"><b>body : </b>${element.body}</p>
                </div> <p class="text-center text-primary"><b>---> By Ameen Ansari <---</b></p>`
        //   console.log(element)
        })
        container.innerHTML += `<button onclick="readMor() class="btn btn-primary d-block mx-auto readMore">Read More</button>`}
    
    console.log('response', response)}catch{
        console.log('error in xyz');
    }
    // var text = ""

    // container.innerHTML += `<button  class="btn btn-primary d-block mx-auto" class"readMore" onclick="readMor()">Get Request</button>`
  }
  //   console.log(xhr);
  xhr.send()
})
try{
var readMor = function()  {
if (response.length < 100) {
    console.log(xyz);
    //   e.remove()
      response.length += 10
      response.splice(0, 10)
      response.forEach((element) => {
        container.innerHTML += `<div class="card-body">
        <p class="card-text text-center"><b>ID : ${element.id}</b></p>
        <h4 class="card-title text-center">Title : ${element.title}</h4>
        <p class="card-text text-center"><b>body : </b>${element.body}</p>
      </div> <p class="text-center text-primary"><b>---> By Ameen Ansari <---</b></p>`
      
      console.log(readMore[0]);
    })
  } else if (response.length <= 100) {
    response.length = 10
    response.forEach((element) => {
      container.innerHTML += `<div class="card-body">
              <p class="card-text text-center"><b>ID : ${element.id}</b></p>
              <h4 class="card-title text-center">Title : ${element.title}</h4>
              <p class="card-text text-center"><b>body : </b>${element.body}</p>
            </div> <p class="text-center text-primary"><b>---> By Ameen Ansari <---</b></p>`
      console.log(element)
    })
    container.innerHTML += `<button onclick="readMor() class="btn btn-primary d-block mx-auto readMore">Read More</button>`
  }}}catch{
    console.log('Eroer');
  }