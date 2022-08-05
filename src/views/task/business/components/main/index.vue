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
        <el-table-column label="序号" type="index" fixed="left">
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
      <myPagination></myPagination>
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
    }
  },

  created() {},

  methods: {},

  computed: {},

  components: {
    headerButton,
    myPagination
  }
}
</script>

<style scoped></style>
