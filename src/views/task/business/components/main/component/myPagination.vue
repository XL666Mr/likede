<template>
  <div>
    <div class="footer">
      <div>共963条记录 第 4/97 页</div>
      <div>
        <el-button style="background: #d5ddf8 !important; color: #655b56"
          >上一页</el-button
        >
        <el-button style="background: #d5ddf8 !important; color: #655b56"
          >下一页</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  created() {},

  methods: {},

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
