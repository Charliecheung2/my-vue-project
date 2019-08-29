<template>
    <div>
        <mt-swipe :auto="4000" :show-indicators="false">
            <mt-swipe-item v-for="item in swipeList" :key="item">
                <img :src="item" alt="" :class="{full:isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        props:["swipeList", "isfall"],
        data(){
            return{
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;
        .mint-swipe-item {
            text-align: center;
            img {
                /*width: 100%;*/
                height: 100%;
            }
        }
    }
    .full{
        width:100%;
    }
</style>
