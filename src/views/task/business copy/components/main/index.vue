<template>
  <div>
    <el-card class="box-card" style="margin: 0 20px 20px">
      <!-- 头部按钮 -->
      <headerButton> </headerButton>
      <!-- 表格 -->
      <el-table
        :data="tableData"
        style="width: 100%"
        :cell-style="row"
        :header-cell-style="headRow"
      >
        <el-table-column
          label="序号"
          type="index"
          fixed="left"
          :index="indexMethod"
        >
        </el-table-column>
        <div v-for="(item, index) in taskListName" :key="index">
          <el-table-column
            :label="key"
            :prop="val"
            width="210"
            v-for="(val, key) in item"
            :key="key"
          >
          </el-table-column>
        </div>
        <el-table-column fixed="right" label="操作">
          <template>
            <el-button type="text" size="small"> 查看详情 </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <myPagination :currentObjs="currentObj">
        <div slot="button">
          <el-button
            style="background: #d5ddf8 !important; color: #655b56"
            @click.native="$store.commit('task/addPageIndex')"
            >上一页</el-button
          >
          <el-button
            style="background: #d5ddf8 !important; color: #655b56"
            @click.native="$store.commit('task/reducePageIndex')"
            >下一页</el-button
          >
        </div>
      </myPagination>
    </el-card>
  </div>
</template>

<script>
import headerButton from './component/button.vue'
import myPagination from './component/myPagination.vue'
export default {
  data() {
    return {
      row: { border: '0px' },
      headRow: { backgroundColor: '#EBEEF5' },
      taskListName: [
        { 工单编号: 'taskCode' },
        { 设备编号: 'innerCode' },
        { 工单类型: 'taskType.typeName' },
        { 工单方式: 'createType' },
        { 工单状态: 'taskStatusTypeEntity.statusName' },
        { 运营人员: 'userName' },
        { 创建日期: 'createTime' }
      ]
    }
  },
  props: {
    tableData: {
      type: Array,
      required: true
    },
    currentObj: {
      type: Object,
      required: true
    }
  },

  created() {},

  methods: {
    indexMethod(index) {
      console.log(index)
      return index + 1 + 10 * this.$store.state.task.pageIndex
    }
  },

  computed: {},

  components: {
    headerButton,
    myPagination
  }
}
</script>

<style scoped></style>
