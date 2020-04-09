<template>
    <transition mode="out-in" enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
        <div class="homeSideRightContainer" v-show="show"  >
            <div class="mask" @click="changeShow"></div>
            <div class="container">
                <div class="sideRightCont-head">
                    <div class="sideRightCont-info"><p>晚上好！<span
                            style="margin-left: 4vw;">dong1314</span>
                    </p>
                        <p>游戏余额：<span>90.30</span></p></div>
                    <img src="../../assets/images/accongheade.png" class="sideRightCont-portrait">
                </div>
                <div class="sideRightCont-list">
                    <ul>
                        <li>
                            <a href="#/account" class="">
                                <i class="iconfont left icon-addressbook" style="color: crimson;"></i>&nbsp;&nbsp;
                                <span>个人资料</span><i class="iconfont icon-right"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#/msg-list" class="">
                                <i class="iconfont left icon-comment" style="color: royalblue;"></i>&nbsp;&nbsp;
                                <span>信息中心</span> <i class="iconfont icon-right"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#/bank-deal/1" class="">
                                <i class="iconfont left icon-daohangYH" style="color: crimson;"></i>&nbsp;&nbsp;
                                <span>充值提款</span> <i class="iconfont icon-right"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#/order-report/2" class="">
                                <i class="iconfont left icon-edit" style="color: crimson;"></i>&nbsp;&nbsp;
                                <span>个人报表</span><i class="iconfont icon-right"></i>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="iconfont left icon-tuandui" style="color: orangered;"></i>&nbsp;&nbsp;
                                <span>团队报表</span> <i class="iconfont icon-right"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#/commission" class="">
                                <i class="iconfont left icon-ziyuan" style="color: rgb(246, 185, 43);"></i>&nbsp;&nbsp;
                                <span>即时返水</span> <i class="iconfont icon-right"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#/custome" class="">
                                <i class="iconfont left icon-kefu" style="color: crimson;"></i>&nbsp;&nbsp;
                                <span>在线客服</span> <i class="iconfont icon-right"></i>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="iconfont left icon-share" style="color: green;"></i>&nbsp;&nbsp;
                                <span>分享</span>
                                <i class="iconfont icon-right"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#/iframe" class="">
                                <i class="iconfont left icon-guanwang" style="color: crimson;"></i>&nbsp;&nbsp;
                                <span>官网开奖网</span> <i class="iconfont icon-right"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#/iframe" class="">
                                <i class="iconfont left icon-APPiconx" style="color: crimson;"></i>&nbsp;&nbsp;
                                <span>APP下载</span> <i class="iconfont icon-right"></i>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i class="iconfont left icon-delete" style="color: orangered;"></i>&nbsp;&nbsp;
                                <span>清理缓存</span> <i class="iconfont icon-right"></i>
                            </a>
                        </li>
                        <li>
                            <i class="iconfont left icon-clothes" style="color: green;"></i> <span>换肤</span>
                            <div class="themes">
                                <div class="item theme-light-blue"></div>
                                <div class="item theme-light-red active"></div>
                                <div class="item theme-dark-black2"></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="sideRightCont-btn">
                    <i class="iconfont icon-tuchu"></i>&nbsp;&nbsp;
                    <span>退出登录</span>
                </div>
            </div>
        </div>
    </transition>

</template>

