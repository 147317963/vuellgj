<template>
    <div class="homeHeaderCont">
        <img src="../../assets/images/login/logo-white.png">
        <div @click="show=!show">
            <i class="iconfont icon-people"></i><span class="uname"> dong1314</span>
        </div>
        <right :show="show" @changeShow="prentShow" :money="money"></right>

    </div>
</template>

<script>
    import right from '@/components/right.vue';
    export default {
        name: "navbar",
        data() {
            return {
                show:false,
                money:0,
            }
        },
        methods: {//条用方法
            prentShow(value){
                this.show = value;
            }
        },
        mounted() {//加载完毕后

        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },
        components: {//注册组件
            right,
        }
    }
</script>

<style scoped>

     .homeHeaderCont {
        /*opacity: .9;*/
        background-color: rgba(0, 0, 0, .6);
    }

     .homeHeaderCont {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 99;
        -ms-flex-align: center;
        align-items: center;
        padding: 0 2.13333vw;
        box-sizing: border-box;
    }

     .icon-people {
        font-size: 4.8vw;
    }

     .homeHeaderCont img {
        width: 25.33333vw;
        height: 12vw;
    }

     .homeHeaderCont div {
        color: #fff;
    }

     .homeHeaderCont .uname {
        font-size: 4vw;
    }

</style>