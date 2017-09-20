<template>
  <div class="row mom">
    <h3>
      进度
    </h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6">
        <FProgress :progress="50"></FProgress>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FProgress :progress="50">&lt;/FProgress>
        </highlight-code>
      </div>
    </div>
    <br>
    <p><b>type</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6">
        <FProgress :progress="10" type="success"></FProgress>
        <FProgress :progress="20" type="default"></FProgress>
        <FProgress :progress="30" type="purple"></FProgress>
        <FProgress :progress="40" type="blue"></FProgress>
        <FProgress :progress="50" type="red"></FProgress>
        <FProgress :progress="60" type="black"></FProgress>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FProgress :progress="10" type="success">&lt;/FProgress>
          &lt;FProgress :progress="20" type="default">&lt;/FProgress>
          &lt;FProgress :progress="30" type="purple">&lt;/FProgress>
          &lt;FProgress :progress="40" type="blue">&lt;/FProgress>
          &lt;FProgress :progress="50" type="red">&lt;/FProgress>
          &lt;FProgress :progress="60" type="black">&lt;/FProgress>
        </highlight-code>
      </div>
    </div>
    <br>
    <p><b>striped</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6">
        <FProgress :progress="90" :striped="true" :active="true"></FProgress>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FProgress :progress="90" :striped="true" :active="true">&lt;/FProgress>
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
          name: 'progress',
          style: 'Number',
          def: '',
          sm: '进度值'
        }, {
          name: 'striped',
          style: 'Boolean',
          def: 'false',
          sm: '波纹'
        }, {
          name: 'active',
          style: 'Boolean',
          def: 'false',
          sm: '动态'
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
