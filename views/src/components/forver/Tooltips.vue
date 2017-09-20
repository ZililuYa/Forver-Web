<template>
  <div class="row mom">
    <h3>
      工具提示
    </h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi type1 pt18">
      <div class="col-lg-6">
        <FButton v-FTooltips="'您鼠标放在我的上面'">FTooltips</FButton>
      </div>
      <div class="col-lg-12">
        <highlight-code lang="html">
          &lt;FButton v-FTooltips="'您鼠标放在我的上面'">FTooltips&lt;/FButton>
        </highlight-code>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: []
      }
    },
    props: {},
    mounted () {
    },
    methods: {}
  }
</script>
