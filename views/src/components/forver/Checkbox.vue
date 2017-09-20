<template>
  <div class="row mom">
    <h3>复选框</h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi type1 pt18">
      <FCheckbox :check="true">千里之外</FCheckbox>
      <highlight-code lang="html">
        &lt;FCheckbox :check="true"&gt;千里之外&lt;/FCheckbox&gt;
      </highlight-code>
    </div>
    <br>
    <p><b>type</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-4">
        <FCheckbox type="replaced">replaced</FCheckbox>
        <br>
        <FCheckbox type="blue">blue</FCheckbox>
        <br>
        <FCheckbox type="success">success</FCheckbox>
        <br>
        <FCheckbox type="primary">primary</FCheckbox>
        <br>
        <FCheckbox type="info">info</FCheckbox>
      </div>
      <div class="col-lg-4">
        <FCheckbox type="purple">purple</FCheckbox>
        <br>
        <FCheckbox type="secondary">secondary</FCheckbox>
        <br>
        <FCheckbox type="gray">gray</FCheckbox>
        <br>
        <FCheckbox type="red">red</FCheckbox>
        <br>
        <FCheckbox type="danger">danger</FCheckbox>
        <br>
      </div>
      <div class="col-lg-4">
        <FCheckbox type="warning">warning</FCheckbox>
        <br>
        <FCheckbox type="pink">pink</FCheckbox>
        <br>
        <FCheckbox type="turquoise">turquoise</FCheckbox>
        <br>
        <FCheckbox type="orange">orange</FCheckbox>
        <br>
        <FCheckbox type="yellow">yellow</FCheckbox>
        <br>
      </div>
      <highlight-code lang="html">
        &lt;FCheckbox type="replaced"&gt;replaced&lt;/FCheckbox&gt;
        // ...
      </highlight-code>
    </div>
    <br>
    <p><b>change</b></p>
    <div class="yanshi type1 pt18">
      <p><code>{{ce}}</code></p>
      <FCheckbox type="replaced" @change="changeEvent">replaced</FCheckbox>
      <highlight-code lang="html">
        &lt;FCheckbox @change="changeEvent"&gt;replaced&lt;/FCheckbox&gt;
      </highlight-code>
    </div>
    <br>
    <h3>属性</h3>
    <hr>
    <FTable :bordered="true" :head="head" :body="body"></FTable>
  </div>
</template>
<script>
  /**
   *
   * */
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
          def: 'button',
          sm: '类型'
        }, {
          name: 'check',
          style: 'Boolean',
          def: 'false',
          sm: '默认选中'
        }, {
          name: 'name',
          style: 'String',
          def: 'null',
          sm: '配合 CheckboxGroup 使用'
        }, {
          name: 'value',
          style: 'String',
          def: 'null',
          sm: '配合 CheckboxGroup 使用'
        }, {
          name: 'change',
          style: 'Event',
          def: '',
          sm: '改变事件'
        }],
        ce: ''
      }
    },
    props: {},
    mounted () {
    },
    methods: {
      changeEvent (t) {
        this.ce = t
      }
    }
  }
</script>
