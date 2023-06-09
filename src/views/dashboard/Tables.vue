<template>
  <div class="py-4 container-fluid">
    <div class=" row">
     <form  @submit.prevent="($event) => addForm($event)"
        method="post">
      <argon-input name="title" size="lg" v-model="input.title"/>
       <argon-input name="description" size="lg" v-model="input.description"/>
       <argon-input name="category" size="lg" v-model="input.category"/>
        <input v-model="input.completed" type="checkbox" /> Completed
        <br />

        <button type="submit">add</button>
     </form>

    </div>
    <div class=" row">
      <div class="col-12">
        <table-components :fields="fields" :datalist="g$list" />
      </div>
    </div>
    <!-- <div class="mt-4 row">
      <div class="col-12">
        <projects-table />
      </div>
    </div> -->
  </div>
</template>

<script>
// import AuthorsTable from "@/components/example/AuthorsTable.vue";
// import ProjectsTable from "@/components/example/ProjectsTable.vue";
import TableComponents from "@/components/Table.vue";
import d$todo from "@/stores/todo";
import { mapActions, mapState } from 'pinia';
import ArgonInput from "@/components/ArgonInput.vue";

const initialInput = {
  title: '',
  description: '',
  category: '',
  completed: false
}
export default {
  async created() {
    await this.a$list()
  },
  components: {
    ArgonInput,
  },
  methods: {
    ...mapActions(d$todo, ["a$list", "a$add"]),
        // reset form
    resetForm() {
      // Reset Input with initial value
      Object.assign(this.input, initialInput)

      // reset editing state
      this.editing = false
    },
    // submit form
    addForm(event) {
      console.log(event)

      // pass input to action
      // determine
      if (this.editing === false) {
        this.a$add({ ...this.input })
      } else {
        this.editIndex(this.editing, { ...this.input })
      }

      // call reset form
      this.resetForm()
    },
  },
  computed: {
    ...mapState(d$todo, ["g$list"])
  },
  name: "tables",
  components: {
    TableComponents
    // AuthorsTable,
    // ProjectsTable
  },
  data() {
    return {
      input: {...initialInput},
      fields : [
        'id', 'title', 'createdAt', 'completed', 'description'
  
      ]
    }
  },
};
</script>
