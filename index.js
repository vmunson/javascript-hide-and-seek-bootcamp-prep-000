function getFirstSelector(selector){
  var element = document.querySelector(selector)
  return element
}

function nestedTarget(){
  var element = document.querySelector(`#nested .target`)
  return element
}

function increaseRankBy(n){
  var list = document.querySelectorAll(`.ranked-list`)
  for(let i = 0; i < list.length; i++){
    var element = list[i].innerHTML + n
  }
  return element
}
