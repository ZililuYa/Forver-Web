<template>
  <div class="row mom">
    <h3>手风琴</h3>
    <hr>
    <br>
    <p><b>默认样式</b></p>
    <div class="yanshi pt18">
      <FAccordion>
        <FAccordionPanel title="水果">苹果，西瓜</FAccordionPanel>
        <FAccordionPanel title="球类">足球，乒乓球</FAccordionPanel>
        <FAccordionPanel title="动物">猫，狗</FAccordionPanel>
      </FAccordion>
      <highlight-code lang="html">
        &lt;FAccordion&gt;
        &lt;FAccordionPanel title="水果">苹果，西瓜&lt;/FAccordionPanel&gt;
        &lt;FAccordionPanel title="球类">足球，乒乓球&lt;/FAccordionPanel&gt;
        &lt;FAccordionPanel title="动物">猫，狗&lt;/FAccordionPanel&gt;
        &lt;/FAccordion&gt;
      </highlight-code>
    </div>
    <br>
    <p><b>joined</b></p>
    <div class="yanshi pt18">
      <FAccordion type="joined">
        <FAccordionPanel title="水果">苹果，西瓜</FAccordionPanel>
        <FAccordionPanel title="球类">足球，乒乓球</FAccordionPanel>
        <FAccordionPanel title="动物">猫，狗</FAccordionPanel>
      </FAccordion>
      <highlight-code lang="html">
        &lt;FAccordion type="joined"&gt;
      </highlight-code>
    </div>
    <br>
    <p><b>初始位置为 1</b></p>
    <div class="yanshi pt18">
      <FAccordion :index="1">
        <FAccordionPanel title="水果">苹果，西瓜</FAccordionPanel>
        <FAccordionPanel title="球类">足球，乒乓球</FAccordionPanel>
        <FAccordionPanel title="动物">猫，狗</FAccordionPanel>
      </FAccordion>
      <highlight-code lang="html">
        &lt;FAccordion :index="1"&gt;
      </highlight-code>
    </div>
    <br>
    <p><b>切换事件 panel-click</b></p>

    <div class="yanshi pt18"> <code>{{data}}</code>
      <FAccordion @panel-click="panelClick">
        <FAccordionPanel title="水果">苹果，西瓜</FAccordionPanel>
        <FAccordionPanel title="球类">足球，乒乓球</FAccordionPanel>
        <FAccordionPanel title="动物">猫，狗</FAccordionPanel>
      </FAccordion>
      <highlight-code lang="html">
        &lt;FAccordion @panel-click="panelClick"&gt;
        &lt;script&gt;
          export default {
            data () {
              return {
                  data: ''
                }
              },
              methods: {
              panelClick (evt) {
                this.data = evt
              }
            }
          }
        &lt;/script&gt;
      </highlight-code>
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
        data: '',
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
          name: 'index',
          style: 'Number',
          def: 0,
          sm: '设置初始位置'
        }, {
          name: 'type',
          style: 'String',
          def: 'null',
          sm: '设置类型'
        }, {
          name: 'panel-click',
          style: 'Event',
          def: 'panel 对象',
          sm: 'panel 点击事件'
        }]
      }
    },
    methods: {
      panelClick (evt) {
        this.data = evt
      }
    }
  }
</script>
