const resultArea = document.getElementById('result');
function getEl(e) {
  const b = e.target.parentNode.parentNode.children[2].children[0].value;
  const h = e.target.parentNode.parentNode.children[2].children[2].value;
  let el = [b,h]
  return el
};
document.getElementById('tri-calc').addEventListener('click', function(e){
  let el = getEl(e);
  let result = 0.5 * el[0] * el[1];
  resultArea.innerText = `
  Triangle
Area (A) = 0.5 x b x h 
0.5 x ${el[0]} cm x ${el[1]} cm = ${result} cm
`

});
document.getElementById('rect-calc').addEventListener('click', function(e){
  let el = getEl(e);
  let result = el[0] * el[1];
  resultArea.innerText = `
  Rectangle
Area (A) = w x i
 ${el[0]} cm x ${el[1]} cm = ${result} cm`
})

document.getElementById('para-calc').addEventListener('click', function(e){
  let el = getEl(e);
  let result = el[0] * el[1];
  resultArea.innerText = `
  Rectangle
Area (A) = b x h
 ${el[0]} x ${el[1]} = ${result}`
})
document.getElementById('rhom-calc').addEventListener('click', function(e){
  let el = getEl(e);
  let result = .5 * el[0] * el[1];
  resultArea.innerText = `
  Rectangle
Area (A) = .5 x d1 x d2
 ${el[0]} cm x ${el[1]} cm = ${result} cm`
})

document.getElementById('penta-calc').addEventListener('click', function(e){
  let el = getEl(e);
  let result = .5 * el[0] * el[1];
  resultArea.innerText = `
  Rectangle
Area (A) = .5 x p x b
 ${el[0]} cm x ${el[1]} cm = ${result} cm`
})
document.getElementById('eli-calc').addEventListener('click', function(e){
  let el = getEl(e);
  let result = Math.PI * el[0] * el[1];
  resultArea.innerText = `
  Rectangle
Area (A) =  π ab
π x ${el[0]} cm x ${el[1]} cm = ${result} cm`
})