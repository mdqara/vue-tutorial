<template>
    <div class="our-blog">
        <h1>{{ pageName }}</h1>
        <p>{{ pageDesc }}</p>

        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="posts-area">
                        <BlogPosts
                            v-for="post in posts"
                            :key="post.id"
                            :views="post.views"
                            :title="post.title"
                            :content="post.content"
                            :category="post.category"
                            :author="post.author"
                            :date="post.date"
                        />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="sidebar">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogPosts from "@/components/Blog/BlogPosts.vue";
import BlogSidebar from "@/components/Blog/BlogSidebar.vue";
import JsonPosts from "../JSON/blog_posts.json";

export default {
    data: function() {
        return {
            pageName: "Blog",
            pageDesc: "This is help us page",
            posts: JsonPosts
        };
    },
    name: "Blog",
    components: {
        BlogPosts,
        BlogSidebar
    }
};
</script>
