<template>
	<button class="button">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'GlobalButton'
}
</script>

<style lang="scss" scoped>
.button {
	background: none;
	padding: 10px 15px;
	color: teal;
	border: 1px solid teal;
}
</style>