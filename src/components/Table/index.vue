<template>
  <div>
    <el-card class="box-card" style="margin: 0 20px 20px">
      <tableHeader></tableHeader>
      <tableMain
        :tableData="tableData"
        :taskListName="taskListName"
        :tdWith="tdWith"
        :index="index"
      >
        <slot name="column"></slot>
      </tableMain>
      <slot name="Pagination"></slot>
    </el-card>
  </div>
</template>

<script>
import tableHeader from './component/tableHeader.vue'
import tableMain from './component/tableMain.vue'
export default {
  data() {
    return {}
  },
  props: {
    // 请求获取的数据
    tableData: {
      type: Array,
      required: true
    },
    // 自定义列表
    taskListName: {
      type: Array,
      required: true
    },
    // 单元格宽度
    tdWith: {
      type: String,
      defined: '210'
    },
    index: {
      type: Number,
      default: 0
    }
  },
  created() {},

  methods: {},

  computed: {},

  components: {
    tableHeader,
    tableMain
  }
}
</script>

<style scoped></style>
