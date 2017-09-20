<template>
  <div class="row mom">
    <h3>
      多选
    </h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6" style="padding-bottom: 20px">
        {{value}}
        <FMultiSelect :data="data" v-model="value"></FMultiSelect>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FMultiSelect :data="data" v-model="value">&lt;/FMultiSelect>
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
        data: ['超人不会飞', '发如雪', '兰亭序'],
        value: [],
        head: [{
          text: '名称',
          name: 'name',
          width: 100
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
          style: 'Array',
          def: '[]',
          sm: '可选值'
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
