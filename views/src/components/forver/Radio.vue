<template>
  <div class="row mom">
    <h3>
      单选框
    </h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6">
        <FRadioGroup v-model="radio">
          <FRadio name="radio" value="男">男</FRadio>
          <FRadio name="radio" value="女">女</FRadio>
          <FRadio name="radio" value="外星人" :check="true">外星人</FRadio>
          <br>
          {{radio}}
        </FRadioGroup>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FRadioGroup v-model="radio">
            &lt;FRadio name="radio" value="男">男&lt;/FRadio>
            &lt;FRadio name="radio" value="女">女&lt;/FRadio>
            &lt;FRadio name="radio" value="外星人" :check="true">外星人&lt;/FRadio>
          &lt;/FRadioGroup>
        </highlight-code>
      </div>
    </div>
    <br>
    <p><b>type</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6">
        <FRadioGroup v-model="radio_type">
          <FRadio name="ra" value="default" type="default">default</FRadio>
          <FRadio name="ra" value="blue" type="blue">blue</FRadio>
          <FRadio name="ra" value="success" type="success">success</FRadio>
          <FRadio name="ra" value="primary" type="primary">primary</FRadio>
          <FRadio name="ra" value="info" type="info">info</FRadio>
          <FRadio name="ra" value="purple" type="purple">purple</FRadio>
          <FRadio name="ra" value="secondary" type="secondary">secondary</FRadio>
          <FRadio name="ra" value="warning" type="warning">warning</FRadio>
          <FRadio name="ra" value="gray" type="gray">gray</FRadio>
          <FRadio name="ra" value="red" type="red">red</FRadio>
          <FRadio name="ra" value="danger" type="danger">danger</FRadio>
          <FRadio name="ra" value="yellow" type="yellow">yellow</FRadio>
          <FRadio name="ra" value="turquoise" type="turquoise">turquoise</FRadio>
          <FRadio name="ra" value="orange" type="orange">orange</FRadio>
          <FRadio name="ra" value="pink" type="pink">pink</FRadio>
          <br>
          {{radio_type}}
        </FRadioGroup>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FRadioGroup v-model="radio">
          &lt;FRadio name="radio" value="男">男&lt;/FRadio>
          &lt;/FRadioGroup>
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
        radio: '',
        radio_type: '',
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
          name: 'check',
          style: 'Boolean',
          def: 'false',
          sm: '当前选中'
        }, {
          name: 'name',
          style: 'String',
          def: '',
          sm: '标识'
        }, {
          name: 'value',
          style: 'Number,String',
          def: '',
          sm: '值'
        }, {
          name: 'type',
          style: 'String',
          def: '',
          sm: '类型'
        }, {
          name: 'change',
          style: 'Event',
          def: '',
          sm: '改变事件'
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
