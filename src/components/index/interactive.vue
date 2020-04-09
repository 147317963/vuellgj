<template>
    <div class="hotMenuContainer">
        <div class="titCont">
            <i class="iconfont icon-navicon-hdbk"></i>
        </div>
        <div class="linkCont">
            <div class="leftBox">
                <a><img src="../../assets/images/index/bg-hot-menu-1.jpg"></a>
            </div>
            <div class="rightBox">
                <a><img src="../../assets/images/index/bg-hot-menu-2.png"></a>
                <a><img src="../../assets/images/index/bg-hot-menu-6.png"></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "interactive",
        data() {
            return {}
        },
        methods: {//条用方法
        },
        mounted() {//加载完毕后
        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },
        components: {//注册组件
        }
    }
</script>

<style scoped>
    .hotMenuContainer {
        border-top: 1px solid #e6e6e6;
    }

    .hotMenuContainer {
        padding: 0 2.13333vw 2.13333vw;
    }
    .hotMenuContainer .titCont {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        line-height: 10.66667vw;
    }
    .hotMenuContainer .titCont i:first-of-type {
        color: #d54a5b;
    }
    .hotMenuContainer .titCont i:first-of-type {
        font-size: 5.6vw;
        margin-right: 1.33333vw;
    }

     .hotMenuContainer .linkCont {
        width: 100%;
        overflow: hidden;
    }
     .hotMenuContainer .titCont span {
        font-size: 3.66667vw;
    }
     .hotMenuContainer .titCont span {
        color: #666;
    }
    .hotMenuContainer .linkCont .leftBox {
        width: 51.2vw;
        height: 32vw;
        float: left;
    }
     .hotMenuContainer .linkCont .leftBox a, .hotMenuContainer .linkCont .leftBox img {
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 1.33333vw;
    }
     .hotMenuContainer .linkCont .rightBox {
        width: 42.66667vw;
        height: 32vw;
        display: -ms-flexbox;
        display: flex;
        float: right;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }
    .hotMenuContainer .linkCont .rightBox a {
        display: block;
        width: 100%;
        height: 14.93333vw;
        border-radius: 1.33333vw;
        overflow: hidden;
    }
    .hotMenuContainer .linkCont .rightBox a img {
        display: block;
        width: 100%;
        height: 100%;
    }
</style>