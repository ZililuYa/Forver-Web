<template>
  <div class="row mom">
    <h3>按钮下拉</h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi pt18 type1 not">
      <FButtonDropdown :menu="menu">下拉菜单</FButtonDropdown>
      <highlight-code lang="html">
        &lt;FButtonDropdown :menu="menu"&gt;下拉菜单&lt;/FButtonDropdown&gt;
        &lt;script&gt;
        export default {
          data () {
            return {
              menu: ['首页', '新闻', 'divider', '列表']
            }
          }
        }
        &lt;/script&gt;
      </highlight-code>
    </div>

    <br>
    <p><b>type</b></p>
    <div class="yanshi pt18 type1 not">
      <FButtonDropdown :menu="menu" type="blue">blue</FButtonDropdown>
      <FButtonDropdown :menu="menu" type="info">info</FButtonDropdown>
      <FButtonDropdown :menu="menu" type="purple">purple</FButtonDropdown>
      <FButtonDropdown :menu="menu" type="success">success</FButtonDropdown>
      <FButtonDropdown :menu="menu" type="danger">danger</FButtonDropdown>
      <FButtonDropdown :menu="menu" type="black">black</FButtonDropdown>
      <FButtonDropdown :menu="menu" type="warning">warning</FButtonDropdown>
      <FButtonDropdown :menu="menu" type="red">red</FButtonDropdown>
      <highlight-code lang="html">
        &lt;FButtonDropdown type="blue"&gt;blue&lt;/FButtonDropdown&gt;
      </highlight-code>
    </div>
    <br>
    <p><b>icon</b></p>
    <div class="yanshi pt18 type1 not">
      <FButtonDropdown :menu="menu" type="purple" icon="fa-star-o" :spacing="false">star</FButtonDropdown>
      <highlight-code lang="html">
        &lt;FButtonDropdown icon="fa-star-o" :spacing="false"&gt;star&lt;/FButtonDropdown&gt;
      </highlight-code>
    </div>
    <br>
    <p><b>menu-click</b></p>
    <div class="yanshi pt18 type1 not">
      <p><code>{{m}}</code></p>
      <FButtonDropdown :menu="menu" type="purple" icon="fa-star-o" :spacing="false" @menu-click="menuClick">star</FButtonDropdown>
      <highlight-code lang="html">
        &lt;FButtonDropdown @menu-click="menuClick" :spacing="false"&gt;star&lt;/FButtonDropdown&gt;
      </highlight-code>
    </div>
    <br>
    <h3>属性</h3>
    <hr>
    <FTable :bordered="true" :head="head" :body="body"></FTable>
  </div>
</template>
<script>
  /**
   *
   * */
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
          name: 'menu',
          style: 'Array',
          def: '[ ]',
          sm: '下拉菜单，divider 为间隔线'
        }, {
          name: 'type',
          style: 'String',
          def: 'white',
          sm: '类型'
        }, {
          name: 'spacing',
          style: 'Boolean',
          def: 'true',
          sm: '是否有间距'
        }, {
          name: 'icon',
          style: 'String',
          def: 'fa-angle-down',
          sm: '图标'
        }, {
          name: 'click_drop',
          style: 'Boolean',
          def: 'true',
          sm: '如果设置false，只能通过点击图标触发下拉'
        }, {
          name: 'menu-click',
          style: 'Event',
          def: '',
          sm: '菜单点击事件'
        }, {
          name: 'click',
          style: 'Event',
          def: '',
          sm: '按钮点击事件'
        }],
        menu: ['首页', '新闻', 'divider', '列表'],
        m: ''
      }
    },
    props: {},
    mounted () {
    },
    methods: {
      menuClick (m) {
        this.m = m
      }
    }
  }
</script>
