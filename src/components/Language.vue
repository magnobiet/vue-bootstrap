<template>

	<select v-model="$language.current" name="language">

		<option v-for="(language, key) in $language.available" :key="key" :value="key">
			{{ language }}
		</option>

	</select>

</template>

<script>

	export default {
		name: 'Language'
	};

</script>
