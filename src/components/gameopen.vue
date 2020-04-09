<template>

    <div class="opencodeContainer">

        <div class="row1">

            <div class="issue">

                <span>0318180</span><span>期</span>

            </div>

            <div class="codes" @click="show=!show">
                <transition-group name="flip-list" >
                    <span  v-for="itme in items" :key="itme" class="block" :class="'block'+itme">{{itme}}</span>
                </transition-group>

<!--                <span class="block block3">3</span>-->
<!--                <span class="block block7">7</span>-->
<!--                <span class="block block4">4</span>-->
<!--                <span class="block block1">1</span>-->
<!--                <span class="block block2">2</span>-->
<!--                <span class="block block5">5</span>-->
<!--                <span class="block block9">9</span>-->
<!--                <span class="block block6">6</span>-->
<!--                <span class="block block8">8</span>-->
<!--                <span class="block block10">10</span>-->
                <i class="iconfont rightIcont" :class="show==false?'icon-quanping':'icon-suoxiao'"></i>
            </div>

        </div>
        <div class="row2" style="">
            <div class="issue">
                <span>0318181</span><span>期</span>
            </div>
            <div class="times">
                <div class="timeBox">开盘 : <span>00:00:00</span></div>
                <div class="timeBox">今日 : {{win}}</div>
            </div>
        </div>
        <historypk10 :open="show"></historypk10>
        <div class="menuContainer">
            <a>
                <i class="iconfont icon-peilv"></i>
                <span>赔率<b class="redText pan" @click.stop="changeOddsPan"> {{oddsPan.toUpperCase()}}</b>
                    盘
                </span>
            </a>
            <a><i class="iconfont icon-LiangMian"></i><span>两面遗漏</span></a>
            <a><i class="iconfont icon-gouwuche"></i><span>即时注单</span></a>
            <a><i class="iconfont icon-ziyuan"></i><span>已结注单</span></a>
            <a class="fullScreen"><i class="iconfont rightIcont icon-quanping1"></i></a>
        </div>
    </div>


</template>

<script>
    import historypk10 from '@/components/history/pk10.vue';
    import _ from 'lodash';
    export default {
        props: {
            // 显示
            oddsPan: {
                type: [String],
                required: true
                // default:0 //0 = 首页没登录 1 = 首页登录  2 = 个人中心  3 = 返回界面
            }
        },
        name: "gameopen",
        data() {
            return {
                //盈利清空
                win: '-1.00',
                active:0,
                show:false,
                items: [1,2,3,4,5,6,7,8,9,10]
            }
        },
        methods: {//条用方法
            changeOddsPan() {
                let value = this.oddsPan === 'a' ? 'b' : 'a';
                this.$emit('changeOddsPan', value);
            },
            shuffle: function () {
                this.items = _.shuffle(this.items)
            }
        },
        mounted() {//加载完毕后

            setInterval(() => {
                this.shuffle()
            }, 500);
        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },
        components: {//注册组件
            historypk10,
        },
        watch: {
            //data(val, newval) {
            //console.log(val)
            //console.log(newval)
            //}
        }
    }
</script>

