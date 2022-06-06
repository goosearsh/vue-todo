<template>
	<form class="form" @submit.prevent>
		<input class="form__input" placeholder="Введите заголовок" v-model="post.title">
		<input class="form__input" placeholder="Введите текст" v-model="post.body">
		<button class="form__btn" @click="createPost">Добавить </button>
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
				title: "",
				body: "",
			}
		}
	}
}


</script>


<style scoped>
.form {
	display: flex;
	flex-direction: column;
}

.form__input {
	padding: 15px 10px;
	margin-bottom: 15px;

}


.form__btn {

	padding: 15px 10px;
	align-self: flex-end;
}
</style>