const resultArea = document.getElementById('result');
let count = 0;
function getEl(e) {
  const b = e.target.parentNode.parentNode.children[2].children[0].value;
  const h = e.target.parentNode.parentNode.children[2].children[2].value;
  let el = [b,h]
  return el
};

function saveResult (el, resultText){
  let div = document.createElement('div');
div.innerHTML = `
  <p> ${count}. ${el.target.parentNode.parentNode.children[0].innerText}</p>
  <p> ${resultText}</p>
  <button class="btn" onclick="resultArea.removeChild(this.parentNode)"> clear </button>
`;
div.children[0].style.fontWeight = 'bold';
resultArea.appendChild(div);
}

document.getElementById('tri-calc').addEventListener('click', function(e){
  count++;
  let el = getEl(e);
  let result = 0.5 * el[0] * el[1];
let resultText = ` 0.5 x ${el[0]} cm x ${el[1]} cm = ${result} cm²`
e.target.parentNode.parentNode.children[3].innerText = resultText;

saveResult(e, resultText);



});
document.getElementById('rect-calc').addEventListener('click', function(e){
  count++;
  let el = getEl(e);
  let result = el[0] * el[1];
  let resultText = `
  ${el[0]} cm x ${el[1]} cm = ${result} cm²`
  e.target.parentNode.parentNode.children[3].innerText = resultText;
  saveResult(e, resultText);
})

document.getElementById('para-calc').addEventListener('click', function(e){
  count++;
  let el = getEl(e);
  let result = el[0] * el[1];
  let resultText = `
  ${el[0]} cm x ${el[1]} cm = ${result} cm²`
  e.target.parentNode.parentNode.children[3].innerText = resultText;
  saveResult(e, resultText);
})
document.getElementById('rhom-calc').addEventListener('click', function(e){
  count++;
  let el = getEl(e);
  let result = .5 * el[0] * el[1];
  let resultText = `
  ${el[0]} cm x ${el[1]} cm = ${result} cm²`;
  e.target.parentNode.parentNode.children[3].innerText = resultText;
  saveResult(e, resultText);
})

document.getElementById('penta-calc').addEventListener('click', function(e){
  count++;
  let el = getEl(e);
  let result = .5 * el[0] * el[1];
  let resultText = `${el[0]} cm x ${el[1]} cm = ${result} cm²`
  e.target.parentNode.parentNode.children[3].innerText = resultText;
  saveResult(e, resultText);
})
document.getElementById('eli-calc').addEventListener('click', function(e){
  count++;
  let el = getEl(e);
  let result = Math.PI * el[0] * el[1];
  let resultText = `π x ${el[0]} cm x ${el[1]} cm = ${result} cm²`;
  e.target.parentNode.parentNode.children[3].innerText = resultText;
  saveResult(e, resultText);
})