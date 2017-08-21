<template>
<!-- 按钮功能表格  -->
<div class="excl0">
  <el-table :data="tableData" stripe tooltip-effect="dark" style="width: 100%" @selection-change="">
    <el-table-column width="100" label="项目编码" align="center" @click.native="test(row)">
      <template scope="scope">
        {{ scope.row.resume_new }}
            </template>
    </el-table-column>
    <el-table-column width="" prop="" label="支付方式" align="center">
      <template scope="scope">
        {{ scope.row.city }}
            </template>
    </el-table-column>
    <el-table-column width="" prop="" label="汇总金额" align="center">
      <template scope="scope">
        待确认
            </template>
    </el-table-column>
  </el-table>
</div>
<!--  -->
</template>

<script>
import {
  table0
} from '~/data';

export default {
  components: {},
  data() {
    return {
      tableData: table0,
    }
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style scoped>


</style>
