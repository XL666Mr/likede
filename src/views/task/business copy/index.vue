<template>
  <div>
    <!-- 头部 -->
    <searchTask :options="$store.state.task.TaskStatus"></searchTask>
    <!-- 主体 -->
    <codemain :tableData="tableData" :currentObj="currentObj"></codemain>
  </div>
</template>

<script>
import { taskSearch, allTaskStatus } from '@/api/task'
import Codemain from './components/main/index.vue'
import searchTask from '@/components/Search'

export default {
  data() {
    return {
      options: [],
      tableData: [],
      currentObj: {}
    }
  },

  created() {
    this.taskSearch()
    this.$store.dispatch('task/getallTaskStatus')
  },

  methods: {
    async taskSearch() {
      const status = await allTaskStatus()
      const res = await taskSearch(this.pageIndex)
      this.currentObj = res.data
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

  computed: {
    pageIndex() {
      return this.$store.state.task.pageIndex
    }
  },
  components: {
    Codemain,
    searchTask
  },
  watch: {
    pageIndex: {
      handler() {
        this.taskSearch()
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
