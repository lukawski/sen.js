'use strict';

var app = new Sen('app', {
  selector: '<app>',
  template: '<div><p>{lastname}</p><h2>{name}</h2><app2></app2></div>',
  data: {
    name: 'lol',
    lastname: 'lol2'
  }
})

var comp = new Sen('app', {
  selector: '<app2>',
  template: '<h4>{beqa}</h4>',
  data: {
    beqa: 'beka'
  }
})
