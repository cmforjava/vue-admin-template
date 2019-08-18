<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="寄件人手机号">
        <el-input v-model="form.mailing_telephone" />
      </el-form-item>
      <el-form-item label="寄件人姓名">
        <el-input v-model="form.mailing_user_name" />
      </el-form-item>
      <el-form-item label="订单号">
        <el-input v-model="form.series_number" />
      </el-form-item>
      <el-form-item label="运单号">
        <el-input v-model="form.delivery_number" />
      </el-form-item>
      <el-form-item label="寄件地址">
        <el-input v-model="form.mailing_full_address" />
      </el-form-item>

      <el-form-item label="收件人手机号">
        <el-input v-model="form.delivery_telephone" />
      </el-form-item>
      <el-form-item label="收件人姓名">
        <el-input v-model="form.delivery_user_name" />
      </el-form-item>

      <el-form-item label="收件地址">
        <el-input v-model="form.delivery_full_address" />
      </el-form-item>

      <el-form-item label="寄件类型">
        <el-select v-model="form.mailing_type" placeholder="请选择寄件类型">
          <el-option label="普通件" :value="1" />
          <el-option label="往返件" :value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="是否代收服务">
        <el-select v-model="form.is_agency_fund" placeholder="是否代收">
          <el-option label="否" :value="0" />
          <el-option label="是" :value="1" />
        </el-select>
      </el-form-item>
      <el-form-item v-if="form.is_agency_fund" label="代收金额">
        <el-input v-model="form.amount_agency_fund" />
      </el-form-item>
      <el-form-item label="用户备注">
        <el-input v-model="form.user_remark" />
      </el-form-item>
      <el-form-item label="运费">
        <el-input v-model="form.amount_freight" />
      </el-form-item>
      <el-form-item label="支付类型">
        <el-select v-model="form.pay_type" placeholder="是否代收">
          <el-option label="app钱包余额" :value="1" />
          <el-option label="支付宝" :value="2" />
          <el-option label="微信" :value="3" />
          <el-option label="现金" :value="4" />
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="form.status" placeholder="请选择订单状态">
          <el-option label="待接单" :value="1" />
          <el-option label="待取件" :value="2" />
          <el-option label="待支付" :value="3" />
          <el-option label="未签收" :value="4" />
          <el-option label="已签收" :value="5" />
          <el-option label="已支付" :value="6" />
          <el-option label="已录单" :value="7" />
          <el-option label="已完成" :value="10" />
        </el-select>
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
      form: {}
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$router.back()
    }
  },
  mounted() {
    let route = this.$route
    let id = route.params.pathMatch
    getOne(id).then(res => {
      this.form = res.data
    })
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

