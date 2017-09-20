<template>
  <div class="row mom">
    <h3>
      开关
    </h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6">
        <FSwitch v-model="value" :check="true"></FSwitch>
        {{value}}
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FSwitch v-model="value" :check="true">&lt;/FSwitch>
        </highlight-code>
      </div>
    </div>
    <p><b>type</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6">
        <FSwitch :check="true" type="primary"></FSwitch> primary <br>
        <FSwitch :check="true" type="secondary"></FSwitch> secondary <br>
        <FSwitch :check="true" type="red"></FSwitch> red <br>
        <FSwitch :check="true" type="blue"></FSwitch> blue <br>
        <FSwitch :check="true" type="purple"></FSwitch> purple <br>
        <FSwitch :check="true" type="warning"></FSwitch> warning <br>
        <FSwitch :check="true" type="danger"></FSwitch> danger <br>
        <FSwitch :check="true" type="info"></FSwitch> info <br>
        <FSwitch :check="true" type="success"></FSwitch> success <br>
        <FSwitch :check="true" type="gray"></FSwitch> gray <br>
        <FSwitch :check="true" type="orange"></FSwitch> orange <br>
        <FSwitch :check="true" type="pink"></FSwitch> pink <br>
        <FSwitch :check="true" type="yellow"></FSwitch> yellow <br>
        <FSwitch :check="true" type="turquoise"></FSwitch> turquoise
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FSwitch v-model="value" :check="true" type="primary">&lt;/FSwitch> primary
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
        value: '',
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
          sm: '状态'
        }, {
          name: 'size',
          style: 'String',
          def: '',
          sm: '尺寸'
        }, {
          name: 'type',
          style: 'String',
          def: 'secondary',
          sm: '类型'
        }, {
          name: 'change',
          style: 'Event',
          def: '',
          sm: '切换页事件'
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
