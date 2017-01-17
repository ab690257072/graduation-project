<template>
	<h2>hello world!</h2>
	<h3>{{msg}}</h3>
	<button class="btn" @click="change">try it!</button>
	<my-menu></my-menu>
</template>
<script>
	import Menu from './components/Menu.vue';

	export default {
		data() {
			return {
				msg: 'zhao'
			};
		},
		methods: {
			change() {
				this.msg = 'msg is changed';
			}
		},
		components: {
			'my-menu': Menu
		}
	};
</script>
<style>
	.btn {
		padding: .3em .8em;
		border: 1px solid deepskyblue;
		background: #fff;
		border-radius: .2em;
		color: deepskyblue;
		font-size: 125%;
		line-height: 1.5;
		outline: none;
	}
</style>
