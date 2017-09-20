<template>
  <div class="row mom">
    <h3>
      表单
    </h3>
    <hr>
    <br>
    <p><b>默认 - 自带验证</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6">
      <FForm method="GET" action="/">
        <FFormGroup title="用户名">
          <FInput name="name" minlength="6" required></FInput>
        </FFormGroup>
        <FFormGroup title="密码">
          <FInput name="pwd" type="password" minlength="6" required></FInput>
        </FFormGroup>
        <FFormGroup>
          <FButton type="submit" color="info">登录</FButton>
          <FButton type="reset">重置</FButton>
        </FFormGroup>
      </FForm>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
        &lt;FForm method="POST" action="/">
          &lt;FFormGroup title="用户名">
            &lt;FInput name="name" minlength="6" required>&lt;/FInput>
          &lt;/FFormGroup>
          &lt;FFormGroup title="密码">
            &lt;FInput name="pwd" type="password" minlength="6" required>&lt;/FInput>
          &lt;/FFormGroup>
          &lt;FFormGroup>
            &lt;FButton type="submit" color="info">登录&lt;/FButton>
            &lt;FButton type="reset">重置&lt;/FButton>
          &lt;/FFormGroup>
        &lt;/FForm>
      </highlight-code>
        <a href="https://github.com/jquery-validation/jquery-validation" target="_blank"><i class="fa-github"></i> 验证</a>
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
          name: 'method',
          style: 'String',
          def: 'GET',
          sm: '请求方式'
        }, {
          name: 'action',
          style: 'String',
          def: '/',
          sm: '请求地址'
        }]
      }
    },
    props: {},
    mounted () {
    },
    methods: {}
  }
</script>
