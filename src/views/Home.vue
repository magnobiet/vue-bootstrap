<template>

	<div class="home">
		<img src="../assets/logo.png" alt="Vue logo">
		<HelloWorld :msg="message" />
	</div>

</template>

<script>

	import HelloWorld from '@/components/HelloWorld';

	export default {
		name: 'home',
		components: {
			HelloWorld
		},
		computed: {
			message: {
				get() {
					return this.$gettext('Welcome to Your Vue.js App');
				}
			}
		}
	};

</script>
