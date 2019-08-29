<template>
    <div class="goods-list">
        <router-link class="goodsitem" v-for="(item, idx) in goods" :key="idx" :to="'/home/goodsinfo/'+item.godId" tag="div">
            <img :src="item.phos[0]" alt="">
            <h1 class="title">{{item.name}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">¥{{item.newPrice}}</span>
                    <span class="old">¥{{item.oldPrice}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余{{item.quantity}}件</span>
                </p>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                goods:[]
            }
        },
        created(){
            this.getGoodsList()
        },
        methods:{
            getGoodsList(){
                this.$http.get('api/getgod?pageIdx=1').then(res=>{
                    if(res.body.status===1){
                        this.goods=res.body.gods
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    .goodsitem{
        width: 49%;
        border:1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 4px 0;
        padding: 2px;

        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
        }
        .info{
            p{
                margin: 0;
                padding: 5px;
            }
            background-color: #eee;
            .price{
                .now{
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin: 10px;
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
                font-size: 12px;
            }
        }
    }
}
</style>
