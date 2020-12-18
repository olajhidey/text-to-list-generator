var app = new Vue({
  el: '#app',
  data: {
    result: '',
    lists: [],
  },
  methods: {
    generateList: function(){
      // this.result = "You have been clicked!"
      this.lists = this.result.split(".")
      this.result = ""
    }
  }
})
