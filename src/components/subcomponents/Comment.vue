<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容（最多120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in comments" :key="item.comId">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户：{{item.username}}&nbsp;&nbsp;发表时间：{{item.comDate|dateFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content===""?'此用户很懒，什么都没有说':item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'

    export default {
        data() {
            return {
                pageIndex: 1,
                comments: [],
                msg: ''
            }
        },
        created() {
            this.getComments();
        },
        methods: {
            getComments() {
                this.$http.get('api/getnewscom?newsId=' + this.id + '&pageIdx=' + this.pageIndex).then(result => {
                    if (result.body.status === 1) {
                        this.comments = this.comments.concat(result.body.comments);
                    } else {
                        Toast('评论获取失败')
                    }
                })
            },
            getMore() {
                this.pageIndex++;
                this.getComments();
            },
            postComment() {
                if (this.msg.trim().length === 0) {
                    return Toast('评论内容不能为空')
                }
                this.$http.post('api/addnewscom?newsId=' + this.$route.params.id, {content: this.msg.trim()})
                    .then(function (result) {
                    if (result.body.status === 1) {
                        Toast("提交成功");
                        this.comments.unshift({
                            comDate: new Date(),
                            content: this.msg.trim()
                        });
                        this.content = "";
                    } else {
                        Toast('提交失败');
                    }
                })
            }
        },
        props: ["id"]
    }
</script>

<style lang="scss" scoped>
    .cmt-container {
        h3 {
            font-size: 18px;
        }

        textarea {
            font-size: 14px;
            margin: 0;
            height: 85px;
        }

        .cmt-list {
            margin: 5px 0;

            .cmt-item {
                font-size: 13px;

                .cmt-title {
                    line-height: 30px;
                    background-color: #ccc;
                }

                .cmt-body {
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>
