<template>
  <div>
    <TextingBox :data-list="todoList" />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import TextingBox from "@/components/TextingBox";
export default {
  name: "Homepage",
  components: {
    TextingBox,
  },
  mounted() {
    this.list();
  },
  data() {
    return {
      todoList: [],
    };
  },
  methods: {
    list() {
      this.getTodo().then((res) => {
        this.todoList = res.data;
      });
    },
    ...mapActions({
      getTodo: "homepage/getTodo",
    }),
  },
  computed: {
    ...mapGetters({
      getTodoList: "homepage/getTodoList",
    }),
  },
};
</script>
