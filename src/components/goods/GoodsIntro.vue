<template>
    <div class="intro-container">
        <h3>{{good.intro}}</h3>
        <img :src="item" alt="" v-for="item in img" :key="item">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id,
                good: {},
                img: []
            }
        },
        created() {
            this.getGoodsIntro()
        },
        methods: {
            getGoodsIntro() {
                this.$http.get('api/getgoddetail?godId=' + this.id).then(result => {
                    if (result.body.status === 1) {
                        this.img = result.body.god.imgIntro
                        this.good = result.body.god
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .intro-container {
        padding: 0;
    }

    h3 {
        font-size: 15px;
        text-align: center;
        color: cyan;
    }

    img {
        width: 100%;
        padding: 0;
        margin: 0;
    }
</style>
