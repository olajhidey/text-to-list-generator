var app = new Vue({
  el: '#app',
  data: {
    result: '',
    lists: [],
  },
  methods: {
    generateList: function(){
      // this.result = "You have been clicked!"
      
      const list = this.result.split(".")
      if(list[list.length -1] == '') list.pop()
      this.lists = list   
      this.result = ""
    }
  }
})
