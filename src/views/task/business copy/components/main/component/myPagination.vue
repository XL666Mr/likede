<template>
  <div>
    <div class="footer">
      <div>
        共{{ currentObjs.totalCount }}条记录 第
        {{ $store.state.task.pageIndex }}/{{ currentObjs.totalPage }} 页
      </div>
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      add: "this.$store.commit('task/addPageIndex')"
    }
  },
  props: {
    currentObjs: {
      type: Object,
      required: true
    }
  },

  created() {},

  methods: {
    addFn() {
      this.add
    }
  },

  computed: {}
}
</script>

<style scoped>
.footer {
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
</style>
