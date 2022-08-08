<template>
  <div>
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
          :width="tdWith"
          v-for="(val, key) in item"
          :key="key"
        >
        </el-table-column>
      </div>
      <slot></slot>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      row: { border: '0px' },
      headRow: { backgroundColor: '#EBEEF5' }
    }
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

  methods: {
    indexMethod(index) {
      return index + this.index +1
    }
  },

  computed: {}
}
</script>

<style scoped></style>
