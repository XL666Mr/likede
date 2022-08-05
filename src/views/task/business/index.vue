<template>
  <div>
    <!-- 头部 -->
    <codeheader :options="options"></codeheader>
    <!-- 主体 -->
    <codemain :tableData="tableData"></codemain>
  </div>
</template>

<script>
import { taskSearch, allTaskStatus } from '@/api/task'
import Codeheader from './components/header/index.vue'
import Codemain from './components/main/index.vue'

export default {
  data() {
    return {
      options: [],
      tableData: []
    }
  },

  created() {
    this.taskSearch()
  },

  methods: {
    async taskSearch() {
      const status = await allTaskStatus()
      const res = await taskSearch()
      this.tableData = res.data.currentPageRecords
      this.tableData.forEach((ele) => {
        if (ele.createType === 1) {
          ele.createType = '手动'
        } else {
          ele.createType = '自动'
        }
        console.log()
        ele.createTime = ele.createTime.replace(/-/g, '.')
        ele.createTime = ele.createTime.replace(/T/g, ' ')
      })
      this.options = status.data
    }
  },

  computed: {},

  components: {
    Codeheader,
    Codemain
  }
}
</script>

<style scoped lang="scss"></style>
