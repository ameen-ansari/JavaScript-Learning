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

var dataobj = {}
// var reobj = Object.create(dataobj)
console.log(dataobj);
// console.log(reobj);
var save = document.getElementById('save')
var fInput = document.getElementById('finput')
var sInput = document.getElementById('sinput')
// console.log(save,input);
save = (x,y)=> {
    this.x = x
    this.y = y
    let a =  sInput.value
    let b =  fInput.value
    var nn = new Object(a,b)
    // var nq = new Object(y)
    console.log(nn);
    // console.log(typeof nn);
    
    // console.log(nq);
    // console.log(typeof nq);
}
var obj1 = {
        name : 'ameen ansari',
        fname: 'akbar ansari'
    } 
