<template>
	<form class="form" @submit.prevent="createPost">
		<h4>Создание поста</h4>
		<input v-model="post.title" class="form__title" type="text" placeholder="Введите название">
		<input v-model="post.body" class="form__body" type="text" placeholder="Введите описание">
		<button class="form__btn">Создание поста</button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			post: {
				title: '',
				body: '',
			}
		}
	},
	methods: {
		createPost() {
			this.post.id = Date.now();
			this.$emit('create', this.post);
			this.post = {
				title: '',
				body: '',
			}
		}
	}
}
</script>



<style lang="scss" scoped>
.form {
	display: flex;
	flex-direction: column;

	&__title {
		width: 100%;
		border: 1px solid teal;
		padding: 10px 15px;
		margin-top: 15px;
	}

	&__body {
		width: 100%;
		border: 1px solid teal;
		padding: 10px 15px;
		margin-top: 15px;
	}

	&__btn {
		align-self: flex-end;
		margin-top: 15px;
		background: none;
		padding: 10px 15px;
		color: teal;
		border: 1px solid teal;
	}
}
</style>
