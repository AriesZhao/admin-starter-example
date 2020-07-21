<template>
  <panel>
    <!--直接对节点赋值-->
    <tree title="测试节点" :nodes="nodes" :saveFn="save">
      <template v-slot:editor="prop">
        <q-input
          label="名称"
          v-model="prop.form.name"
          :readonly="prop.readonly"
        />
      </template>
    </tree>
    <hr/>
    <!--调用后台取得节点-->
    <tree title="测试节点2" :listFn="list" :saveFn="save">
      <template v-slot:editor="prop">
        <q-input
          label="名称2"
          v-model="prop.form.name"
          :readonly="prop.readonly"
        />
      </template>
    </tree>
  </panel>
</template>

<script>
const nodeList = [
  {
    id: '1',
    parentId: null,
    name: 'A'
  },
  {
    id: '2',
    parentId: null,
    name: 'B'
  },
  {
    id: '3',
    parentId: '1',
    name: 'A1'
  }
]
export default {
  name: 'TreeDemo',
  data() {
    return {
      nodes: nodeList
    }
  },
  methods: {
    list() {
      return new Promise((resolve, reject) => {
        resolve(nodeList)
      })
    },
    save(entity) {
      return new Promise((resolve, reject) => {
        resolve(entity)
      })
    }
  }
}
</script>
