import { createApp } from 'vue'
import App from './App.vue'
// import Vant from 'vant';
import 'amfe-flexible'
// console.log(Vant,'Vant')
import { Button } from 'vant';
import { Cell } from 'vant';
import { NavBar } from 'vant';
import { Popup } from 'vant';
import { Picker } from 'vant';
import { Field } from 'vant';

import store from './store/index'
import router from './router/index'

const app =createApp(App)
app.use(Button)
app.use(Cell)
app.use(NavBar)
app.use(Popup)
app.use(Picker)
app.use(Field)
app.use(router)
app.use(store)
app.mount('#app')
// createApp(App).use(Vant).mount('#app')
