Vue.component('blogpost', {
	props: ['blogpost'],
	template: `<div id="singleBlogPost">
				<h2>{{ blogpost.title }}</h2>
				<h3>{{ blogpost.name }}</h3>
				<h4>{{ blogpost.date }}</h4>
				<p>{{ blogpost.content }}</p>	
			</div>`,
})

var blogVue= new Vue({
	el: '#blogposts',
	data: {
		posts: [
		{title: 'First Post', username: 'Nimish', date: 'May 16, 2019', content: 'This is the content of my very interesting first post.'},
		{title: 'Second Post', username: 'Nimish', date: 'May 17, 2019', content: 'This is the content of my very interesting second post. I hope you like it.'}
		]
	}
})

// blogVue.posts= []


