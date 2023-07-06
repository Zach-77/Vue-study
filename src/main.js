import { createApp} from 'vue'

//导入ElementPlus框架和里面的css样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//导入vue-axios模块
import VueAxios from 'vue-axios'
import axios from 'axios'

//router
//import router from './router'

import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(VueAxios, axios)
//app.use(router)

app.mount('#app')