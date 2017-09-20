<template>
  <div class="row mom">
    <h3>
      多行文本
    </h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6">
        {{input}}
        <FTextarea v-model="input"></FTextarea>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FTextarea v-model="input">&lt;/FTextarea>
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
        value: [],
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
          name: 'disabled',
          style: 'Boolean',
          def: 'false',
          sm: ''
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
