'use strict';

var app = new Sen('app', {
  selector: '<app>',
  template: '<p><h1>{name}</h1>{lastname}</p>',
  data: {
    name: 'lol',
    lastname: 'lol2'
  }
})
