function getFirstSelector(selector){
  var element = document.querySelector(selector)
  return element
}

function nestedTarget(){
  var element = document.querySelector(`#nested .target`)
  return element
}

function increaseRankBy(n){
  var list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for(let i = 0; i < list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
  return list
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
