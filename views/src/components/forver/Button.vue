<template>
  <div class="row mom">
    <h3>按钮</h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi type1 pt18">
      <FButton>按钮</FButton>
      <highlight-code lang="html">
        &lt;FButton&gt;按钮&lt;/FButton&gt;
      </highlight-code>
    </div>
    <br>
    <p><b>color</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-4">
      <FButton color="primary">primary</FButton><br>
      <FButton color="secondary">secondary</FButton><br>
      <FButton color="purple">purple</FButton><br>
      <FButton color="orange">orange</FButton><br>
      <FButton color="pink">pink</FButton>
      </div>
      <div class="col-lg-4">
      <FButton color="turquoise">turquoise</FButton><br>
      <FButton color="success">success</FButton><br>
      <FButton color="info">info</FButton><br>
      <FButton color="blue">blue</FButton><br>
      <FButton color="danger">danger</FButton>
      </div>
      <div class="col-lg-4">
      <FButton color="red">red</FButton><br>
      <FButton color="warning">warning</FButton><br>
      <FButton color="black">black</FButton><br>
      <FButton color="gray">gray</FButton><br>
      <FButton color="default">default</FButton>
      </div>
      <highlight-code lang="html">
        &lt;FButton color="primary"&gt;primary&lt;/FButton&gt;
        // ...
      </highlight-code>
    </div>
    <br>
    <p><b>disabled</b></p>
    <div class="yanshi type1 pt18">
      <FButton color="primary" :disabled="true">primary</FButton>
      <FButton color="secondary" :disabled="true">secondary</FButton>
      <highlight-code lang="html">
        &lt;FButton :disabled="true"&gt;primary&lt;/FButton&gt;
      </highlight-code>
    </div>
    <br>
    <p><b>size</b></p>
    <div class="yanshi type1 pt18">
      <FButton color="primary" size="lg">lg</FButton>
      <FButton color="secondary">default</FButton>
      <FButton color="red" size="sm">sm</FButton>
      <FButton color="info" size="xs">xs</FButton>
      <highlight-code lang="html">
        &lt;FButton size="lg"&gt;lg&lt;/FButton&gt;
        &lt;FButton size="sm"&gt;sm&lt;/FButton&gt;
        &lt;FButton size="xs"&gt;xs&lt;/FButton&gt;
      </highlight-code>
    </div>
    <br>
    <p><b>icon</b></p>
    <div class="yanshi type1 pt18">
      <FButton color="primary" :icon="true"><span>Like</span> <i class="fa-check"></i></FButton>
      <FButton color="red" :icon="true" :icon_standalone="true"><i class="fa-home"></i><span>Home</span></FButton>
      <FButton color="info" :icon="true"><i class="fa-music"></i></FButton>
      <highlight-code lang="html">
        &lt;FButton color="primary" :icon="true"&gt;&lt;span&gt;Like&lt;/span&gt; &lt;i class="fa-check"&gt;&lt;/i&gt;&lt;/FButton&gt;
        &lt;FButton color="red" :icon="true" :icon_standalone="true"&gt;&lt;i class="fa-home"&gt;&lt;/i&gt;&lt;span&gt;Home&lt;/span&gt;&lt;/FButton&gt;
        &lt;FButton color="info" :icon="true"&gt;&lt;i class="fa-music"&gt;&lt;/i&gt;&lt;/FButton&gt;
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
          def: 'button',
          sm: '类型'
        }, {
          name: 'color',
          style: 'String',
          def: 'white',
          sm: '颜色'
        }, {
          name: 'size',
          style: 'String',
          def: 'null',
          sm: '大小'
        }, {
          name: 'icon',
          style: 'Boolean',
          def: 'false',
          sm: '图标显示'
        }, {
          name: 'icon_standalone',
          style: 'Boolean',
          def: 'false',
          sm: '图标独立显示'
        }]
      }
    },
    props: {},
    mounted () {
    },
    methods: {}
  }
</script>
