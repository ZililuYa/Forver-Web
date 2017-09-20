<template>
  <div class="row mom">
    <h3>
      Spinner
    </h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6">
        <FSpinner v-model="value" :interval="3"></FSpinner>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FSpinner v-model="value" :interval="3">&lt;/FSpinner>
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
        value: 6,
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
          name: 'min',
          style: 'Number',
          def: '',
          sm: '最小值'
        }, {
          name: 'max',
          style: 'Number',
          def: '',
          sm: '最大值'
        }, {
          name: 'interval',
          style: 'Number',
          def: '1',
          sm: '每次点击累加值'
        }, {
          name: 'readonly',
          style: 'Boolean',
          def: 'false',
          sm: '禁用输入框'
        }, {
          name: 'type',
          style: 'String',
          def: 'secondary',
          sm: '按钮颜色，跟Button一样'
        }, {
          name: 'size',
          style: 'String',
          def: '',
          sm: '尺寸'
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
