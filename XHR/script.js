var container = document.getElementsByClassName('card')[0]
var readMore = document.getElementsByClassName('readMore')
var readless = document.getElementsByClassName('readless')
var btn = document.getElementById('btn')
//Main Components
var initialresponse
var response1
var response2
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//When User Clicks On Get Request Button
getfunc = (e) => {
  e.remove()
  //A Request For Show Data On WebPage
  var url = 'https://jsonplaceholder.typicode.com/posts'
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  //When the Page On Load
  xhr.onload = function () {
    //When The Request Status = 200
    if (this.status === 200) {
      //initialresponse = A Array = Array.length Is Always Equal TO 100
      initialresponse = JSON.parse(this.responseText)
    }
    //Update Array Main
    if (num.length !== 0) {
      num.length = 10
    } else {
      num.length = 10
    }
    //Make A new Array
    response2 = initialresponse.slice(0)
    //response2 = A Array = Array.length Is Always Equal TO 100
    if (response2.length <= 100) {
      container.innerHTML = ''
      //Update response2
      response2 = initialresponse.slice(0, num.length)
      //For Every Element of Array
      response2.forEach((element) => {
        container.innerHTML += `<div class="card-body">
      <p class="card-text text-center"><b>ID : ${element.id}</b></p>
      <h4 class="card-title text-center">Title : ${element.title}</h4>
      <p class="card-text text-center"><b>body : </b>${element.body}</p>
      </div> <p class="text-center text-primary"><b>---> By Ameen Ansari <---</b></p>`
      })
      //Add Buttons
      container.innerHTML += `<div class="d-flex w-75 mx-auto justify-content-between align-item-center"><button class="btn bg-dark text-white rounded d-inline-block mx-auto readMore" onclick="readmor(this)">Read More</button><button class="btn rounded d-inline-block mx-auto readMore bg-dark text-white" onclick="readless(this)">Read Less</button></div>`
    }
    //Manage Webpage When The Array.length Eqaul t0 0 or Zero
    btnremover()
  }
  //Send The Request
  xhr.send()
}
//Manage The ReadMore Button
readmor = () => {
  if (num.length < 95) {
    //Remove The Innitial Content On Webpage
    container.innerHTML = ''
    //Update Array
    if (num.length === 0) {
      num.length = num.length + 5
    } else if (num.length < 100) {
      num.length = num.length + 5
    }
    response2 = initialresponse.slice(0, num.length)
    response2.forEach((element) => {
      container.innerHTML += `<div class="card-body">
    <p class="card-text text-center"><b>ID : ${element.id}</b></p>
    <h4 class="card-title text-center">Title : ${element.title}</h4>
    <p class="card-text text-center"><b>body : </b>${element.body}</p>
    </div> <p class="text-center text-primary"><b>---> By Ameen Ansari <---</b></p>`
  })
  container.innerHTML += `<div class="d-flex w-75 mx-auto justify-content-between align-item-center"><button class="btn bg-dark text-white rounded d-inline-block mx-auto readMore" onclick="readmor(this)">Read More</button><button class="btn rounded d-inline-block mx-auto readMore bg-dark text-white" onclick="readless(this)">Read Less</button></div>`
} 
//Hide The ReadMore Button When The Array Is Equal To 100(Means Full)
else if ((num.length = 95)) {
    //Remove The Innitial Content On Webpage
    container.innerHTML = ''
    //Update Array
    num.length = num.length + 5
    response2 = initialresponse.slice(0, num.length)
    response2.forEach((element) => {
      container.innerHTML += `<div class="card-body">
    <p class="card-text text-center"><b>ID : ${element.id}</b></p>
    <h4 class="card-title text-center">Title : ${element.title}</h4>
    <p class="card-text text-center"><b>body : </b>${element.body}</p>
    </div> <p class="text-center text-primary"><b>---> By Ameen Ansari <---</b></p>`
    })
    container.innerHTML += `<div class="d-flex w-75 mx-auto justify-content-between align-item-center"><button class="btn rounded d-inline-block mx-auto readMore bg-dark text-white" onclick="readless(this)">Read Less</button></div>`
  }
  //Manage Webpage When The Array.length Eqaul t0 0 or Zero
  btnremover()
}
readless = () => {
  if (response2.length <= 100) {
    container.innerHTML = ''
    if (num.length <= 100) {
      num.length = num.length - 5
    }
    response2 = initialresponse.slice(0, num.length)
    console.log(num.length)
    response2.forEach((element) => {
      container.innerHTML += `<div class="card-body">
    <p class="card-text text-center"><b>ID : ${element.id}</b></p>
    <h4 class="card-title text-center">Title : ${element.title}</h4>
    <p class="card-text text-center"><b>body : </b>${element.body}</p>
    </div> <p class="text-center text-primary"><b>---> By Ameen Ansari <---</b></p>`
    })
    container.innerHTML += `<div class="d-flex w-75 mx-auto justify-content-between align-item-center"><button class="btn bg-dark text-white rounded d-inline-block mx-auto readMore" onclick="readmor(this)">Read More</button><button class="btn rounded d-inline-block mx-auto readMore bg-dark text-white" onclick="readless(this)">Read Less</button></div>`
  }
  //Manage Webpage When The Array.length Eqaul t0 0 or Zero
  btnremover()
}
//Manage Webpage When The Array.length Eqaul t0 0 or Zero
btnremover = () => {
  if (response2.length < 5) {
    container.innerHTML = `<button  class="btn btn-primary d-block mx-auto" id="btn" onclick="getfunc(this)">Get Request</button>`
  }
}
