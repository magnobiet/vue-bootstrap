<template>

	<div id="app">

		<select v-model="$language.current" name="language">
			<option v-for="(language, key) in $language.available" :key="key" :value="key">
				{{ language }}
			</option>
		</select>

		<div id="nav">
			<router-link v-translate to="/">Home</router-link> |
			<router-link v-translate to="/about">About</router-link>
		</div>

		<router-view />

	</div>

</template>

<style lang="scss">

	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;
		a {
			font-weight: bold;
			color: #2c3e50;
			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}

</style>
