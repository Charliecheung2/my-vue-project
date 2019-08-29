<template>
    <div class="cart-container">
        <div class="goods-list">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch></mt-switch>
                        <img src="" alt="">
                        <div class="info">
                            <h1>小米</h1>
                            <p>
                                <span class="price">2199</span>
                                <numbox></numbox>
                                <a href="#">删除</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="goods-list">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import numbox from "../subcomponents/cart_numberbox.vue"
    export default {
    components:{
        numbox
    }
    }
</script>

<style lang="scss" scoped>
    .cart-container{
        background-color: #eee;
        overflow: hidden;
        .goods-list{
            .mui-card-content-inner{
                display: flex;
                align-items: center;
            }
            img{
                width:60px;
                height: 60px;
            }
            h1{
                font-size: 13px;
            }
            .info{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .price{
                    color: red;
                    font-weight: bold;
                }
            }
        }
    }
</style>
