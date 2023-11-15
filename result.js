const urlParams = new URLSearchParams(window.location.search)

const resultText=urlParams.get('resultText')
const bmi=Number(urlParams.get('bmi'))
const intText=urlParams.get('intText')

document.getElementById('resultText').innerHTML=resultText;
document.getElementById('bmi').textContent=bmi.toFixed(1);
document.getElementById('interpText').textContent=intText;