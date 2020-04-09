<template>
    <transition mode="out-in" enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
        <div class="sideRightContainer" v-show="show">
            <div class="mask" @click.stop="changeShow"></div>
            <div class="container">

                <div class="gameRightCont" ref="list">
                    <div class="scrollContainer" >
                        <div class="scrollBox" >
                            <ul class="sideRightList">
                                <div class="sideRight-hand-info">
                                    <div class="sideRightCont-info">
                                        <p>早上好！<span style="margin-left: 4vw;">{{username}}</span></p>
                                        <p>游戏余额：<span>{{ money }}</span></p></div>
                                    <img src="../assets/images/accongheade.png" class="sideRightCont-portrait">
                                </div>
                                <!--                    <div class="sideRight-hf">-->
                                <!--                        <div class="titCont">-->
                                <!--                            <i class="iconfont icon-clothes" style="color: green;"></i> <span>换肤</span></div>-->
                                <!--                        <div class="themes">-->
                                <!--                            <div class="item theme-light-blue"></div>-->
                                <!--                            <div class="item theme-light-red active"></div>-->
                                <!--                            <div class="item theme-dark-black2"></div>-->
                                <!--                        </div>-->
                                <!--                    </div>-->
                                <li>
                                    <a href="#/bank-deal/0" class="">
                                        <i class="iconfont icon-addressbook" style="color: crimson;"></i>
                                        <p>个人资料</p>
                                    </a>
                                </li>
                                <li>
                                    <router-link :to="{ name:'report',params:{id:1} }">
                                        <i class="iconfont icon-edit" style="color: rgb(77, 188, 142);"></i>
                                        <p>个人报表</p>
                                    </router-link>

                                </li>
                                <li>
                                    <a href="#/order-report/2" class="">
                                        <i class="iconfont left icon-tuandui" style="color: orangered;"></i>&nbsp;&nbsp;<p>
                                        团队报表</p>
                                    </a>
                                </li>
                                <li>
                                    <router-link :to="{ name:'msglist'}">
                                        <i class="iconfont icon-comment" style="color: royalblue;"></i>
                                        <p>信息中心</p>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ name:'msglist'}">
                                        <i class="iconfont icon-chong" style="color: rgb(246, 185, 43);"></i>
                                        <p>充值</p>
                                    </router-link>

                                </li>
                                <li>
                                    <a href="#/bank-deal/1" class="">
                                        <i class="iconfont icon-ti" style="color: rgb(246, 185, 43);"></i>
                                        <p>提现</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#/password" class="">
                                        <i class="iconfont icon-mima" style="color: rgb(255, 149, 136);"></i>
                                        <p>修改密码</p>
                                    </a>
                                </li>
                                <li>
                                    <router-link :to="{ name:'report',params:{id:0} }">
                                        <i class="iconfont icon-gouwuche" style="color: rgb(246, 185, 43);"></i>
                                        <p>即时注单</p>
                                    </router-link>
                                </li>
                                <li>
                                    <a href="#/commission" class="">
                                        <i class="iconfont icon-ziyuan" style="color: rgb(84, 176, 223);"></i>
                                        <p>即时返水</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#/rules/jkpk10" class="">
                                        <i class="iconfont icon-guize" style="color: rgb(84, 176, 223);"></i>
                                        <p>游戏规则</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#/rules/jkpk10" class="">
                                        <i class="iconfont icon-fenxiang" style="color: crimson;"></i>
                                        <p>分享</p>
                                    </a>
                                </li>
                                <li>
                                    <i class="iconfont icon-guanwang" style="color: rgb(106, 226, 228);"></i>
                                    <p>开奖结果</p>
                                </li>
                                <li>
                                    <i class="iconfont icon-kefu" style="color: crimson;"></i>
                                    <p>在线客服</p>
                                </li>
                                <li>
                                    <i class="iconfont icon-music-fill" style="color: rgb(224, 98, 160);"></i>
                                    <i class="iconfont icon-music-fill-forbid"
                                       style="color: rgb(136, 136, 136); display: none;"></i>
                                    <p>静音</p>
                                </li>
                                <li>
                                    <i class="iconfont icon-winTips_1" style="color: dodgerblue; display: none;"></i>
                                    <i class="iconfont icon-tongzhi" style="color: rgb(136, 136, 136);"></i>
                                    <p>中奖通知</p>
                                </li>
                                <li>
                                    <i class="iconfont icon-dui" style="color: dodgerblue; display: none;"></i>
                                    <i class="iconfont icon-cuo" style="color: rgb(136, 136, 136);"></i>
                                    <p>快速下注</p>
                                </li>
                                <li>
                                    <a href="#/iframe" class="">
                                        <i class="iconfont left icon-guanwang" style="color: crimson;"></i>&nbsp;<p>
                                        官方开奖网</p>
                                    </a>
                                </li>
                                <li>
                                    <i class="iconfont icon-delete" style="color: orangered;"></i>
                                    <p>清理缓存</p>
                                </li>
                                <li>
                                    <i class="iconfont icon-delete" style="color: orangered;"></i>
                                    <p>清理缓存</p>
                                </li>
                                <li>
                                    <i class="iconfont icon-delete" style="color: orangered;"></i>
                                    <p>清理缓存</p>
                                </li>
                                <li>
                                    <i class="iconfont icon-delete" style="color: orangered;"></i>
                                    <p>清理缓存</p>
                                </li>
                                <li>
                                    <i class="iconfont icon-delete" style="color: orangered;"></i>
                                    <p>清理缓存</p>
                                </li>
                                <li>
                                    <i class="iconfont icon-delete" style="color: orangered;"></i>
                                    <p>清理缓存</p>
                                </li>
                                <li>
                                    <i class="iconfont icon-delete" style="color: orangered;"></i>
                                    <p>清理缓存</p>
                                </li>
                                <li>
                                    <i class="iconfont icon-delete" style="color: orangered;"></i>
                                    <p>清理缓存</p>
                                </li>
                                <li>
                                    <i class="iconfont icon-delete" style="color: orangered;"></i>
                                    <p>清理缓存</p>
                                </li>
                                <li>
                                    <i class="iconfont icon-delete" style="color: orangered;"></i>
                                    <p>清理缓存</p>
                                </li>
                                <li>
                                    <a href="#/" class="router-link-active">
                                        <i class="iconfont icon-fanhui" style="color: rgb(221, 79, 95);"></i>
                                        <p>返回大厅</p>
                                    </a>
                                </li>

                            </ul>
                            <div class="sideRightCont-btn">
                                <a class="iconfont icon-tuchu"><span>退出登录</span></a>
                            </div>

                        </div>

                    </div>
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
                default:false //0 = 首页没登录 1 = 首页登录  2 = 个人中心  3 = 返回界面
            },
            money: {
                type: [Number,String],
                default:0.00
            },
            username: {
                type: [String],
                default:'游客'
            }
        },
        data() {
            return {
                scroll:'',
            }
        },
        methods: {//条用方法
            changeShow() {
                this.$emit('changeShow', false);
            },
            setScroll() {
                this.$nextTick(() => {
                    if(!this.scroll){
                        setTimeout(() => {
                            this.scroll = new this.$BScroll(this.$refs.list, {
                                mouseWheel: true,
                                tap: true,
                                scrollY:true,
                                scrollX:false,
                                scrollbar: {
                                    fade: true,
                                    interactive: false // 1.8.0 新增
                                },
                                click: true,
                            });
                        }, 100);
                    }else {
                        this.scroll.refresh()
                    }
                });
            },
        },
        mounted() {//加载完毕后

        },
        beforeCreate() {//初始化前

        },
        updated() {//更新数据
        },
        components: {//注册组件
        },
        watch: {
            show(newval) {
                if (newval===true){
                    this.setScroll();
                }


            }
        }
    }
