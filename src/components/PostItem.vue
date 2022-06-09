<template>
	<div class="post__item">
		<div><strong>Название: </strong> {{ post.title }} </div>
		<div><strong>Описание: </strong> {{ post.body }} </div>
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



<style>
.post__item {
	padding: 15px;
	border: 3px solid teal;
	margin-top: 15px;
}
</style>
