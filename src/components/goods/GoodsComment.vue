<template>
    <div>
        <h3></h3>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                id:this.$route.params.id,
                comments:[]
            }
        },
        created(){
            this.getGoodsComment()
        },
        methods:{
            getGoodsComment(){
                this.$http.get('api/getgodcom?godId=0&pageIdx=1').then(result=>{
                    if(result.body.status===1){
                        this.comments=result.body.comments
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
