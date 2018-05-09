function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  const grandNode = document.querySelector('#grand-node');
  const children = grandNode.querySelectorAll('div');
  return children[children.length-1];
}

function increaseRankBy(n) {
  let increase = parseInt(n);
  const list = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = increase + parseInt(list[i].innerHTML);
  }
}
