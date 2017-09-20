<template>
  <div class="row mom">
    <h3>
      标签输入框
    </h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6">
        {{value}}
        <FTagInput v-model="value" ></FTagInput>
        <br>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FTagInput v-model="value">&lt;/FTagInput>
        </highlight-code>
      </div>
    </div>
    <br>
    <p><b>type</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6">
        <FTagInput v-model="value" type="blue"></FTagInput>
        <br>
        <FTagInput v-model="value" type="purple"></FTagInput>
        <br>
        <FTagInput v-model="value" type="red"></FTagInput>
        <br>
        <FTagInput v-model="value" type="primary"></FTagInput>
        <br>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FTagInput v-model="value" type="blue">&lt;/FTagInput>
          &lt;FTagInput v-model="value" type="purple">&lt;/FTagInput>
          &lt;FTagInput v-model="value" type="red">&lt;/FTagInput>
          &lt;FTagInput v-model="value" type="primary">&lt;/FTagInput>
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
          name: 'type',
          style: 'String',
          def: 'secondary',
          sm: '类型'
        }, {
          name: 'max_value',
          style: 'Number',
          def: '',
          sm: '最大可输入数量'
        }, {
          name: 'change',
          style: 'Event',
          def: '',
          sm: '改变值事件'
        }, {
          name: 'remove',
          style: 'Event',
          def: '',
          sm: '删除值事件'
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
