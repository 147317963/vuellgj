<template>
    <header class="pageHeader">
        <div class="left-btn" @click="$router.push('/')">
            <a class="backBtn"><i class="iconfont icon-back2"></i>
                <span>返回</span>
            </a>
        </div>
        <div class="pageHeader-title" v-text="title"></div>
        <div class="right-btn">
            <div class="page-header-btn">
                <span>90.30</span> <i class="iconfont icon-caidan" @click="show=true"></i>
            </div>
        </div>
        <right :show="show" @changeShow="prentShow"></right>
    </header>
</template>

<script>
    import right from '@/components/right.vue';
    export default {
        props: {
            // 显示
            title: {
                type: [String],
                // default:0 //0 = 首页没登录 1 = 首页登录  2 = 个人中心  3 = 返回界面
            }
        },
        name: "top",
        data() {
            return {
                show:false,
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
    .pageHeader {
        background-color: #d54a5b;
        color: #fff;
    }

    .pageHeader {
        -ms-flex-align: center;
        align-items: center;
        box-sizing: border-box;
        width: 100%;
        height: 12vw;
        line-height: 1;
        margin: 0;
        white-space: nowrap;
        z-index: 1800;
        position: static;
    }
    .pageHeader .left-btn, .pageHeader .right-btn {
        height: 12vw;
        font-size: 3.73333vw;
        line-height: 12vw;
        position: absolute;
        top: 0;
    }
    .pageHeader .left-btn {
        left: 1.33333vw;
    }
    .pageHeader .backBtn {
        font-size: 3.73333vw;
    }
    .pageHeader .backBtn i {
        font-size: 4vw;
    }
    .pageHeader .backBtn {
        font-size: 3.73333vw;
    }
    .pageHeader .pageHeader-title {
        font-size: 4.53333vw;
        height: 100%;
        line-height: 12vw;
        text-align: center;
    }
    .pageHeader .right-btn {
        right: 1.33333vw;
    }
    .pageHeader .page-header-btn {
        font-size: 3.73333vw;
    }
    .pageHeader .page-header-btn i {
        font-size: inherit;
    }

</style>