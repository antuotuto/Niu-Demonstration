<template>
<!-- 按钮功能表格  -->
<div class="excl">
  <el-table :data="tableData" stripe tooltip-effect="dark" style="width: 100%" @selection-change="">
    <el-table-column type="selection" width="55">
    </el-table-column>
    <el-table-column width="" label="项目编码" align="center" @click.native="test(row)">
      <template scope="scope">
        {{ scope.row.resume_new }}
            </template>
    </el-table-column>
    <el-table-column width="" prop="" label="数据项" align="center">
      <template scope="scope">
        {{ scope.row.city }}
            </template>
    </el-table-column>
    <el-table-column width="" prop="" label="对应数据栏位" align="center">
      <template scope="scope">
        {{ scope.row.admin }}
            </template>
    </el-table-column>

    <el-table-column label="操作" width="140" align="center">
      <template scope="scope">
     <el-button
       size="small"
       @click="handleEdit(scope.$index, scope.row)">查看</el-button>
       <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="danger"
          size="small">
          移除
        </el-button>
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
