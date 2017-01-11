function corn() {
  console.log(im bored);
  var changeDiv = document.getElementById('divElement');
  changeDiv.inner.HTML = "hi";
  console.log(changeDiv);
}

function fortune generator() {
  var fortuneList = ['good stuff coming', 'you will be able to breathe tomorrow', 'you will become invisible', 'someone will tell you to shut up', 'you wiil see']

  var random = fortunesList[Math.floor(Math.random() * fortunesList.length)];
  document.getElementById('text').textContent = random;

  console.log('User ' + random)

  var list = document.getElementById('someting');
  var node = document.createElement("div");
  node.innerHTML = random
  list.appendChild(node);
}