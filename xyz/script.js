//-->1 Methods to Make Objects
// var obj = new Object()
// console.log(obj);

//-->(a) Prototypes In Functions
// function mkobj(name) {
//     this.name = name
// }
// var a = new mkobj('ameen')
// console.log(a);
// mkobj.prototype.age = 18
// console.log(a);

//-->(b) Prototypes In Class
// class a {
//   constructor(a, b) {
//     this.a = a
//     this.b = b
//     console.log(a)
//     console.log(a)
//   }
//   ans = function (){ ------>This Is Wrong
//       console.log('xyz');
//   }
//   ans = () => { ------>This Is Wrong
//       console.log('xyz');
//   }
//   ans () { ------>This Is Right
//     return console.log(`${this.a}+${this.b}`)
//   }
// }
// var x = new a(3, 3)
// console.log(x)
// console.log(x.ans())