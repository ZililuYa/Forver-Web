<template>
  <div class="row mom">
    <h3>表单</h3>
    <hr>
    <p>请配合 <a href="javascript:;">Form</a> 一起使用</p>
    <highlight-code lang="html">
      &lt;FFormGroup title='名称' :col='1'>
    </highlight-code>
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
          name: 'title',
          style: 'String',
          def: 'null',
          sm: '标题'
        }, {
          name: 'col',
          style: 'Number',
          def: '2',
          sm: '左侧的标题的宽度 ( 1 - 12 )'
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
