<template>
  <div class="todo-group">
    <div
      class="todo-group__todo"
      v-for="(text, index) in dataList"
      :key="index"
    >
      <span
        :class="{
          'todo-group__completed-item': text.completed,
          'todo-group__no-completed-item': !text.completed,
        }"
        class="todo-group__title"
        >{{ text.title }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "TextingBox",
  props: {
    text: String,
    dataList: [Object, Array],
  },
};
</script>
<style lang="scss" scoped>
@import "./index.module.scss";
</style>
