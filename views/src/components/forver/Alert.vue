<template>
  <div class="row mom">
    <h3>警告</h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi type1 pt18">
      <FAlert>King glory is the most fun game, you know?</FAlert>
      <highlight-code lang="html">
        &lt;FAlert>King glory is the most fun game, you know?&lt;/FAlert&gt;
      </highlight-code>
    </div>
    <br>
    <p><b>type</b></p>
    <div class="yanshi type1 pt18">
      <FAlert type="success">King glory is the most fun game, you know?</FAlert>
      <FAlert type="info">King glory is the most fun game, you know?</FAlert>
      <FAlert type="warning">King glory is the most fun game, you know?</FAlert>
      <FAlert type="danger">King glory is the most fun game, you know?</FAlert>
      <FAlert type="default">King glory is the most fun game, you know?</FAlert>
      <FAlert type="white">King glory is the most fun game, you know?</FAlert>
      <FAlert type="black">King glory is the most fun game, you know?</FAlert>
      <highlight-code lang="html">
        &lt;FAlert type="success">King glory is the most fun game, you know?&lt;/FAlert&gt;
        &lt;FAlert type="info">King glory is the most fun game, you know?&lt;/FAlert&gt;
        &lt;FAlert type="warning">King glory is the most fun game, you know?&lt;/FAlert&gt;
        &lt;FAlert type="danger">King glory is the most fun game, you know?&lt;/FAlert&gt;
        &lt;FAlert type="default">King glory is the most fun game, you know?&lt;/FAlert&gt;
        &lt;FAlert type="white">King glory is the most fun game, you know?&lt;/FAlert&gt;
        &lt;FAlert type="black">King glory is the most fun game, you know?&lt;/FAlert&gt;
      </highlight-code>
    </div>
    <br>
    <p><b>不显示关闭按钮</b></p>
    <div class="yanshi type1 pt18">
      <FAlert type="success" :close_icon="false">King glory is the most fun game, you know?</FAlert>
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
      return {head: [{
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
          def: 'white',
          sm: '风格'
        }, {
          name: 'close_icon',
          style: 'Boolean',
          def: 'true',
          sm: '是否显示关闭按钮'
        }, {
          name: 'display',
          style: 'Boolean',
          def: 'false',
          sm: '是否显示'
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
