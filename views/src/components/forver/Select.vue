<template>
  <div class="row mom">
    <h3>
      下拉框
    </h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6">
        <FSelect :data="data" v-model="value"></FSelect>
        {{value}}
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FSelect :data="data" v-model="value">&lt;/FSelect>
        </highlight-code>
      </div>
    </div>
    <br>
    <h3>属性</h3>
    <hr>
    <FTable :bordered="true" :head="head" :body="body"></FTable>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        data: [{
          text: '选择1',
          value: '值1'
        }, {
          text: '选择2',
          value: '值2'
        }, {
          text: '选择3',
          value: '值3'
        }],
        value: '',
        head: [{
          text: '名称',
          name: 'name',
          width: 150
        }, {
          text: '类型',
          name: 'style'
        }, {
          text: '默认值',
          name: 'def'
        }, {
          text: '说明',
          name: 'sm'
        }],
        body: [{
          name: 'data',
          style: 'String',
          def: '',
          sm: ''
        }, {
          name: 'placeholder',
          style: 'String',
          def: '请选择',
          sm: '占位符'
        }, {
          name: 'change',
          style: 'Event',
          def: '',
          sm: '切换页事件'
        }],
        input: 'input'
      }
    },
    props: {},
    mounted () {
    },
    methods: {}
  }
</script>
