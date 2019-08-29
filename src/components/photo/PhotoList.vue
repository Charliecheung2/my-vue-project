<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" v-for="(item, idx) in photolist" :key="item" @click="getPhotoListByType(item)">
                        {{photolist[idx]}}
                    </a>
                </div>
            </div>
        </div>
        <ul class="photo-list">
            <li v-for="item in list" :key="item">
                <img v-lazy="item">
                <div class="info">
                    <h1 class="info-title">图片简介</h1>
                    <div class="info-body">图片简介正文图片简介正文图片简介正文图片简介正文图片简介正文图片简介正文图片简介正文图片
                        简介正文图片简介正文图片简介正文图片简介正文图片简介正文图片简介正文</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'

    export default {
        data() {
            return {
                photolist: [],
                list:[],//图片列表的数组
                type:''
            }
        },
        created() {
            this.getPhotolist();
            this.getPhotoListByType('清纯');
        },
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005
            });
        },
        methods: {
            getPhotolist() {
                this.$http.get('api/getphotypes').then(function (result) {
                    if (result.body.status === 1) {
                        this.photolist = result.body.types
                    }
                })
            },
            getPhotoListByType(type){
                this.$http.get('api/getpho?pageIdx=1&type='+type).then(result=>{
                    if(result.body.status===1){
                        this.list=result.body.phos[0].phos;
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    * {
        touch-action: pan-y;
    }

    .photo-list{
        list-style: none;
        margin: 0;
        padding: 0 10px;
        li{
            background-color: #ccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 9px #999;
            position: relative;
            img{
                width: 100%;
                vertical-align: middle;
            }
            img[lazy="loading"]{
                width: 40px;
                height:300px;
                margin:auto;
            }
            .info{
                color: white;
                text-align: left;
                position: absolute;
                bottom:0;
                background-color: rgba(0,0,0,0.4);
                max-height: 84px;
                .info-title{
                    font-size: 14px;
                }
                .info-body{
                    font-size: 13px;
                }
            }
        }
    }
</style>