<script>
    export default {
        name: "right",
        props: {
            // 显示
            show: {
                type: [Boolean],
                // default:0 //0 = 首页没登录 1 = 首页登录  2 = 个人中心  3 = 返回界面
            }
        },
        data() {
            return {}
        },
        methods: {//条用方法
            changeShow(){
                this.$emit('changeShow',false);
            }
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
    .homeSideRightContainer {
        display: -ms-flexbox;
        display: flex;
        width: 100vw;
        height: 100vh;
        top: 0;
        right: 0;
        background: rgba(0, 0, 0, .4);
        position: fixed;
        z-index: 1900;
    }

    .homeSideRightContainer .mask {
        width: 100%;
        height: 100%;
        font-size: 0;
        overflow-x: hidden;
        overflow-y: scroll;

    }


    .homeSideRightContainer .container {
        width: 80%;
        height: 100%;
        padding-bottom: 100px;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        right: 0;
        background-color: #2c2c3e;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        color: #fff;
    }

    .homeSideRightContainer .container {
        color: #333;
    }

    .homeSideRightContainer .container {
        background-color: #f7f7f7;
    }

    /*.homeSideRightContainer .container.show {*/
    /*    animation: translateX-anima-data-v-5431d599 .15s linear forwards;*/
    /*}*/

    .homeSideRightContainer .container .sideRightCont-head {
        background-color: #d54a5b;
    }

    .homeSideRightContainer .container .sideRightCont-head {
        font-size: 3.46667vw;
        width: 100%;
        height: 23.73333vw;
        background-image: url(../../assets/images/side_topbg_opacety.png);
    }

    .container .sideRightCont-head p {
        color: #fff;
    }

    .homeSideRightContainer .container .sideRightCont-head {
        height: 23.73333vw;
        background-image: url(../../assets/images/side_topbg_red.jpg);
        background-size: 100% 100%;
    }

    .homeSideRightContainer .container .sideRightCont-head .sideRightCont-info {
        width: 53.33333vw;
        height: 75%;
        margin-top: 5.33333vw;
        float: right;
    }

    .homeSideRightContainer.container .sideRightCont-head p {
        color: #fff;
    }

    .homeSideRightContainer .container .sideRightCont-head .sideRightCont-info p {
        margin-top: 1.06667vw;
        font-size: 3.73333vw;
    }

    .homeSideRightContainer .container .sideRightCont-head .sideRightCont-info p span {
        font-size: 3.73333vw;
        font-weight: 700;
    }

    .homeSideRightContainer .container .sideRightCont-head .sideRightCont-portrait {
        display: inline-block;
        width: 16vw;
        height: 16vw;
        border-radius: 100%;
        margin-top: 3.33333vw;
        float: right;
        margin-right: 4.8vw;
    }

    .homeSideRightContainer.container .sideRightCont-list {
        color: #403330;
    }

    .homeSideRightContainer .container .sideRightCont-list {
        width: 100%;
        margin: auto;
        font-size: 5.06667vw;
    }

    .homeSideRightContainer .container .sideRightCont-list ul {
        border-top: 1.33333vw solid #efefef;
    }

    .homeSideRightContainer .container .sideRightCont-list ul {
        width: 100%;
    }

    .homeSideRightContainer .container .sideRightCont-list ul li {
        border-bottom: 1px solid #efefef;
    }

    .homeSideRightContainer .container .sideRightCont-list ul li {
        text-indent: 4vw;
        line-height: 12vw;
        list-style: none;
        height: 12vw;
        position: relative;
    }

    .homeSideRightContainer .container .sideRightCont-list ul li a {
        width: 100%;
        height: 12vw;
        line-height: 12vw;
        display: block;
    }

    .homeSideRightContainer .container .sideRightCont-list ul li .icon-right, .homeSideRightContainer .container .sideRightCont-list ul li .left {
        font-size: 5.06667vw;
    }

    .homeSideRightContainer .container .sideRightCont-list ul li .icon-right, .homeSideRightContainer .container .sideRightCont-list ul li span {
        color: #666;
    }

    .homeSideRightContainer .container .sideRightCont-list ul li span {
        font-size: 4.3vw;
    }

    .homeSideRightContainer .container .icon-right {
        margin-right: 4vw;
        float: right;
    }

    .homeSideRightContainer .container .sideRightCont-list ul li .themes {
        position: absolute;
        right: 3%;
        top: 0;
        display: inline-block;
        float: right;
        width: 80%;
        height: 12vw;
    }

    .homeSideRightContainer .container .sideRightCont-list ul li .themes .item {
        border: 2px solid #000;
    }

    .homeSideRightContainer .container .sideRightCont-list ul li .themes .item {
        display: inline-block;
        width: 6.66667vw;
        height: 6.66667vw;
        border-radius: 50%;
        box-sizing: border-box;
        margin: 2.93333vw 0 0 2.66667vw;
    }

    .themes .theme-light-blue {
        border-color: #3f7cd5 !important;
    }

    .themes .theme-light-red {
        border-color: #d54a5b !important;
    }

    .themes .theme-dark-black2 {
        border-color: #171515 !important;
    }

    .themes .theme-light-red.active {
        background-color: #d54a5b !important;
    }

    .homeSideRightContainer .container .sideRightCont-btn {
        background-color: #d54a5b;
        color: #fff;
    }

    .homeSideRightContainer .container .sideRightCont-btn {
        margin: 5.33333vw auto 0;
        width: 90%;
        height: 12.26667vw;
        line-height: 12.26667vw;
        text-align: center;
        font-size: 4.26667vw;
        border-radius: 1.33333vw;
    }
</style>