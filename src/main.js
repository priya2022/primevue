import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import RadioButton from 'primevue/radiobutton';
import Checkbox from 'primevue/checkbox';
import Dropdown from 'primevue/dropdown';
import MultiSelect from 'primevue/multiselect';
// import 'primevue/resources/themes/saga-blue/theme.css '      //theme
// import 'primevue/resources/primevue.min.css '                //core css
import 'primeicons/primeicons.css'      
const app =createApp(App);
app.use(PrimeVue);

app.component('InputText', InputText);
app.component('Button', Button)
app.component('RadioButton', RadioButton)
app.component('Checkbox', Checkbox)
app.component('Dropdown', Dropdown)
app.component('MultiSelect', MultiSelect)

app.mount('#app')
