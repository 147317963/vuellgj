<template>
    <div class="recentlyContainer">
        <div class="titCont">
            <i class="iconfont icon-hottit-ic"></i><i class="iconfont icon-hottit-text"></i>
        </div>
        <div class="gamesCont">
            <a href="#/game-center/xyft" class="">
                <i class="game-icon icon-xyft"></i>
                <p class="gameName">幸运飞艇</p>
                <p class="time redText">03:46</p>
            </a>
            <a href="#/game-center/jspk10" class="">
                <i class="game-icon icon-jspk10"></i>
                <p class="gameName">极速赛车</p>
                <p class="time redText">00:34</p>
            </a>
            <a href="#/game-center/jsssc" class="">
                <i class="game-icon icon-jsssc"></i>
                <p class="gameName">极速时时彩</p>
                <p class="time redText">00:31</p>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "hot",
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
    .homeView .recentlyContainer {
        margin-top: 0;
        overflow: hidden;
        padding-bottom: 2.66667vw;
    }

    .homeView .recentlyContainer .titCont {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        line-height: 10.66667vw;
        padding-left: 2.13333vw;
    }

    .homeView .recentlyContainer .titCont i:first-of-type {
        color: #d54a5b;
    }

    .homeView .recentlyContainer .titCont i:first-of-type {
        font-size: 5.6vw;
        margin-right: 1.33333vw;
    }

    .homeView .recentlyContainer .titCont i:last-of-type {
        color: #666;
    }

    .homeView .recentlyContainer .titCont i:last-of-type {
        font-size: 14.66667vw;
    }


    .homeView .recentlyContainer .gamesCont {
        overflow: hidden;
    }

    .homeView .recentlyContainer .gamesCont a {
        width: 20%;
        display: block;
        float: left;
    }

    .homeView .recentlyContainer .gamesCont a .game-icon, .homeView .recentlyContainer .gamesCont a .game-img {
        display: block;
        height: 12vw;
        line-height: 12vw;
        width: 12vw;
        border-radius: 50%;
        margin: 0 auto;
        text-align: center;
    }

    .game-icon.icon-xyft {
        background-image: url(../../assets/images/index/xyft.png);
    }

    .game-icon.icon-jspk10 {
        background-image: url(../../assets/images/index/jspk10.png);
    }

    .game-icon.icon-jsssc {
        background-image: url(../../assets/images/index/jsssc.png);
    }

    .game-icon {
        background-size: 100% 100%;
    }

    .homeView .recentlyContainer .gameName {
        color: #333;
    }

    .homeView .recentlyContainer .gamesCont a .gameName {
        font-size: 3.2vw;
        text-align: center;
        margin-top: 1.33333vw;
    }

    .homeView .recentlyContainer .gamesCont a .time {
        text-align: center;
        font-size: 2.66667vw;
    }

    .redText {
        color: #ec5a5a !important;
    }
</style>