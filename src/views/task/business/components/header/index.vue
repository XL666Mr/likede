<template>
  <div>
    <el-card class="box-card" style="margin: 20px">
      工单编号：
      <el-input
        placeholder="请输入内容"
        style="width: 206px; height: 36px"
      ></el-input>
      工单状态：
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
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  props: {
    options: {
      type: Array,
      required: true
    }
  },

  created() {},

  methods: {},

  computed: {}
}
</script>

<style scoped></style>
