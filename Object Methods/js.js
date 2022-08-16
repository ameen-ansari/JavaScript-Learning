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
var data = [];
save = () => {
  console.log('add eventlistener');
  var obj = {
    name:nameInput.value,
    fname:fnameInput.value
  }
console.log(obj);
data.push(obj)
console.log(data);
localStorage.setItem('datalist',JSON.stringify(data))
nameInput.value = ''
fnameInput.value = ''
// use getitem meth0d solve later 
}