<template>
  <div class="row mom">
    <h3>复选框组</h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi type1 pt18">
      <code>{{ck}}</code>
      <FCheckboxGroup v-model="ck">
        <FCheckbox name="Fruits" value="apple">苹果</FCheckbox>
        <FCheckbox name="Fruits" value="bunana">香蕉</FCheckbox>
        <FCheckbox name="Fruits" value="watermelon">西瓜</FCheckbox>
      </FCheckboxGroup>
      <highlight-code lang="html">
        &lt;FCheckboxGroup v-model="ck" @change="...">
          &lt;FCheckbox name="Fruits" value="apple">苹果&lt;/FCheckbox>
          &lt;FCheckbox name="Fruits" value="bunana">香蕉&lt;/FCheckbox>
          &lt;FCheckbox name="Fruits" value="watermelon">西瓜&lt;/FCheckbox>
        &lt;/FCheckboxGroup>
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
    name: 'FPanel',
    data () {
      return {
        ck: [],
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
          name: 'value',
          style: 'Array',
          def: '[ ]',
          sm: '默认选中的值'
        }, {
          name: 'change',
          style: 'Event',
          def: '',
          sm: '值改变事件'
        }]
      }
    },
    props: {
    },
    mounted () {
    },
    methods: {
    }
  }
</script>
