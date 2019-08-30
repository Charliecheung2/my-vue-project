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
                    <div class="mui-card-content-inner jiesuan">
                        <div class="left">
                            <p>总计（不含运费）</p>
                            <p>已勾选商品 0 件， 总价¥0</p>
                        </div>
                        <mt-button type="danger">结算</mt-button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import numbox from "../subcomponents/cart_numberbox.vue"

    export default {
        data() {
            return {
                cart: []
            }
        },
        methods: {},
        components: {
            numbox
        }
    }
</script>

<style lang="scss" scoped>
    .cart-container {
        background-color: #eee;
        overflow: hidden;

        .goods-list {
            .mui-card-content-inner {
                display: flex;
                align-items: center;
            }

            img {
                width: 60px;
                height: 60px;
            }

            h1 {
                font-size: 13px;
            }

            .info {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .price {
                    color: red;
                    font-weight: bold;
                }
            }
        }
    }
    .jiesuan{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
