<template>
  <div class="app-container">
    <!--<el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom:30px;" />-->
    <el-col :span="8">
      <el-tree
        :data="data"
        node-key="id"
        default-expand-all
        draggable
        :allow-drag="allowDrag"
        :allow-drop="allowDrop"
        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop">
        <span slot-scope="{ node, data }" class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span>
            <el-icon
              name="plus"
              size="mini"
              @click.native.stop="() => append(data)">
            </el-icon>
            <el-icon
              name="minus"
              size="mini"
              @click.native="() => remove(node, data)">
            </el-icon>
            <el-icon
              name="edit"
              size="mini"
              @click.native.stop="() => edit(node, data)">
            </el-icon>
          </span>
        </span>
      </el-tree>
    </el-col>
    <el-col :span="12">
      <el-form v-model="currentData" label-width="120px">
        <el-form-item hidden label="ID">
          <el-input v-model="currentData.id"></el-input>
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="currentData.label"></el-input>
        </el-form-item>
        <el-form-item label="图标">
          <el-input v-model="currentData.icon"></el-input>
        </el-form-item>
        <el-form-item label="路径">
          <el-input v-model="currentData.path"></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-input v-model="currentData.role"></el-input>
        </el-form-item>
        <el-form-item label="权限">
          <el-input v-model="currentData.permission"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button @click="onCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-col>

  </div>
</template>

<script>
let id = 1000
export default {

  data() {
    return {
      data: [{
        id: 1,
        label: '快递管理',
        children: [{
          id: 4,
          label: '寄件管理'
        },
        {
          id: 9,
          label: '派件管理'
        }]
      }, {
        id: 2,
        label: '配置管理',
        children: [{
          id: 5,
          label: '角色管理'
        }, {
          id: 6,
          label: '权限管理'
        },
        {
          id: 15,
          label: '菜单管理'
        }, {
          id: 16,
          label: '操作日志'
        }]
      }, {
        id: 3,
        label: '人员管理',
        children: [{
          id: 7,
          label: '管理员管理'
        }, {
          id: 8,
          label: '用户管理'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      currentData: {}
    }
  },
  methods: {
    handleDragStart(node, ev) {
      console.log('drag start', node)
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      console.log('tree drag enter: ', dropNode.label)
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      console.log('tree drag leave: ', dropNode.label)
    },
    handleDragOver(draggingNode, dropNode, ev) {
      console.log('tree drag over: ', dropNode.label)
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      console.log('tree drag end: ', dropNode && dropNode.label, dropType)
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      console.log('tree drop: ', dropNode.label, dropType)
    },
    allowDrop(draggingNode, dropNode, type) {
      if (dropNode.data.label === '二级 3-1') {
        return type !== 'inner'
      } else {
        return true
      }
    },
    append(data) {
      const newChild = { id: id++, label: '新菜单', children: [] }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      this.currentData = newChild
      data.children.push(newChild)
    },
    remove(node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    },
    edit(node, data) {
      this.currentData = data
    },
    allowDrag(draggingNode) {
      return draggingNode.data.label.indexOf('三级 3-2-2') === -1
    },
    onSubmit() {

    },
    onCancel() {

    }
  }
}
</script>
<style>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>

