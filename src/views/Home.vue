<template>

	<div class="home">

		<img src="@/assets/img/logo.png" alt="Vue logo">

		<div class="hello">

			<h1>{{ message }}</h1>

			<p>
				<span v-translate>For guide and recipes on how to configure / customize this project, check out the</span>
				<a v-translate href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
			</p>

			<h3 v-translate>Installed CLI Plugins</h3>

			<ul>
				<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
				<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener">pwa</a></li>
				<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
				<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha" target="_blank" rel="noopener">unit-mocha</a></li>
				<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-nightwatch" target="_blank" rel="noopener">e2e-nightwatch</a></li>
			</ul>

			<h3 v-translate>Essential Links</h3>

			<ul>
				<li><a v-translate href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
				<li><a v-translate href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
				<li><a v-translate href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
				<li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
			</ul>

			<h3 v-translate>Ecosystem</h3>

			<ul>
				<li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
				<li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
				<li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
				<li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
				<li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
			</ul>

		</div>

	</div>

</template>

<style lang="scss" scoped>

	h3 {
		margin: 40px 0 0;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}

</style>

<script>

	export default {
		name: 'home',
		computed: {
			message: {
				get() {
					return this.$gettext('Welcome to Your Vue.js App');
				}
			}
		}
	};

</script>
