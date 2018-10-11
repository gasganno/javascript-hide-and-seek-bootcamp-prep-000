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
  var current = document.getElementById("grand-node").querySelectorAll('div');
  var deepest = [];
  for (let n = 0; n < current.length; n++) {
        deepest.push(current[n])
      } return deepest[deepest.length - 1]
  }

OFFICIAL SOLUTION
/*function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}*/
//————————————————

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
