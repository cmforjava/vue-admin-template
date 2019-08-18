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
      <el-form-item label="HTTP方法">
        <el-checkbox-group v-model="form.check">
          <el-checkbox label="GET" name="http"/>
          <el-checkbox label="POST" name="http"/>
          <el-checkbox label="PUT" name="http"/>
          <el-checkbox label="DELETE" name="http"/>
          <el-checkbox label="PATCH" name="http"/>
          <el-checkbox label="OPTION" name="http"/>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="HTTP路径">
        <el-input v-model="form.mailing_full_address" />
      </el-form-item>
      <el-form-item label="创建时间">
        <el-date-picker :disabled="true" v-model="form.date1" type="date" placeholder="创建时间"/>
      </el-form-item>
      <el-form-item label="更新时间">
        <el-date-picker :disabled="true" v-model="form.date2" type="date" placeholder="更新时间"/>
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
    return {
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

