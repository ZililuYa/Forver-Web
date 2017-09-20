<template>
  <div class="row mom">
    <h3>
      分页
    </h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6">
        <FPagination :current="3" :total="1029" :page_size="30"></FPagination>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FPagination :current="3" :total="1029" :page_size="30">&lt;/FPagination>
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
          name: 'current',
          style: 'Number',
          def: '',
          sm: '当前页'
        }, {
          name: 'total',
          style: 'Number',
          def: '',
          sm: '总页数'
        }, {
          name: 'page_size',
          style: 'Number',
          def: '',
          sm: '每页条数'
        }, {
          name: 'page-change',
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
