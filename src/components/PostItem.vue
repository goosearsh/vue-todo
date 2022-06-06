<template>
	<div class="post">
		<div class="post__title"> <span>Название:</span> {{ post.title }} </div>
		<div class="post__body"> <span>Текст:</span> {{ post.body }} </div>
	</div>

</template>


<script>
export default {
	props: {
		post: {
			type: Object,
			required: true,
		}
	}
}

</script>


<style scoped>
.post {
	padding: 15px;
}

.post span {
	font-weight: 700;
	font-size: 18px;
}
</style>

