<template>
  <div class="row mom">
    <h3>
      表格
    </h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6">
        <FTable :head="head1" :body="body1"></FTable>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FTable :head="head" :body="body">&lt;/FTable>
          // head [{text: '名字',name: 'name',width: 100}, {text: '年龄',name: 'age'}]
          // body [{name: '小明',age: '15'}, {name: '小红',age: '12'}]
        </highlight-code>
      </div>
    </div>
    <br>
    <p><b>HTML</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6">
        <FTable :bordered="true" :striped="true" :hover="true" :condensed="true">
          <thead>
          <tr>
            <th>名字</th>
            <th>成绩</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>小明</td>
            <td>100</td>
          </tr>
          <tr>
            <td>小红</td>
            <td>89</td>
          </tr>
          </tbody>
        </FTable>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FTable :bordered="true" :striped="true" :hover="true" :condensed="true">
            &lt;thead>
              &lt;tr>
                &lt;th>名字&lt;/th>
                &lt;th>成绩&lt;/th>
              &lt;/tr>
            &lt;/thead>
            &lt;tbody>
              &lt;tr>
                &lt;td>小明&lt;/td>
                &lt;td>100&lt;/td>
              &lt;/tr>
              &lt;tr>
                &lt;td>小红&lt;/td>
                &lt;td>89&lt;/td>
              &lt;/tr>
            &lt;/tbody>
          &lt;/FTable>
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
        head1: [{
          text: '名字',
          name: 'name',
          width: 100
        }, {
          text: '年龄',
          name: 'age'
        }],
        body1: [{
          name: '小明',
          age: '15'
        }, {
          name: '小红',
          age: '12'
        }],
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
          name: 'hover',
          style: 'Boolean',
          def: 'false',
          sm: '鼠标高亮'
        }, {
          name: 'striped',
          style: 'Boolean',
          def: 'false',
          sm: '间隔波纹'
        }, {
          name: 'bordered',
          style: 'Boolean',
          def: 'false',
          sm: '边线'
        }, {
          name: 'condensed',
          style: 'Boolean',
          def: 'false',
          sm: '缩小内边距'
        }, {
          name: 'head',
          style: 'Array',
          def: '[]',
          sm: '标题'
        }, {
          name: 'body',
          style: 'Array',
          def: '[]',
          sm: '内容'
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
