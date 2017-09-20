<template>
  <div class="row mom">
    <h3>
      标签页
    </h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi pt18">
      <div class="col-lg-6">
        <FTabs :current="1">
          <FTabPane name="tab1" icon="fa-home">page1</FTabPane>
          <FTabPane name="tab2" icon="fa-ils">page2</FTabPane>
          <FTabPane name="tab3">page3</FTabPane>
          <FTabPane name="tab4">page4</FTabPane>
        </FTabs>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FTabs :current="1">
            &lt;FTabPane name="tab1" icon="fa-home">page1&lt;/FTabPane>
            &lt;FTabPane name="tab2" icon="fa-ils">page2&lt;/FTabPane>
            &lt;FTabPane name="tab3">page3&lt;/FTabPane>
            &lt;FTabPane name="tab4">page4&lt;/FTabPane>
          &lt;/FTabs>
        </highlight-code>
      </div>
    </div>
    <br>
    <p><b>justified</b></p>
    <div class="yanshi pt18">
      <div class="col-lg-6">
        <FTabs :current="1" :justified="true" :bordered="true">
          <FTabPane name="tab1" icon="fa-home">page1</FTabPane>
          <FTabPane name="tab2" icon="fa-ils">page2</FTabPane>
          <FTabPane name="tab3">page3</FTabPane>
          <FTabPane name="tab4">page4</FTabPane>
        </FTabs>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FTabs :justified="true" :bordered="true" :current="1">
        </highlight-code>
      </div>
    </div>
    <br>
    <p><b>type</b></p>
    <div class="yanshi pt18">
      <div class="col-lg-6">
        <FTabs :current="1" tab_position="right" type="vertical">
          <FTabPane name="tab1" icon="fa-home">page1</FTabPane>
          <FTabPane name="tab2" icon="fa-ils">page2</FTabPane>
          <FTabPane name="tab3">page3</FTabPane>
          <FTabPane name="tab4">page4</FTabPane>
        </FTabs>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FTabs tab_position="right" type="vertical" :current="1">
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
          def: '',
          sm: '类型'
        }, {
          name: 'current',
          style: 'Number',
          def: '0',
          sm: '当前显示页'
        }, {
          name: 'justified',
          style: 'Boolean',
          def: 'false',
          sm: '填充'
        }, {
          name: 'tab_position',
          style: 'String',
          def: 'left',
          sm: '标签标题显示在左侧，必须配合 vertical'
        }, {
          name: 'tab-change',
          style: 'Event',
          def: '',
          sm: '切换事件'
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
