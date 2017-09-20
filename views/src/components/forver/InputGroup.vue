<template>
  <div class="row mom">
    <h3>
      输入组
    </h3>
    <hr>
    <br>
    <p><b>Addon</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6" style="padding-bottom: 20px">
        {{input}}
        <FInputGroup>
          <FInput v-model="input" style="margin-bottom: 0"></FInput>
          <FInputGroupAddon>@qq.com</FInputGroupAddon>
        </FInputGroup>
        <br>
        <FInputGroup size="lg" :minimal="true">
          <FInput v-model="input" style="margin-bottom: 0"></FInput>
          <FInputGroupAddon>@qq.com</FInputGroupAddon>
        </FInputGroup>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FInputGroup>
            &lt;FInput v-model="input">&lt;/FInput>
            &lt;FInputGroupAddon>@qq.com&lt;/FInputGroupAddon>
          &lt;/FInputGroup>
          &lt;FInputGroup size='lg' :minimal="true">
        </highlight-code>
      </div>
    </div>
    <br>
    <p><b>Btn</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6" style="padding-bottom: 20px">
        <FInputGroup>
          <FInput style="margin-bottom: 0" placeholder="请输入验证码"></FInput>
          <FInputGroupBtn>提交</FInputGroupBtn>
        </FInputGroup>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FInputGroup>
            &lt;FInput v-model="input">&lt;/FInput>
            &lt;FInputGroupBtn>提交&lt;/FInputGroupBtn>
          &lt;/FInputGroup>
        </highlight-code>
      </div>
    </div>
    <hr>
    <FTable :bordered="true" :head="head" :body="body"></FTable>
  </div>
</template>
<script>
  export default {
    data () {
      return {
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
          name: 'size',
          style: 'String',
          def: '',
          sm: ''
        }, {
          name: 'minimal',
          style: 'String',
          def: '',
          sm: ''
        }],
        input: '1029131145'
      }
    },
    props: {},
    mounted () {
    },
    methods: {}
  }
</script>
