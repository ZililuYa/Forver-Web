<template>
  <div class="row mom">
    <h3>面包屑</h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi type1 pt18">
      <FBreadcrumb :data="data"></FBreadcrumb>
      <highlight-code lang="html">
        &lt;FBreadcrumb :data="data"&gt;&lt;/FBreadcrumb&gt;
        &lt;script&gt;
        export default {
          data () {
            return {
            data: [{
                title: '首页',
                icon: 'fa-home'
              }, {
                title: '组件',
                icon: 'fa-cube'
              }, {
                title: 'FBreadcrumb'
            }]
          }
        }
        &lt;/script&gt;
      </highlight-code>
    </div>
    <br>
    <p><b>type</b></p>
    <div class="yanshi type1 pt18">
      <FBreadcrumb :data="data" type="1"></FBreadcrumb>
      <FBreadcrumb :data="data" type="2"></FBreadcrumb>
      <FBreadcrumb :data="data" type="3"></FBreadcrumb>
      <highlight-code lang="html">
        &lt;FBreadcrumb type="1"&gt;&lt;/FBreadcrumb&gt;
        &lt;FBreadcrumb type="2"&gt;&lt;/FBreadcrumb&gt;
        &lt;FBreadcrumb type="3"&gt;&lt;/FBreadcrumb&gt;
      </highlight-code>
    </div>
    <p><b>auto</b></p>
    <div class="yanshi type1 pt18">
      <FBreadcrumb :data="data1" :auto="true"></FBreadcrumb>
      <highlight-code lang="html">
        &lt;FBreadcrumb :auto="true"&gt;&lt;/FBreadcrumb&gt;
      </highlight-code>
    </div>
    <p><b>click</b></p>
    <div class="yanshi type1 pt18">
      <code>{{cli}}</code>
      <FBreadcrumb :data="data" @click="clickEvent"></FBreadcrumb>
      <highlight-code lang="html">
        &lt;FBreadcrumb @click="clickEvent"&gt;&lt;/FBreadcrumb&gt;
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
          def: '1',
          sm: '风格'
        }, {
          name: 'auto',
          style: 'Boolean',
          def: 'false',
          sm: '自动隐藏'
        }, {
          name: 'click',
          style: 'Event',
          def: '',
          sm: '点击事件'
        }],
        cli: '',
        data: [{
          title: '首页',
          icon: 'fa-home'
        }, {
          title: '组件',
          icon: 'fa-cube'
        }, {
          title: 'FBreadcrumb'
        }],
        data1: [{
          title: '首页',
          icon: 'fa-home'
        }, {
          title: '组件',
          icon: 'fa-cube'
        }, {
          title: '如果超长会自动隐藏',
          icon: 'fa-heart'
        }, {
          title: 'FBreadcrumb'
        }]
      }
    },
    props: {},
    mounted () {
    },
    methods: {
      clickEvent (v) {
        this.cli = v
      }
    }
  }
</script>
