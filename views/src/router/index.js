import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/hello'
import install from '@/components/install'
import start from '@/components/start'
import Accordion from '@/components/forver/Accordion.vue'
import AccordionPanel from '@/components/forver/AccordionPanel.vue'
import Alert from '@/components/forver/Alert.vue'
import Blockquote from '@/components/forver/Blockquote.vue'
import Breadcrumb from '@/components/forver/Breadcrumb.vue'
import Button from '@/components/forver/Button.vue'
import ButtonDropdown from '@/components/forver/ButtonDropdown.vue'
import ButtonGroup from '@/components/forver/ButtonGroup.vue'
import Checkbox from '@/components/forver/Checkbox.vue'
import CheckboxGroup from '@/components/forver/CheckboxGroup.vue'
import Form from '@/components/forver/Form.vue'
import FormGroup from '@/components/forver/FormGroup.vue'
import Input from '@/components/forver/Input.vue'
import InputGroup from '@/components/forver/InputGroup.vue'
import Label from '@/components/forver/Label.vue'
import MultiSelect from '@/components/forver/MultiSelect.vue'
import Pagination from '@/components/forver/Pagination.vue'
import Panel from '@/components/forver/Panel.vue'
import Progress from '@/components/forver/Progress.vue'
import Radio from '@/components/forver/Radio.vue'
import Select from '@/components/forver/Select.vue'
import Spinner from '@/components/forver/Spinner.vue'
import Switch from '@/components/forver/Switch.vue'
import Table from '@/components/forver/Table.vue'
import Tabs from '@/components/forver/Tabs.vue'
import TagsInput from '@/components/forver/TagsInput.vue'
import Textarea from '@/components/forver/Textarea.vue'
import message from '@/components/forver/message.vue'
import Tooltips from '@/components/forver/Tooltips.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'hello',
      component: hello
    },
    {
      path: '/Install',
      name: 'Install',
      component: install
    },
    {
      path: '/Tooltips',
      name: 'Tooltips',
      component: Tooltips
    },
    {
      path: '/Message',
      name: 'Message',
      component: message
    },
    {
      path: '/Textarea',
      name: 'Textarea',
      component: Textarea
    },
    {
      path: '/TagsInput',
      name: 'TagsInput',
      component: TagsInput
    },
    {
      path: '/Tabs',
      name: 'Tabs',
      component: Tabs
    },
    {
      path: '/TabPane',
      name: 'TabPane',
      component: Tabs
    },
    {
      path: '/Table',
      name: 'Table',
      component: Table
    },
    {
      path: '/Switch',
      name: 'Switch',
      component: Switch
    },
    {
      path: '/Spinner',
      name: 'Spinner',
      component: Spinner
    },
    {
      path: '/Select',
      name: 'Select',
      component: Select
    },
    {
      path: '/Radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/RadioGroup',
      name: 'RadioGroup',
      component: Radio
    },
    {
      path: '/Progress',
      name: 'Progress',
      component: Progress
    },
    {
      path: '/Panel',
      name: 'Panel',
      component: Panel
    },
    {
      path: '/Input',
      name: 'Input',
      component: Input
    },
    {
      path: '/Pagination',
      name: 'Pagination',
      component: Pagination
    },
    {
      path: '/MultiSelect',
      name: 'MultiSelect',
      component: MultiSelect
    },
    {
      path: '/Label',
      name: 'Label',
      component: Label
    },
    {
      path: '/InputGroup',
      name: 'InputGroup',
      component: InputGroup
    },
    {
      path: '/InputGroupAddon',
      name: 'InputGroupAddon',
      component: InputGroup
    },
    {
      path: '/InputGroupBtn',
      name: 'InputGroupBtn',
      component: InputGroup
    },
    {
      path: '/FormGroup',
      name: 'FormGroup',
      component: FormGroup
    },
    {
      path: '/Start',
      name: 'Start',
      component: start
    },
    {
      path: '/Accordion',
      name: 'Accordion',
      component: Accordion
    },
    {
      path: '/AccordionPanel',
      name: 'AccordionPanel',
      component: AccordionPanel
    },
    {
      path: '/Alert',
      name: 'Alert',
      component: Alert
    },
    {
      path: '/Blockquote',
      name: 'Blockquote',
      component: Blockquote
    },
    {
      path: '/Breadcrumb',
      name: 'Breadcrumb',
      component: Breadcrumb
    },
    {
      path: '/Button',
      name: 'Button',
      component: Button
    },
    {
      path: '/ButtonDropdown',
      name: 'ButtonDropdown',
      component: ButtonDropdown
    },
    {
      path: '/ButtonGroup',
      name: 'ButtonGroup',
      component: ButtonGroup
    },
    {
      path: '/Checkbox',
      name: 'Checkbox',
      component: Checkbox
    },
    {
      path: '/CheckboxGroup',
      name: 'CheckboxGroup',
      component: CheckboxGroup
    },
    {
      path: '/Form',
      name: 'Form',
      component: Form
    }
  ]
})
