<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="ID">
        <el-input v-model="form.mailing_telephone" />
      </el-form-item>
      <el-form-item label="标识">
        <el-input v-model="form.mailing_user_name" />
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="form.series_number" />
      </el-form-item>
      <el-form-item label="权限">
        <el-transfer
          filterable
          :filter-method="filterMethod"
          filter-placeholder="请输入城市拼音"
          :titles="['未选中', '选中']"
          v-model="value"
          :data="data">
        </el-transfer>

      </el-form-item>
      <el-form-item label="创建时间">
        <el-date-picker disabled="true" v-model="form.date1" type="date" placeholder="创建时间"/>
      </el-form-item>
      <el-form-item label="更新时间">
        <el-date-picker disabled="true" v-model="form.date2" type="date" placeholder="更新时间"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getOne } from '@/api/express'
export default {
  data() {
    const generateData = _ => {
      const data = [];
      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        });
      });
      return data;
    };
    return {
      data: generateData(),
      value: [],
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      },
      form: {
        check: [],
        date1: '',
        date2: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      debugger
      this.$router.back()
    }
  },
  mounted() {
    let route = this.$route
    let id = route.params.pathMatch
    // getOne(id).then(res => {
    //   this.form = res.data
    // })
  }
}
</script>

<style scoped>
  .line{
    text-align: center;
  }
</style>

