import Vue from 'vue';

var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todoList: []
  },
  methods: {
    addTodo() {
      this.todoList.push({
        title: this.newTodo,
        createdAt: new Date(),
        done: false
      });
      this.newTodo = '';
    },
    removeTodo(index) {
      this.todoList.splice(index,1);
    }
  },
  created() {
  window.onbeforeunload = ()=>{
    let dataString = JSON.stringify(this.todoList);
    window.localStorage.setItem('myTodos', dataString);
  }
  let oldDataString = window.localStorage.getItem('myTodos');
  let oldData = JSON.parse(oldDataString);
  this.todoList = oldData || [];
  }
});