</script>

<style scoped>
    .gameRightCont {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        width: 100%;
        height: 100%;
        position: relative;
        /* overflow-y: scroll; */
        /* overflow-x: hidden; */
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
    }



    .sideRightContainer {
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



    .sideRightContainer .mask {
        width: 100%;
        height: 100%;
        font-size: 0;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    .sideRightContainer .container {
        width: 80%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background-color: #2c2c3e;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
        color: #fff;
    }

    .container {
        color: #333;
    }

    .sideRightContainer .container {
        background-color: #f7f7f7;
    }


    .sideRightContainer .container .sideRight-hand-info {
        font-size: 3.46667vw;
        width: 100%;
        height: 23.73333vw;
    }

    .sideRightContainer .container .sideRight-hand-info {
        height: 23.73333vw;
        background-image: url(../assets/images/side_topbg_red.jpg);
        background-size: 100% 100%;
    }

    .sideRightContainer .container .sideRight-hand-info .sideRightCont-info {
        width: 53.33333vw;
        height: 75%;
        margin-top: 5.33333vw;
        float: right;
    }

    .sideRightContainer .container .sideRight-hand-info .sideRightCont-info p {
        margin-top: 1.06667vw;
        font-size: 3.73333vw;
        color: #fff;
    }

    .sideRightContainer .container .sideRight-hand-info .sideRightCont-portrait {
        display: inline-block;
        width: 16vw;
        height: 16vw;
        border-radius: 100%;
        margin-top: 3.33333vw;
        float: right;
        margin-right: 4.8vw;
    }

    .sideRightContainer .container .sideRight-hand-info .sideRightCont-info p span {
        font-size: 3.73333vw;
        font-weight: 700;
    }

    .sideRightContainer .container .sideRight-hf {
        width: 100%;
        height: 10.66667vw;
        line-height: 10.66667vw;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
    }

    .sideRightContainer .container .sideRight-hf .titCont {
        width: calc(33.333% - 1px);
        float: left;
        color: #398221;
        font-size: 3.46667vw;
        text-align: center;
    }

    .sideRightContainer .container .sideRight-hf .titCont i {
        font-size: 3.73333vw;
    }

    .sideRightContainer .container .sideRight-hf .titCont {
        width: calc(33.333% - 1px);
        float: left;
        color: #398221;
        font-size: 3.46667vw;
        text-align: center;
    }

    .sideRightContainer .container .sideRight-hf .themes {
        width: 66.666666%;
        height: 10.66667vw;
        border-left: 1px solid #e5e5e5;
        float: right;
    }

    .themes {
        display: inline-block;
        float: right;
        height: 12vw;
    }

    .sideRightContainer .container .sideRight-hf .themes .item {
        margin-top: 2.66667vw;
        border: 2px solid;
    }

    .themes .item {
        display: inline-block;
        width: 5.33333vw;
        height: 5.33333vw;
        border-radius: 50%;
        box-sizing: border-box;
        margin: 3.33333vw 0 0 3.33333vw;
    }

    .themes .theme-light-blue {
        border-color: #3f7cd5 !important;
    }

    .themes .theme-light-red.active {
        background-color: #d54a5b !important;
    }

    .themes .theme-light-red {
        border-color: #d54a5b !important;
    }

    .themes .theme-dark-black2 {
        border-color: #171515 !important;
    }

    .sideRightContainer .container .sideRightList {
        width: 100%;
        display: block;
        overflow: hidden;
    }

    .sideRightContainer .container .sideRightList li {
        display: block;
        float: left;
        width: 33.333%;
        box-sizing: border-box;
        color: #fff;
        text-align: center;
        border-right: 1px solid #ececec;
        border-bottom: 1px solid #ececec;
        height: 20.66667vw;
        font-size: 4vw;
    }

    .sideRightContainer .container .sideRightList li .iconfont {
        display: block;
        line-height: 14.66667vw;
        font-size: 5.6vw;
    }

    .sideRightContainer .container .sideRightList li p {
        line-height: 0;
        font-size: 3.73333vw;
        color: #383838;
    }


    .sideRightContainer .container .sideRightCont-btn a {
        font-size: 4vw;
    }

    .container .sideRightCont-btn {
        background-color: #d54a5b;
        color: #fff;
    }

    .sideRightContainer .container .sideRightCont-btn {
        margin: 2.66667vw auto 0;
        width: 90%;
        height: 10.66667vw;
        line-height: 10.66667vw;
        text-align: center;
        font-size: 4vw;
        font-weight: 500;
        border-radius: 1.33333vw;
        background-color: #dd4f5f;
    }
</style>