var container = document.getElementsByClassName('card')[0]
var readMore = document.getElementsByClassName('readMore')
var readless = document.getElementsByClassName('readless')
var btn = document.getElementById('btn')
var initialresponse
var response1
var response2
var num = [1,2,3,4,5,6,7,8,9,10]
// console.log(num.length);

getfunc = (e) => {
  e.remove()
  // console.log(btn);
  var url = 'https://jsonplaceholder.typicode.com/posts'
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.onload = function () {
    if (this.status === 200) {
      initialresponse = JSON.parse(this.responseText)
      // response1 = initialresponse.slice(0)
    }
    if(num.length === 0){
      num.length = 10
    }
    response2 = initialresponse.slice(0)
    // console.log(initialresponse.length)
    if (response2.length <= 100) {
      container.innerHTML = ''
      response2 = initialresponse.slice(0,10)
      // console.log(response2)
      response2.forEach((element) => {
        container.innerHTML += `<div class="card-body">
      <p class="card-text text-center"><b>ID : ${element.id}</b></p>
      <h4 class="card-title text-center">Title : ${element.title}</h4>
      <p class="card-text text-center"><b>body : </b>${element.body}</p>
      </div> <p class="text-center text-primary"><b>---> By Ameen Ansari <---</b></p>`
      })
      container.innerHTML += `<div class="d-flex w-75 mx-auto justify-content-between align-item-center"><button class="btn bg-dark text-white rounded d-inline-block mx-auto readMore" onclick="readmor(this)">Read More</button><button class="btn rounded d-inline-block mx-auto readMore bg-dark text-white" onclick="readless(this)">Read Less</button></div>`
    }
    btnremover()
  }
  xhr.send()
}
readmor = () => {
  if (response2.length <= 100) {
    container.innerHTML = ''
    if (num.length === 0) {
      num.length = num.length + 5
    }
    else if(num.length < 100){
      // console.log(num.length);
      num.length = num.length + 5
    }
    response2 = initialresponse.slice(0, num.length)
    // console.log(response2)
    response2.forEach((element) => {
      container.innerHTML += `<div class="card-body">
    <p class="card-text text-center"><b>ID : ${element.id}</b></p>
    <h4 class="card-title text-center">Title : ${element.title}</h4>
    <p class="card-text text-center"><b>body : </b>${element.body}</p>
    </div> <p class="text-center text-primary"><b>---> By Ameen Ansari <---</b></p>`
    })
    container.innerHTML += `<div class="d-flex w-75 mx-auto justify-content-between align-item-center"><button class="btn bg-dark text-white rounded d-inline-block mx-auto readMore" onclick="readmor(this)">Read More</button><button class="btn rounded d-inline-block mx-auto readMore bg-dark text-white" onclick="readless(this)">Read Less</button></div>`
  }
  btnremover()
}
readless = () => {
  if (response2.length <= 100) {
    container.innerHTML = ''
    if(num.length < 100){
      // console.log(num.length);
      num.length = num.length - 5
    }
    response2 = initialresponse.slice(0, num.length)
    // console.log(response2)
    response2.forEach((element) => {
      container.innerHTML += `<div class="card-body">
    <p class="card-text text-center"><b>ID : ${element.id}</b></p>
    <h4 class="card-title text-center">Title : ${element.title}</h4>
    <p class="card-text text-center"><b>body : </b>${element.body}</p>
    </div> <p class="text-center text-primary"><b>---> By Ameen Ansari <---</b></p>`
    })
    container.innerHTML += `<div class="d-flex w-75 mx-auto justify-content-between align-item-center"><button class="btn bg-dark text-white rounded d-inline-block mx-auto readMore" onclick="readmor(this)">Read More</button><button class="btn rounded d-inline-block mx-auto readMore bg-dark text-white" onclick="readless(this)">Read Less</button></div>`
  }
  btnremover()
}
btnremover = () => {
  if (response2.length < 5) {
    container.innerHTML = `<button  class="btn btn-primary d-block mx-auto" id="btn" onclick="getfunc(this)">Get Request</button>`
  }
}