<style scoped>


    .flip-list-move {
        transition: transform .5s;
    }






    /*pk拾开奖历史*/


    .historyFilterCont .row_2 a:last-of-type {
        margin-right: 0;
    }

    .codes .iconfont {
        font-weight: 700;
        color: #666;
        float: right;
        font-size: 5.53333vw;

    }

    .opencodeContainer {
        padding: 1.33333vw 0 0 1.33333vw;
    }

    .opencodeContainer .row1 {
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        height: 6.66667vw;
        line-height: 6.66667vw;
        position: relative;
    }

    .opencodeContainer .row1 .issue {
        margin-right: 2vw;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
    }

    .opencodeContainer .row1 .issue span, .opencodeContainer .row1 .tan .q3z3h3, .opencodeContainer .row1 .zodiac span {
        color: #333;
    }

    .opencodeContainer .row1 .issue span {
        margin-left: -1px;
        min-width: 2.53333vw;
        display: inline-block;
        font-size: 4vw;
        margin-top: 2px;
        color: #333;
        text-align: center;
    }

    .opencodeContainer .row1 .codes {
        -ms-flex: 1;
        flex: 1;
    }

    /*PK拾*/
    .opencodeContainer .row1 .codes .block {
        width: 6.4vw;
        height: 6.4vw;
        float: left;
        font-size: 3.73333vw;
        font-weight: 700;
        margin-right: .66667vw;
        border-radius: .66667vw;
    }

    .block1, .block2, .blockBlue, .blockYellow {
        display: -ms-flexbox;
        display: flex;
        border-radius: 3px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, .53);
    }

    .block1, .blockYellow {
        background-color: #ffbe00 !important;
    }

    .block2, .blockBlue {
        background-color: #0089ff !important;
    }

    .block1, .block2, .blockBlue, .blockYellow {
        display: -ms-flexbox;
        display: flex;
        border-radius: 3px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, .53);
    }

    .block3, .block4, .blockBlack, .blockOrange {
        display: -ms-flexbox;
        display: flex;
        border-radius: 3px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, .53);
    }

    .block3, .blockBlack {
        background-color: #4d4d4d !important;
    }

    .block4, .blockOrange {
        background-color: #ff7300 !important;
    }

    .block3, .block4, .blockBlack, .blockOrange {
        display: -ms-flexbox;
        display: flex;
        border-radius: 3px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, .53);
    }

    .block5, .block6, .blockPurple, .blockTurquoisBblue {
        display: -ms-flexbox;
        display: flex;
        border-radius: 3px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, .53);
    }

    .block5, .blockTurquoisBblue {
        background-color: #2bcccc !important;
    }

    .block6, .blockPurple {
        background-color: #7f52de !important;
    }

    .block5, .block6, .blockPurple, .blockTurquoisBblue {
        display: -ms-flexbox;
        display: flex;
        border-radius: 3px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, .53);
    }

    .block7, .block8, .blockGary, .blockRed {
        display: -ms-flexbox;
        display: flex;
        border-radius: 3px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, .53);
    }

    .block7, .blockGary {
        background-color: #9a9999 !important;
    }

    .block8, .blockRed {
        background-color: #ec4949 !important;
    }

    .block7, .block8, .blockGary, .blockRed {
        display: -ms-flexbox;
        display: flex;
        border-radius: 3px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, .53);
    }

    .block9, .block10, .blockGreen, .blockWinered {
        display: -ms-flexbox;
        display: flex;
        border-radius: 3px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, .53);
    }

    .block9, .blockWinered {
        background-color: #ad5353 !important;
    }

    .block10, .blockGreen {
        background-color: #35ad2b !important;
    }

    .block9, .block10, .blockGreen, .blockWinered {
        display: -ms-flexbox;
        display: flex;
        border-radius: 3px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, .53);
    }

    /*    */

    .opencodeContainer .row2 {
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        height: 6.66667vw;
        line-height: 6.66667vw;
    }

    .opencodeContainer .row2 .issue {
        margin-right: 2vw;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
    }

    .opencodeContainer .row2 .issue span {
        margin-left: -1px;
        min-width: 2.53333vw;
        display: inline-block;
        font-size: 4vw;
        color: #333;
        margin-bottom: 2px;
        text-align: center;
    }

    .opencodeContainer .row2 .times {
        -ms-flex: 1;
        flex: 1;
        font-size: 3.73333vw;
    }

    .opencodeContainer .row2 .times .timeBox {
        color: #333;
        min-width: 26.66667vw;
        display: inline-block;
    }

    .menuContainer {
        height: 9.33333vw;
        box-sizing: border-box;
        display: -ms-flexbox;
        display: flex;
        position: relative;
    }

    .menuContainer {
        border-top: 1px solid #ededed;
        border-bottom: 1px solid #ededed;
    }

    .menuContainer a {
        -ms-flex: 1;
        flex: 1;
        display: -ms-flexbox;
        display: flex;
        height: 9.33333vw;
        font-size: 3.2vw;
        line-height: 9.33333vw;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .menuContainer a {
        color: #333;
        min-width: 84.7px;
    }

    .menuContainer a .iconfont {
        font-size: 4.53333vw;
        margin-right: .8vw;
    }

    .menuContainer a span {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
    }

    .menuContainer a .pan {
        font-size: 5.6vw;
        padding: 0 .8vw;
    }



    .menuContainer a .icon-peilv {
        color: #f50000;
    }

    .menuContainer a .icon-LiangMian {
        color: #0b887d;
    }

    .menuContainer a .icon-gouwuche {
        color: #0496ff;
    }

    .menuContainer a .icon-ziyuan {
        color: #f48714;
    }
    .redText {
        color: #ec5a5a!important;
    }
</style>