<template>
  <div>
    <searchTask :options="$store.state.task.TaskStatus">
      <el-col :span="4" style="margin-right: 15px">
        <el-form-item label="工单编号">
          <el-input
            placeholder="请输入内容"
            style="width: 206px; height: 36px"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="4" style="margin-right: 25px">
        <el-form-item label="工单状态" style="height: 36px">
          <el-select
            v-model="value"
            placeholder="请选择"
            style="width: 206px; height: 36px"
          >
            <el-option
              v-for="item in options"
              :key="item.statusId"
              :value="item.statusName"
            >
              <span style="float: left; color: #8492a6; font-size: 13px">{{
                item.statusName
              }}</span>
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </searchTask>
    <mainTask
      :tableData="tableData"
      :taskListName="taskListName"
      tdWith="210"
      :index="index"
    >
      <!-- 操作列 -->
      <el-table-column fixed="right" label="操作" slot="column">
        <template>
          <el-button type="text" size="small"> 查看详情 </el-button>
        </template>
      </el-table-column>
      <!-- 底部 -->
      <tablePagination slot="Pagination" :currentObjs="currentObjs" :pageIndex='pageIndexs'>
        <div slot="button">
          <el-button
            style="background: #d5ddf8 !important; color: #655b56"
            @click="reduce"
            :disabled="index === 0 ? true : false"
            >上一页</el-button
          >
          <el-button
            style="background: #d5ddf8 !important; color: #655b56"
            @click="add"
            >下一页</el-button
          >
        </div>
      </tablePagination>
    </mainTask>
  </div>
</template>

<script>
import searchTask from '@/components/Search'
import mainTask from '@/components/Table'
import tablePagination from '@/components/Pagination'

export default {
  data() {
    return {
      value: '',
      // 序号
      index: 10 * (this.$store.state.task.pageIndex - 1),
      // 工单状态
      options: this.$store.state.task.TaskStatus,
      //分页数据
      currentObjs: this.$store.state.task.TableList,
      //列表数据
      tableData: this.$store.state.task.TableList.currentPageRecords,
      // 自定义列表
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

  created() {
    // 获取表格数据
    this.$store.dispatch('task/getTableObjs')
    // 工单状态
    this.$store.dispatch('task/getallTaskStatus')
  },

  methods: {
    reduce() {
      this.$store.commit('task/reducePageIndex')
    },
    add() {
      this.$store.commit('task/addPageIndex')
    }
  },

  computed: {
    pageIndexs() {
      return this.$store.state.task.pageIndex
    }
  },
  watch: {
    pageIndexs: {
      handler() {
        // console.log(this.$store.getters.task.pageIndexs);
        this.$store.dispatch('task/getTableObjs')
        this.tableData = this.$store.state.task.TableList.currentPageRecords
        this.index = 10 * (this.$store.state.task.pageIndex - 1)
      }
    }
  },

  components: {
    mainTask,
    searchTask,
    tablePagination
  }
}
</script>

<style scoped></style>
