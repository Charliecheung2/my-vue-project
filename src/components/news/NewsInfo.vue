<template>
    <div class="newsinfo-container">
        <h3 class="title">{{news.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{news.add_time|dateFormat}}</span>
            <span>点击：{{news.clicked}}次</span>
        </p>
        <hr>
        <div class="content" v-html="news.content">
        </div>
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    import comment from '../subcomponents/Comment.vue'
    export default {
        data() {
            return {
                id: this.$route.params.id,
                news: ""
            }
        },
        created() {
            this.getNewsInfo();
        },
        methods: {
            getNewsInfo() {
                this.$http.get('api/getnewsdetail?newsId=' + this.id).then(result => {
                    if (result.body.status === 1) {
                        this.news = result.body.news;
                    } else {
                        Toast('获取失败')
                    }
                })
            }
        },
        components:{
            'comment-box':comment
        }
    }
</script>

<style lang="scss" scoped>
    .newsinfo-container {
        padding: 0 4px;

        .title {
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }

        .subtitle {
            display: flex;
            justify-content: space-between;
            font-size: 13px;
            color: #226aff;
        }

        .content {

        }
    }
</style>
