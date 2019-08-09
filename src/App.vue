<template>
    <div class="app-container">
<!--        header-->
        <mt-header fixed title="Vue 实战项目"></mt-header>
<!--        router-view-->
<!--        tabbar-->
<!--        <mt-tabbar>-->
<!--            <my-tab-item id="">首页</my-tab-item>-->
<!--            <my-tab-item id="">会员</my-tab-item>-->
<!--            <my-tab-item id="">购物车</my-tab-item>-->
<!--            <my-tab-item id="">4</my-tab-item>-->
<!--        </mt-tabbar>-->
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item mui-active" href="#tabbar">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">消息</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-contact">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">通讯录</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">设置</span>
            </a>
        </nav>
        <h1>123</h1>
    </div>
</template>

<script>
</script>


<style lang="scss" scoped>
    .app-container{
        padding-top: 40px;
    }
</style>
