<template>
  <div>
    <div class="footer">
      <div>
        共{{ currentObjs.totalCount }}条记录 第 {{ currentObjs.pageIndex }}/{{
          currentObjs.totalPage
        }}
        页
      </div>
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    currentObjs: {
      type: Object,
      required: true
    }
  },
  created() {},

  methods: {
    reduce() {
      console.log('reduce')
    },
    add() {
      console.log('add')
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
