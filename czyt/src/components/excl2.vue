<template>
<!-- 按钮功能表格  -->
<div class="excl2">
  <el-table :data="tableData" stripe tooltip-effect="dark" style="width: 100%" @selection-change="">
    <el-table-column width="" prop="" label="差异" align="center">
      <template scope="scope">
        {{ scope.row.city }}
            </template>
    </el-table-column>
    <el-table-column width="" prop="" label="稽核状态" align="center">
      <template scope="scope">
        待确认
            </template>
    </el-table-column>
    <el-table-column label="操作" width="140" align="center">
      <template scope="scope">
     <el-button
       size="small"
       @click="handleEdit(scope.$index, scope.row)">查看</el-button>
   </template>
    </el-table-column>
  </el-table>
</div>
<!--  -->
</template>

<script>
import {
  table
} from '~/data';

export default {
  components: {},
  data() {
    return {
      tableData: table,
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
