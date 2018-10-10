function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
 return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');
    for (let i = 0; i < lis.length; i++) {
      lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
    }
}

function deepestChild() {
  var current = document.querySelectorAll("#grand-node");
  var deepest = [];
  while (current) {
    if (n => n > current.length) {
      return current.innerHTML
    }
     if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        deepest.push(current[i])
      }
    }
    current = deepest.shift()
  }
   return null
}





















/*
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var target = document.querySelector('#nested .target');
  return target
}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll('ul.ranked-list')
  for (let i = 0; i < rankedList.length; i++)
  rankedList[i].innerHTML = (i + 1).toString()
}

function deepestChild() {
  var nodes = document.getElementById('grand-node').querySelectorAll('div');
  var deepest = ["#grand-node"]
  for (let i = 0; i < nodes.length; i++) {
    deepest = [...deepest, nodes[i]];
  }
  return deepest[deepest.length - 1]
}
*/
