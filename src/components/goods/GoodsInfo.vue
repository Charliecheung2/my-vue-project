<template>
    <div class="goodinfo-container">
        <transition @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag"></div>
        </transition>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :swipeList="swipeList" :isfull="false"></swiper>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">{{good.name}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>¥{{good.oldPrice}}</del>&nbsp;&nbsp;销售价：<span class="now_price">¥{{good.newPrice}}</span>
                    </p>
                    <p>
                        购买数量：<numbox @getcount="getSelectedCount"
                    :max="good.quantity"></numbox>
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToCart">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{good.godNum}}</p>
                    <p>库存情况：{{good.quantity}}件</p>
                    <p>上架时间：{{good.addDate|dateFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goIntro(id)">图文详情</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    import swiper from '../subcomponents/Swiper.vue'
    import numbox from '../subcomponents/goodsinfo_numbox.vue'
    export default {
        data(){
            return{
                good:{},
                id:this.$route.params.id,
                swipeList:[],
                ballFlag:false,
                selectedCount:1
            }
        },
        created() {
            this.getGoodInfoById();
            this.getSwipeList();
        },
        methods:{
            getGoodInfoById(){
                this.$http.get('api/getgoddetail?godId='+this.id).then(result=>{
                    if(result.body.status===1){
                        this.good=result.body.god
                    }
                })
            },
            getSwipeList(){
                this.$http.get('api/getgoddetail?godId='+this.id).then(result=>{
                    if(result.body.status===1){
                        this.swipeList=result.body.god.phos
                    }
                })
            },
            goIntro(id){
                //编程式导航
                this.$router.push({name:'goodsintro', params:{id}})
            },
            goComment(id){
                //编程式导航
                this.$router.push({name:'goodscomment', params:{id}})

            },
            addToCart(){
                this.ballFlag=!this.ballFlag;
                var goodsinfo={id:this.id, count:this.selectedCount, price:this.good.newPrice, selected:true}
                this.$store.commit('addToCart', goodsinfo)
            },
            beforeEnter(el){
                el.style.transform="translate(0, 0)"
            },
            enter(el, done){
                el.offsetWidth;
                el.style.transform="translate(93px, 230px)";
                el.style.transition="all 0.5s cubic-bezier(.4, -0.3, 1, .68";
                done()
            },
            afterEnter(el){
                this.ballFlag=!this.ballFlag;
            },
            getSelectedCount(count){
                this.selectedCount=count;
                console.log("子组件传来的值"+this.selectedCount)
            }
        },
        components:{
            swiper,
            numbox
        }
    }
</script>

<style lang="scss" scoped>
.goodinfo-container{
    background-color: #eee;
    overflow: hidden;
    .mui-card{
        .mui-card-header{}
        .mui-card-content{
            .mui-card-content-inner{
                padding: 0 15px;
                .now_price{
                    color: red;
                    font-size: 15px;
                    font-weight: bold;
                }

            }
        }
        .mui-card-footer{
            display: block;
            button{
                margin: 15px 0;
            }
        }
    }
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 99;
        top:390px;
        left: 146px;
    }
}
</style>
