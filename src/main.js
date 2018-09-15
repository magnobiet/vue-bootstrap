import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import GetTextPlugin from 'vue-gettext';
import translations from './translations/translations.json';

import './registerServiceWorker';

Vue.use(GetTextPlugin, {
	availableLanguages: {
		'en_US': 'American English',
		'pt_BR': 'Português Brasileiro'
	},
	defaultLanguage: 'en_US',
	translations
});

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
