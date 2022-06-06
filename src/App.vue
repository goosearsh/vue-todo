<template>

	<div class="app">

		<PostForm @create="createPost" />
		<PostList :posts="posts" />




	</div>

</template>


<script>
import PostForm from './components/PostForm';
import PostList from './components/PostList';

export default {
	components: {
		PostList,
		PostForm,
	},
	data() {
		return {
			posts: [
				{ id: 1, title: 'Название 1', body: 'Тело 1 ' },
				{ id: 2, title: 'Название 2', body: 'Тело 2' },
				{ id: 3, title: 'Название 3', body: 'Тело 3' },
				{ id: 4, title: 'Название 4', body: 'Тело 4' },
			],
			title: '',
			body: '',
		}

	},
	methods: {
		createPost(post) {
			this.posts.push(post)
		}
	}
}
</script>



<style>
</style>
