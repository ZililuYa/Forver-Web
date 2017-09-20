<template>
  <div class="row mom">
    <h3>
      引用块
    </h3>
    <hr>
    <br>
    <p><b>默认</b></p>
    <div class="yanshi type1 pt18">
      <FBlockquote>
        <p><strong>Blockquote Default</strong></p>
        <p><small>才离开没多久就开始，
            担心今天的你过得好不好，
            整个画面是你，
            想你想的睡不着，
            嘴嘟嘟那可爱的模样，
            还有在你身上香香的味道，
            我的快乐是你，
            想你想的都会笑，
            没有你在我有多难熬...
          </small>
        </p>
      </FBlockquote>
      <highlight-code lang="html">
        &lt;FBlockquote&gt;
          &lt;p&gt;&lt;strong&gt;Blockquote Default&lt;/strong&gt;&lt;/p&gt;
          &lt;p&gt;&lt;small&gt;...&lt;/small&gt;&lt;/p&gt;
        &lt;/FBlockquote&gt;
      </highlight-code>
    </div>
    <br>
    <p><b>type</b></p>
    <div class="yanshi type1 pt18">
      <div class="row">
      <div class="col-lg-6"><FBlockquote>兰亭临帖 行书如行云流水</FBlockquote></div>
      <div class="col-lg-6"><FBlockquote type="info">月下门推 心细如你脚步碎</FBlockquote></div>
      <div class="col-lg-6"><FBlockquote type="success">忙不迭 千年碑易拓 却难拓你的美</FBlockquote></div>
      <div class="col-lg-6"><FBlockquote type="warning">真迹绝 真心能给谁</FBlockquote></div>
      <div class="col-lg-6"><FBlockquote type="black">牧笛横吹 黄酒小菜有几碟</FBlockquote></div>
      <div class="col-lg-6"><FBlockquote type="purple">夕阳余晖 如你的羞怯似醉</FBlockquote></div>
      <div class="col-lg-12"><FBlockquote type="red">摹本易写 而墨香不退与你共留余味</FBlockquote></div>
      </div>
      <highlight-code lang="html">
        &lt;FBlockquote&gt;
        &lt;FBlockquote type="info"&gt;
        &lt;FBlockquote type="success"&gt;
        &lt;FBlockquote type="warning"&gt;
        &lt;FBlockquote type="black"&gt;
        &lt;FBlockquote type="purple"&gt;
        &lt;FBlockquote type="red"&gt;
      </highlight-code>
    </div>
    <br>
    <p><b>theme</b></p>
    <div class="yanshi type1 pt18">
      <FBlockquote :theme="false">
        <p>我到了这个时候还是一样，夜里的寂寞容易叫人悲伤</p>
        <p>我不敢想的太多，因为我一个人</p>
      </FBlockquote>
      <highlight-code lang="html">
        &lt;FBlockquote :theme="false"&gt;
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
    name: 'FPanel',
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
          def: 'default',
          sm: '风格'
        }, {
          name: 'theme',
          style: 'Boolean',
          def: 'true',
          sm: '主题显示'
        }]
      }
    },
    props: {},
    mounted () {
    },
    methods: {}
  }
</script>
