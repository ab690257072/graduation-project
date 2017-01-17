import Vue from 'vue';
import App from './App.vue';
import bar from './components/bar';

bar();

new Vue({
	el: 'body',
	components: {
		'app': App
	}
});