<template>
	<div>
		<h4>Список пользователей</h4>
		<PostItem v-for="post in posts" :key="post.id" :post="post"></PostItem>
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

</style>
