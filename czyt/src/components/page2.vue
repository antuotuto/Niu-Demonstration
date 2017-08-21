<template>
<!--  -->
<div class="selectComponents" v-loading.body="loading">

  <div class="content-box-title">
    门店信息新增
  </div>
  <div class="content-box">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
          <el-form-item label="门店编码">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="门店名称">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="门店地址">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
          <el-form-item label="联系人">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
          <el-form-item label="上级单位">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <el-transfer v-model="value1" :data="data"></el-transfer>
      </el-col>
    </el-row>

    <div class="btn-down">
      <el-button type="primary" @click="openFullScreen" >保 存</el-button>
      <el-button @click="openFullScreen" >重 置</el-button>
    </div>
  </div>


</div>
<!--  -->
</template>

<script>
export default {
  data() {
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `储蓄卡 ${ i }`
        });
      }
      return data;
    };
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      data: generateData(),
      value1: [1, 4],
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

.btn-down{
  margin:  15px 0;
}

.content-box-title{
  background: #13CE66;
  color:#fff;
  padding: 15px;
  border-radius: 3px 3px 0 0;
}

.content-box {
  background: #fff;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 0 0 3px 3px ;
}
</style>
