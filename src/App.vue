
<template>

	<div id="app">

		<language />

		<div id="nav">
			<router-link v-translate to="/">Home</router-link> |
			<router-link v-translate to="/about">About</router-link>
		</div>

		<router-view />

	</div>

</template>

<style src="@/assets/styles/app.scss" lang="scss"></style>

<script>

	import Language from '@/components/Language';

	export default {
		name: 'App',
		components: {
			Language
		}
	};

</script>
