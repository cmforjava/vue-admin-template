<template>
  <div class="app-container">
    <div class="filter-container" @keyup.enter="fetchData">

      <el-button class="filter-item" style="margin-left: 10px;" type="primary" @click="handleCreate">
        新建
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" @click="showFilter = !showFilter">
        筛选
      </el-button>
      <el-form v-show="showFilter" :model="search" label-width="120px">
        <el-form-item label="状态">
          <el-select @keyup.enter.stop.native="catchEnter" v-model="search.status" placeholder="请选择订单状态">
            <el-option label="待接单" value="1" />
            <el-option label="待取件" value="2" />
            <el-option label="待支付" value="3" />
            <el-option label="未签收" value="4" />
            <el-option label="已签收" value="5" />
            <el-option label="已支付" value="6" />
            <el-option label="已录单" value="7" />
            <el-option label="已完成" value="10" />
          </el-select>
        </el-form-item>
        <el-form-item label="订单号">
          <el-input v-model="search.series_number" />
        </el-form-item>
        <el-form-item label="运单号">
          <el-input v-model="search.delivery_number" />
        </el-form-item>
        <el-form-item>
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" @click="fetchData">
            搜索
          </el-button>
        </el-form-item>
      </el-form>

    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="标识">
        <template slot-scope="scope">
          {{ scope.row.series_number }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="名称">
        <template slot-scope="scope">
          {{ scope.row.delivery_number }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="权限">
        <template slot-scope="scope">
          {{ scope.row.status_str }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="创建时间">
        <template slot-scope="scope">
          {{ scope.row.created_at }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="更新时间">
        <template slot-scope="scope">
          {{ scope.row.updated_at }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-icon name="edit" @click.native="handleEdit(scope)" />
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.pageSize" @pagination="fetchData" />
  </div>
</template>

<script>
import { getList } from '@/api/express'
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      showFilter: false,
      listQuery: {
        page: 1,
        pageSize: 20
      },
      search: {
      },
      list: null,
      total: 0,
      listLoading: true
    }
  },
  computed: {
    'searchstr': function() {
      const val = this.search
      for (const key in val) {
        if (!val[key]) {
          delete val[key]
        }
      }
      let qstr = ''
      qstr = JSON.stringify(val).replace(',', '&').replace(/[{}"]/g, '')
      return qstr
    }// 计算搜索字段
  },
  // watch: {
  //   'search': function(val) {
  //     let qstr = ''
  //     qstr = JSON.stringify(val).replace(',', '&').replace(/[{}"]/g, '')
  //     debugger
  //     this.listQuery.search = qstr
  //   }
  // },
  created() {
    this.fetchData()
  },
  methods: {
    catchEnter() {

    },
    handleEdit(scope) {
      this.$router.push('/setting/roleedit/' + scope.row.id)
    },
    handleCreate() {
      console.log(1)
    },
    fetchData() {
      this.listLoading = true
      getList({ ...this.listQuery, search: this.searchstr }).then(response => {
        this.list = response.data.data
        this.total = response.data.total
        this.listLoading = false
      })
    }
  }
}
</script>
