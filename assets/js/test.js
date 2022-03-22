document.getElementById("test").addEventListener("click", clickHandler);


var probability = function(n) {
  return !!n && Math.random() <= n;
};



function a () { return 0; }
function b () { return 1; }
function c () { return 2; }

var probas = [ 20, 70, 10 ]; // 20%, 70% and 10%
var funcs = [ a, b, c ]; // the functions array

function randexec()
{
  var ar = [];
  var i,sum = 0;


  // that following initialization loop could be done only once above that
  // randexec() function, we let it here for clarity

  for (i=0 ; i<probas.length-1 ; i++) // notice the '-1'
  {
    sum += (probas[i] / 100.0);
    ar[i] = sum;
  }


  // Then we get a random number and finds where it sits inside the probabilities 
  // defined earlier

  var r = Math.random(); // returns [0,1]

  for (i=0 ; i<ar.length && r>=ar[i] ; i++) ;

  // Finally execute the function and return its result

  return (funcs[i])();
}

var count = [ 0, 0, 0 ];

for (var i=0 ; i<100000 ; i++)
{
  count[randexec()]++;
}

var s = '';
var f = [ "a", "b", "c" ];

for (var i=0 ; i<3 ; i++)
  s += (s ? ', ':'') + f[i] + ' = ' + count[i];

alert(s);