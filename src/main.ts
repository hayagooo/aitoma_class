import { createApp, inject, provide, ref } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import './main.css';

import store from './store';
import moment from 'moment';

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store);

app.config.globalProperties.loweCase = (value: string) => {
  return value.toLowerCase();
}

app.config.globalProperties.checkIsTheTime = (time: string, day: string) => {
  const currentDay = ref(new Date().toLocaleString('en', { weekday: 'long' }));
  const startTime = time.split(' - ')[0];
  const endTime = time.split(' - ')[1];
  const currentTime = new Date().toLocaleString('en', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });
  console.log('currentTime', currentTime);
  if (currentTime >= startTime && currentTime <= endTime && currentDay.value === day) {
    return true;
  }
  return false;
}

app.config.globalProperties.routerPush = (url: string) => {
  router.replace({name: url});
}

app.config.globalProperties.formatDateTimeNotification = (dateTime: string) => {
  return moment(dateTime).fromNow();
}

app.config.globalProperties.changeSelectedLanguage = (language: number) => {
  store.commit('setSelectedLanguage', language);
  localStorage.setItem('selectedLanguage', language.toString());
}

router.isReady().then(() => {
  app.mount('#app');
});