<template>
  <div id="app">
    <!--Render the todo component-->
    <!--The tag name is the file name with a hyphen and all lowercase.
    Must be handled by the code somewhere in the backend and translated-->
  <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
    // After importing we can use the component in the main app window
    TodoList
  }
}
</script>

<style>
</style>
