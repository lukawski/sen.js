class Sen {
  constructor (app, data) {
    this.app = app
    this.doc = document
    this.data = data
    this.createElement()
  }

  getApp () {
    return this.doc.getElementById(this.app)
  }

  processTemplate () {
    var r = /{(.*?)}/g
    var arr
    var t = ''
    while (arr = r.exec(this.data.template)) {
      let s
      s = (t.length > 0) ? t.replace(arr[0], this.data.data[arr[0].substr(1, arr[0].length - 2)], arr[0]) : this.data.template.replace(arr[0], this.data.data[arr[0].substr(1, arr[0].length - 2)], arr[0])
      t = s
    }
    return t
  }

  createElement () {
    var selector = this.data.selector
    var app = this.getApp()
    var h = this.processTemplate()
    var s = app.innerHTML.replace(selector, h)
    app.innerHTML = s
  }
}

