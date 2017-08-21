<template>
<!--  -->
<div class="selectComponents">
  <div class="content-box-title">
    稽核策略新增
  </div>
  <div class="content-box">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form :label-position="labelPosition" label-width="140px" :model="formLabelAlign">
          <el-form-item label="场景编码">
            <el-input v-model="formLabelAlign.name" placeholder="SRC001"></el-input>
          </el-form-item>
          <el-form-item label="数据源一">
            <el-select v-model="value" placeholder="">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-transfer v-model="value1" :data="data"></el-transfer>
          <el-form-item label="添加数据清洗规则">
            <el-select v-model="value" placeholder="SCE001 截取字符串">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-button type="primary" class="btn-top">添 加</el-button>
          <excl></excl>

        </el-form>

      </el-col>
      <el-col :span="12">
        <el-form :label-position="labelPosition" label-width="140px" :model="formLabelAlign">
          <el-form-item label="场景编码">
            <el-input v-model="formLabelAlign.name" placeholder="SRC001"></el-input>
          </el-form-item>
          <el-form-item label="数据源二">
            <el-select v-model="value" placeholder="">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-transfer v-model="value1" :data="data"></el-transfer>
          <el-form-item label="添加数据清洗规则">
            <el-select v-model="value" placeholder="SCE001 截取字符串">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-button type="primary" class="btn-top">添 加</el-button>
          <excl></excl>

        </el-form>

      </el-col>
    </el-row>
    <div class="btn-down">
      <el-button type="primary">保 存</el-button>
      <el-button>重 置</el-button>
    </div>


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
      labelPosition: 'left',
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
      value: '',
      data: generateData(),
      value1: [1, 4]
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
  text-align: center;
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

.btn-top{
  margin-bottom: 15px;
}

.el-transfer{
  margin-bottom: 15px;
}
</style>
