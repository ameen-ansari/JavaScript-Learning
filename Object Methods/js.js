// --> THREE METHODS TO CREATE OBJECTS
// (1)-->var obj1 = {
//     name : 'ameen ansari',
//     fname: 'akbar ansari'
// }
// obj1.hallo = 'bajwa'
// console.log(obj1);

// (2)-->var obj2 = Object.create(obj1)
// obj2.hallo = 'bajwa'
// console.log(obj2);

// (3)-->var obj3 = {}
// console.log(obj3);

// var dataobj = {}
var savebtn = document.getElementById('save')
var nameInput = document.getElementById('finput')
var fnameInput = document.getElementById('sinput')
var para1 = document.getElementById('para1')
var para2 = document.getElementById('para2')
// console.log(nameInput,fnameInput,savebtn);
makeobj = function (x, y) {
  this.Name = x
  this.Fname = y
}
var u = 1
save = () => {
  if (nameInput.value.length > 0 && fnameInput.value.length > 0) {
    var x = nameInput.value
    var y = fnameInput.value
    var obj = new makeobj(x, y)
    console.log(obj)
    para1.innerHTML += `${u++}:- UserName is <span><u>${obj.Name}</u></span></br>----UserF/Name is <span><u>${obj.Fname}</u></span></br></br>`
    nameInput.value = ''
    fnameInput.value = ''
  } else {
    para1.innerHTML += `Please Insert theName & Fname </br>`
  }
}
