<template>
    <div>
        <div class="container ">
            <div class="row">
                <div class="col-sm-10">
                <h1> Tasks </h1>
                <hr> <br> <br>
                <button type="button" class="btn btn-success btn-sm"> Add Task</button>
                <br> <br>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col"> ID </th>
                            <th scope="col"> Task </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="task in tasks" :key="task.id">
                            <td> {{ task.id }} </td>
                            <td> {{ task.task }} </td>
                            <td>
                                <button type="button" class="btn btn-danger btn-sm" @click="onDeleteTask(task)"> Delete </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- The class portion handles data and events -->
<script type = "text/<script>">
import axios from 'axios'

export default {
  data () {
    return {
      tasks: []
    }
  },
  methods: {
    getTasks: function () {
      axios.get('http://127.0.0.1:5000/api/task').then((res) => {
        console.log(res.data)
        this.tasks = res.data
      })
    },
    deleteTask (taskId) {
      axios.delete('http://127.0.0.1:5000/api/task/' + taskId).then(() => {
        this.getTasks()
      })
    },
    onDeleteTask (task) {
      console.log(task.id)
      this.deleteTask(task.id)
    }
  },
  created () {
    this.getTasks()
  }
}
</script>
