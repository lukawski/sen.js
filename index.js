var doc = document
var app = doc.getElementById('app')
var r = /{(.*?)}/g
var lol = {
  elo: 'chuj',
  name: 'hehe'
}
var arr
console.log(arr)

while (arr = r.exec(app.innerHTML)) {
  var s = app.innerHTML.replace(arr[0], lol[arr[0].substr(1,arr[0].length - 2)], arr[0])
  app.innerHTML = s
  console.log(arr[0])
}