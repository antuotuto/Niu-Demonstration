<template>
<!-- 按钮功能表格  -->
<div class="excl1">
  <el-table :data="tableData" stripe tooltip-effect="dark" style="width: 100%" @selection-change="">
    <el-table-column width="" prop="" label="渠道" align="center">
      <template scope="scope">
        {{ scope.row.city }}
            </template>
    </el-table-column>
    <el-table-column width="" prop="" label="门店号码" align="center">
      <template scope="scope">
        待确认
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
  table4
} from '~/data';

export default {
  components: {},
  data() {
    return {
      tableData: table4,
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
