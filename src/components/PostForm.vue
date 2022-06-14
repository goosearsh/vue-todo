<template>
	<form class="form" @submit.prevent="createPost">
		<h2>Создание поста:</h2>
		<input v-model="post.title" class="form__title" type="text" placeholder="Введите название">
		<input v-model="post.body" class="form__body" type="text" placeholder="Введите описание">
		<GlobalButton class="form__button">Создание поста</GlobalButton>
	</form>
</template>

<script>
export default {
	data() {
		return {
			post: {
				title: "",
				body: "",
			}
		};
	},
	methods: {
		createPost() {
			if (this.post.title != 0 && this.post.body != 0) {
				this.post.id = Date.now()
				this.$emit("create", this.post);
				this.post = {
					title: "",
					body: "",
				};
			}
			else {
				alert("Введите все данные");
			}
		}
	},
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

	&__button {
		margin-top: 15px;
		align-self: flex-end;
	}
}
</style>
