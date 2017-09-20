<template>
  <div class="row mom">
    <h3>开始</h3>
    <hr>
    <highlight-code lang="javascript">
      import Vue from 'vue'
      import App from './App'
      import router from './router'
      import F from 'forver'
      import 'forver/dist/css/forver.min.css'

      Vue.use(F)

      /* eslint-disable no-new */
      new Vue({
        el: '#app',
        router,
        template: '&lt;App/>',
        components: {App}
      })
    </highlight-code>
    <br>
    <p>启动开发模式</p>
    <highlight-code lang="bash">
      # 执行如下命令后访问 localhost:8080
      $ npm run dev
    </highlight-code>
    <br>
    <p>编译：</p>
    <highlight-code lang="bash">
      $ npm run build
    </highlight-code>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  }
}
</script>
