<template>
  <div class="row mom">
    <h3>
      提示
    </h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6">
        <FButton @click="info" color="info">消息</FButton>
        <FButton @click="success" color="success">成功</FButton>
        <FButton @click="warning" color="warning">警告</FButton>
        <FButton @click="error" color="red">错误</FButton>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="javascript">
          this.$message.info('你点击的info')
          this.$message.success('你点击的success')
          this.$message.warning('你点击的warning')
          this.$message.error('你点击的error')
        </highlight-code>
      </div>
    </div>
    <br>
    <p><b>标题的提示</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6">
        <FButton @click="info_fun" color="info">点击</FButton>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="javascript">
          this.$message.info({
            title: 'Hello World',
            message: '点击后10秒后消失',
            time: '10000'
          })
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
          name: 'message',
          style: 'String',
          def: '',
          sm: '消息'
        }, {
          name: 'time',
          style: 'Number',
          def: '3000',
          sm: '延迟时间'
        }],
        input: 'input'
      }
    },
    props: {},
    mounted () {
    },
    methods: {
      error () {
        this.$message.error('你点击的error')
      },
      info () {
        this.$message.info('你点击的info')
      },
      success () {
        this.$message.success('你点击的success')
      },
      warning () {
        this.$message.warning('你点击的warning')
      },
      info_fun () {
        this.$message.info({
          title: 'Hello World',
          message: '点击后10秒后消失',
          time: '10000'
        })
      }
    }
  }
</script>
