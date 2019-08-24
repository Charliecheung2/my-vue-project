<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item, idx) in newsList" :key="idx">
                <router-link :to="'/home/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left"
                         :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>
                            <span>{{item.add_time|dateFormat}}</span><span>点击：{{item.clicked}}次</span></p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from "mint-ui";

    export default {
        data() {
            return {
                newsList: []
            }
        },
        created() {
            this.getNewsList();
        },
        methods: {
            getNewsList() {
                this.$http.get('api/getnews').then(result => {
                    if (result.body.status === 1) {
                        let newArr = JSON.parse(result.body.news);
                        this.newsList = newArr;
                    } else {
                        Toast('获取新闻列表失败！');
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mui-table-view {
        li {
            h1 {
                font-size: 14px
            }

            .mui-ellipsis {
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>
