<template>
<!--  -->
<div class="selectComponents">
  <div class="content-box-title">
    门店业务量统计表
  </div>
  <div class="content-box">



    <el-row :gutter="0">
      <el-col :span="8">
        <div class="header-excl">
          POS数据应收
        </div>
        <excl0></excl0>
        <div class="black"></div>
      </el-col>
      <el-col :span="8">
        <div class="header-excl">
          三方数据实收
        </div>
        <excl1></excl1>
        <div class="black"></div>
      </el-col>
      <el-col :span="8">
        <div class="header-excl">
          稽核结果
        </div>
        <excl2></excl2>
        <div class="black"></div>
      </el-col>
    </el-row>
    <div class="btn-down" style="text-align:center;">
      <el-button type="primary">打印报表</el-button>
      <el-button>重 置</el-button>
    </div>
  </div>


</div>
<!--  -->
</template>

<script>
import excl0 from '~/components/excl0.vue'
import excl1 from '~/components/excl1.vue'
import excl2 from '~/components/excl2.vue'
import paging from '~/components/paging.vue'

export default {
  components: {
    paging,
    excl0,
    excl1,
    excl2
  },
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      options: [{
        value: '选项1',
        label: 'pos应收明细'
      }, {
        value: '选项2',
        label: '支付宝'
      }, {
        value: '选项3',
        label: '微信'
      }, {
        value: '选项4',
        label: '银行到账'
      }, {
        value: '选项5',
        label: '养老卡'
      }],
      value: '选项2'
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  padding-top: 100px;
  font-weight: bold;
  font-size: 30px;
  letter-spacing: 1px;
}

.btn-down {
  margin: 15px 0 30px 0;
}

.content-box-title {
  background: #20A0FF;
  color: #fff;
  padding: 15px;
  border-radius: 3px 3px 0 0;
}

.header-excl{
  background: #1D8CE0;
  padding: 15px;
  text-align: center;
  color:#fff;
  letter-spacing: 1px;
}

.black{
  height:30px;
}

.content-box {
  background: #fff;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 0 0 3px 3px;
}
</style>
