<template>
  <div class="fheader" id="fheader">
    <div class="logo">
      <p>
        <img src="../../assets/forver.png" class="img" alt="forver">
      </p>
      Forver Beta 0.0.5
    </div>
    <div class="aMain">
      <a href="javascript:;" v-for="(item, i) in data" @click="pathEvent(i)">
        {{item.text}}
        <i class="fa-facebook fa-spin i" v-if="item.path === $route.path"></i>
      </a>
    </div>
    <div class="logo">
      &copy; 2017.8
      <p style="padding-top: 10px">
        <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=78bb610e9896abeca13c06110fe9bb15fae84e413a27d2bdd8f222980855a71d"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png"
                                                                                                                                        alt="Forver" title="Forver"></a>
      </p>
      <p>
        <a target="_blank" href="https://github.com/nesfe/forver "><i class="fa-github-alt"></i> Star</a>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        data: [
          {
            text: '首页',
            path: '/',
            show: false
          },
          {
            text: '安装',
            path: '/Install',
            show: false
          },
          {
            text: '开始',
            path: '/Start',
            show: false
          },
          {
            text: 'Accordion',
            path: '/Accordion',
            show: false
          },
          {
            text: 'AccordionPanel',
            path: '/AccordionPanel',
            show: false
          },
          {
            text: 'Alert',
            path: '/Alert',
            show: false
          },
          {
            text: 'Blockquote',
            path: '/Blockquote',
            show: false
          },
          {
            text: 'Breadcrumb',
            path: '/Breadcrumb',
            show: false
          },
          {
            text: 'Button',
            path: '/Button',
            show: false
          },
          {
            text: 'ButtonDropdown',
            path: '/ButtonDropdown',
            show: false
          },
          {
            text: 'ButtonGroup',
            path: '/ButtonGroup',
            show: false
          },
          {
            text: 'Checkbox',
            path: '/Checkbox',
            show: false
          },
          {
            text: 'CheckboxGroup',
            path: '/CheckboxGroup',
            show: false
          },
          {
            text: 'Form',
            path: '/Form',
            show: false
          },
          {
            text: 'FormGroup',
            path: '/FormGroup',
            show: false
          },
          {
            text: 'Input',
            path: '/Input',
            show: false
          },
          {
            text: 'InputGroup',
            path: '/InputGroup',
            show: false
          },
          {
            text: 'InputGroupAddon',
            path: '/InputGroupAddon',
            show: false
          },
          {
            text: 'InputGroupBtn',
            path: '/InputGroupBtn',
            show: false
          },
          {
            text: 'Label',
            path: '/Label',
            show: false
          },
          {
            text: 'MultiSelect',
            path: '/MultiSelect',
            show: false
          },
          {
            text: 'Pagination',
            path: '/Pagination',
            show: false
          },
          {
            text: 'Panel',
            path: '/Panel',
            show: false
          },
          {
            text: 'Progress',
            path: '/Progress',
            show: false
          },
          {
            text: 'Radio',
            path: '/Radio',
            show: false
          },
          {
            text: 'RadioGroup',
            path: '/RadioGroup',
            show: false
          },
          {
            text: 'Select',
            path: '/Select',
            show: false
          },
          {
            text: 'Spinner',
            path: '/Spinner',
            show: false
          },
          {
            text: 'Switch',
            path: '/Switch',
            show: false
          },
          {
            text: 'Table',
            path: '/Table',
            show: false
          },
          {
            text: 'TabPane',
            path: '/TabPane',
            show: false
          },
          {
            text: 'Tabs',
            path: '/Tabs',
            show: false
          },
          {
            text: 'TagsInput',
            path: '/TagsInput',
            show: false
          },
          {
            text: 'Textarea',
            path: '/Textarea',
            show: false
          },
          {
            text: 'Message',
            path: '/Message',
            show: false
          },
          {
            text: 'Tooltips',
            path: '/Tooltips',
            show: false
          }
        ],
        id: -1
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      pathEvent (i) {
        if (this.id !== -1) this.data[this.id].show = false
        this.id = i
        this.data[i].show = true
        this.$router.push(this.data[i].path)
      },
      init () {
        window.jQuery('#fheader').height(window.jQuery(window).height())
        let Forver = {
          cursorcolor: '#aaaaaa',
          cursorwidth: '5px',
          cursorborder: '0px',
          cursorborderradius: '0px'
        }
        window.jQuery('#fheader').niceScroll(Forver)
        window.onresize = function () {
          window.jQuery('#fheader').height(window.jQuery(window).height())
        }
      }
    }
  }
</script>

