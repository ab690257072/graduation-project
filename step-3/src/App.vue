<template>
  <div id="app">
    <div class="newTask">
      <input type="text" placeholder="输入待办事项" v-model="newTodo" @keypress.enter="addTodo">
    </div>
    <ol class="todos">
      <li v-for="(todo, index) in todoList">
        <el-checkbox v-model="todo.done" checked></el-checkbox>
        <span>{{todo.title}}</span>
        <el-button type="danger" @click="removeTodo(index)" size="mini">&times;</el-button>
        <el-tag type="success" v-if="todo.done">已完成</el-tag>
        <el-tag type="danger" v-else>未完成</el-tag>
      </li>
    </ol>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        newTodo: '',
        todoList: []
      }
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
        this.todoList.splice(index, 1);
      }
    },
    created() {
      window.onbeforeunload = () => {
        let dataString = JSON.stringify(this.todoList);
        window.localStorage.setItem('myTodos', dataString);
      }
      let oldDataString = window.localStorage.getItem('myTodos');
      let oldData = JSON.parse(oldDataString);
      this.todoList = oldData || [];
    }
  }
</script>
<style scoped>
  li {
    width: 200px;
  }
  
  li:after {
    content: '';
    display: block;
    clear: both;
  }
  
  .el-button--mini,
  .el-tag--success,
  .el-tag--danger {
    float: right;
  }
</style>