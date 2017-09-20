<template>
  <div class="row mom">
    <h3>
      面板
    </h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi pt18">
      <div class="col-lg-12">
        <FPanel title="乌克丽丽" :border="true" :fold="true">
          穿花衬衫要配上一把乌克丽丽 <br>
          不然看起来会像流氓兄弟 <br>
          穿西装要记得带个带个女伴 <br>
          不然看起来会像泊车小弟 <br>
          一般我是不会随便就 载着花瓶兜风 <br>
          我不是说你是个 花瓶 你你你别发疯
        </FPanel>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FPanel title="乌克丽丽" :border="true"> ... &lt;/FPanel>
        </highlight-code>
      </div>
    </div>
    <br>
    <p><b>theme</b></p>
    <div class="yanshi pt18">
      <div class="col-lg-4">
        <FPanel title="success" theme="success">
        </FPanel>
      </div>
      <div class="col-lg-4">
        <FPanel title="warning" theme="warning">
        </FPanel>
      </div>
      <div class="col-lg-4">
        <FPanel title="info" theme="info">
        </FPanel>
      </div>
      <div class="col-lg-4">
        <FPanel title="red" theme="red">
        </FPanel>
      </div>
      <div class="col-lg-4">
        <FPanel title="purple" theme="purple">
        </FPanel>
      </div>
      <div class="col-lg-4">
        <FPanel title="black" theme="black">
        </FPanel>
      </div>
      <div class="col-lg-4">
        <FPanel title="gray" theme="gray">
        </FPanel>
      </div>
      <div class="col-lg-4">
        <FPanel title="blue" theme="blue">
        </FPanel>
      </div>
      <div class="col-lg-4">
        <FPanel title="danger" theme="danger">
        </FPanel>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FPanel title="success" theme="success"> ... &lt;/FPanel>
          // ...
        </highlight-code>
      </div>
    </div>
    <br>
    <p><b>type</b></p>
    <div class="yanshi pt18">
      <div class="col-lg-6">
        <FPanel title="inverted" type="inverted">
          听妈妈的话 别让她受伤 想快快长大 才能保护她 <br>
          美丽的白发 幸福中发芽 天使的魔法 温暖中慈祥
        </FPanel>
      </div>
      <div class="col-lg-6">
        <FPanel title="flat" type="flat">
          听妈妈的话 别让她受伤 想快快长大 才能保护她 <br>
          美丽的白发 幸福中发芽 天使的魔法 温暖中慈祥
        </FPanel>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FPanel title="inverted" type="inverted"> ... &lt;/FPanel>
          // ...
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
        data: ['超人不会飞', '发如雪', '兰亭序'],
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
          name: 'title',
          style: 'String',
          def: '',
          sm: '标题'
        }, {
          name: 'type',
          style: 'String',
          def: 'default',
          sm: '类型'
        }, {
          name: 'border',
          style: 'Boolean',
          def: 'false',
          sm: '显示边线'
        }, {
          name: 'fold',
          style: 'Boolean',
          def: 'false',
          sm: ''
        }, {
          name: 'theme',
          style: 'String',
          def: '',
          sm: '主题'
        }, {
          name: 'close_icon',
          style: 'Boolean',
          def: 'true',
          sm: '显示关闭按钮'
        }, {
          name: 'fold_icon',
          style: 'Boolean',
          def: 'true',
          sm: '显示收缩按钮'
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
