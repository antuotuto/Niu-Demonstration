<template>
<!--  -->
<div class="selectComponents" v-loading.body="loading">
  <div class="content-box-title">
    数据源新增
  </div>
  <div class="content-box">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
          <el-form-item label="数据源编码">
            <el-input v-model="formLabelAlign.name" placeholder="SRC001"></el-input>
          </el-form-item>
          <el-form-item label="数据源名称">
            <el-input v-model="formLabelAlign.type" placeholder="银行到账通知"></el-input>
          </el-form-item>
          <el-form-item label="数据源类型">
            <el-input v-model="formLabelAlign.type" placeholder="CSH_BANKDEPOSIT"></el-input>
          </el-form-item>
          <el-form-item label="数据源表">
            <el-input v-model="formLabelAlign.type" placeholder="001"></el-input>
          </el-form-item>
          <el-form-item label="数据项">
            <el-input v-model="formLabelAlign.type" placeholder="200"></el-input>
          </el-form-item>
          <el-form-item label="对应数据栏位">
            <el-select v-model="value" placeholder="">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">

      </el-col>
    </el-row>
    <div class="btn-down">
      <el-button type="primary" @click="openFullScreen">添 加</el-button>
      <el-button @click="openFullScreen">重 置</el-button>
    </div>
    <excl></excl>
    <paging></paging>

  </div>


</div>
<!--  -->
</template>

<script>
import excl from '~/components/excl.vue'
import paging from '~/components/paging.vue'

export default {
  components: {
    paging,
    excl
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
      value: '选项2',
      loading: false
    }
  },
  methods: {
    openFullScreen() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1500);
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
  background: #13CE66;
  color: #fff;
  padding: 15px;
  border-radius: 3px 3px 0 0;
}

.content-box {
  background: #fff;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 0 0 3px 3px;
}
</style>
