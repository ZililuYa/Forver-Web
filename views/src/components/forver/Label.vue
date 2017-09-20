<template>
  <div class="row mom">
    <h3>
      标签
    </h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6" style="padding-bottom: 20px">
        <FLabel>Label</FLabel>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FLabel>Label&lt;/FLabel>
        </highlight-code>
      </div>
    </div>
    <br>
    <p><b>color</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6" style="padding-bottom: 20px">
        <FLabel type="primary">primary</FLabel>
        <FLabel type="secondary">secondary</FLabel>
        <FLabel type="info">info</FLabel>
        <FLabel type="warning">warning</FLabel>
        <FLabel type="danger">danger</FLabel>
        <FLabel type="success">success</FLabel>
        <FLabel type="purple">purple</FLabel>
        <FLabel type="red">red</FLabel>
        <FLabel type="blue">blue</FLabel>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FLabel type="primary">primary&lt;/FLabel>
          //...
        </highlight-code>
      </div>
    </div>
    <br>
    <p><b>theme</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6" style="padding-bottom: 20px">
        <FLabel theme="badge">badge</FLabel>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FLabel theme="badge">badge&lt;/FLabel>
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
          name: 'type',
          style: 'String',
          def: '',
          sm: '类型'
        }, {
          name: 'theme',
          style: 'String',
          def: 'label',
          sm: '主题'
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
