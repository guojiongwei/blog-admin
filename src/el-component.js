import Vue from 'vue';
import {
  Pagination,
  Dialog,
  Dropdown,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  Input,
  Switch,
  Select,
  Option,
  Button,
  Table,
  TableColumn,
  DatePicker,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tag,
  Alert,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  MessageBox,
  Message,
  DropdownMenu
} from 'element-ui';

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(Tooltip);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tag);
Vue.use(Alert);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(DropdownMenu)
// Vue.use(Message)

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$message = Message;