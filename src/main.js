
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserEdit,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserEdit,faTrashAlt)

//Vue.component('font-awesome-icon', FontAwesomeIcon)

import 'bootstrap/dist/css/bootstrap.min.css'
import 'C:/Users/David/prograweb/src/assets/css/core.css'


createApp(App)
.use(router)
.component('fas',FontAwesomeIcon)
.mount('#app')



