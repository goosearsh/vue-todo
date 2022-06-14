<template>
	<div class="post__list">
		<div v-if="posts != 0">
			<h3>Посты:</h3>
			<PostItem @delete="$emit('delete', post)" v-for="post in posts" :key="post.id" :post="post"></PostItem>
		</div>
		<h3 class="post__error" v-else>Постов нету</h3>
	</div>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
export default {
	components: { PostItem },
	props: {
		posts: {
			type: Array,
			required: true,
		}
	},

}
</script>

<style lang="scss" scoped>
.post {

	&__list {}

	&__error {
		color: red;
	}
}
</style>
