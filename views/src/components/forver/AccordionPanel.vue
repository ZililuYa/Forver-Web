<template>
  <div class="row mom">
    <h3>手风琴</h3>
    <hr>
    <p>
      配合 <a href="javascript:;" @click="$router.push('/Accordion')">Accordion</a> 一起使用
    </p>
    <highlight-code lang="html">
      &lt;FAccordionPanel title="水果"&gt;
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
    name: 'AccordionPanel',
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
        }]
      }
    },
    props: {},
    mounted () {
    },
    methods: {}
  }
</script>
