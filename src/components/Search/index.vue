<template>
  <div>
    <el-card class="box-card" style="margin: 20px">
      <el-form ref="form" label-width="80px" style="height: 36px">
        <slot></slot>
        <el-col :span="1">
          <el-form-item>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </el-form-item>
        </el-col>
      </el-form>
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
