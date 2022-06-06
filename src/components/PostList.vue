<template>
	<div>
		<h3>Список:</h3>
		<PostItem v-for="post in posts" :key="post.id" v-bind:post="post">

		</PostItem>
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


<style scoped>
.post {
	border: 3px solid teal;
	margin-bottom: 15px;
}
</style>