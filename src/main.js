import { createApp } from 'vue';
import UniswapVue from 'uniswap-vue';
import Main from './main.vue';

const app = createApp(Main);

app.use(UniswapVue);

app.mount('#app');
