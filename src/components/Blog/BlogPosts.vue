<template>
    <div class="post-box">
        <span class="post-views">{{ views }}</span>
        <h3 class="post-title">{{ title | reversing }}</h3>
        <span class="post-date">{{ date }}</span>
        <p class="post-content" v-bold>
            {{ content | shorten(20, " Read more...") | reversing) }}
        </p>
        <div class="row">
            <div class="col-sm-6">
                <span class="post-author">{{ author }}</span>
            </div>
            <div class="col-sm-6 text-right">
                <span class="post-category">{{ category | uppercase }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["views", "title", "content", "category", "author", "date"],
    name: "post"
};
</script>

<style lang="scss" scoped>
.post-box {
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    position: relative;
    text-align: left;
    margin: 15px 0px;
    .post-views {
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: #46a659;
        color: #fff;
        font-weight: bold;
        text-align: center;
        border-radius: 4px;
        padding: 1px 5px;
    }
    .post-title {
        font-weight: bold;
        color: #333;
    }
    .post-date {
        display: block;
        padding: 0 0 5px;
        color: #888;
        font-size: 14px;
    }
    .post-content {
        line-height: 1.8;
        color: #666;
    }
    .post-author {
        background-color: #607d8b;
        padding: 6px 10px;
        border-radius: 4px;
        color: #fff;
    }
    .post-category {
        background-color: #e20ea3;
        padding: 6px 10px;
        border-radius: 4px;
        color: #fff;
    }
}
</style>
