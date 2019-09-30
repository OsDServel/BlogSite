Vue.component('blog-post', {
	props: ['blogpost'],
	template: `<div id="singleBlogPost">
				<h2>{{ blogpost.title }}</h2>
				<h3>{{ blogpost.name }}</h3>
				<h4>{{ blogpost.date }}</h4>
				<p>{{ blogpost.content }}</p>	
			</div>`,
})

var blogVue= new Vue({
	el: '#blogPosts',
	data: {
		posts: [
		{title: 'First Post', name: 'Nimish', date: 'May 16, 2019', content: 'This is the content of my very interesting first post.'},
		{title: 'Second Post', name: 'Nimish', date: 'May 17, 2019', content: 'This is the content of my very interesting second post. I hope you like it.'}
		]
	}
})

var postBlogVue= new Vue({
	el: '#blogPostCreation',
	data: {
		title: '',
		username: '',
		date: '',
		content: '',
	},
	methods: {
		publishPost: function(){
			var newPost= {
				title: this.title,
				username: this.username,
				date: this.date,
				content: this.content,
			}
			blogVue.posts.push(newPost)
			this.title= ''
			this.username= ''
			this.date= ''
			this.content= ''

		}		
	}
})