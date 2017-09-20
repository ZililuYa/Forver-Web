<template>
  <div class="row mom">
    <h3>
      输入框
    </h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6" style="padding-bottom: 20px">
        {{input}}
        <FInput v-model="input"></FInput>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FInput v-model="input">&lt;/FInput>
        </highlight-code>
      </div>
    </div>
    <br>
    <p><b>color</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6" style="padding-bottom: 20px">
        <FInput color="primary" value="primary"></FInput>
        <FInput color="warning" value="warning"></FInput>
        <FInput color="danger" value="danger"></FInput>
        <FInput color="success" value="success"></FInput>
        <FInput color="info" value="info"></FInput>
        <FInput color="red" value="red"></FInput>
        <FInput color="purple" value="purple"></FInput>
        <FInput color="blue" value="blue"></FInput>
        <FInput color="gray" value="gray"></FInput>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FInput color="primary" value="primary">&lt;/FInput>
          //...
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
          name: 'placeholder',
          style: 'String',
          def: '',
          sm: ''
        }, {
          name: 'type',
          style: 'String',
          def: 'text',
          sm: '类型'
        }, {
          name: 'color',
          style: 'String',
          def: 'success',
          sm: '颜色'
        }, {
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
