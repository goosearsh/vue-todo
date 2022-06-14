<template>
	<div class="app">
		<PostForm @create="createPost"></PostForm>
		<PostList @delete="deletePost" :posts="posts"></PostList>
	</div>
</template>


<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
	components: { PostForm, PostList },
	data() {
		return {
			posts: [
				{ id: 1, title: "JavaScript 1", body: "Описание поста 1" },
				{ id: 2, title: "JavaScript 2", body: "Описание поста 2" },
				{ id: 3, title: "JavaScript 3", body: "Описание поста 3" },
			],
		};
	},

	methods: {
		createPost(post) {
			this.posts.push(post);
		},
		deletePost(post) {
			this.posts = this.posts.filter((p) => p.id != post.id)
		}
	},
}
</script>



<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.app {
	padding: 20px;
}
</style>
