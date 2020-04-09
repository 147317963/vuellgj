<template>
    <collapse-transition>
        <div class="" v-show="open">
            <div class="historyFilterCont">

<!--                <collapse-transition>-->
<!--                <div class="row_1" v-show="show">-->
<!--                    <a class="">1</a>-->
<!--                    <a class="">2</a>-->
<!--                    <a class="">3</a>-->
<!--                    <a class="">4</a>-->
<!--                    <a class="">5</a>-->
<!--                    <a class="">6</a>-->
<!--                    <a class="">7</a>-->
<!--                    <a class="">8</a>-->
<!--                    <a class="">9</a>-->
<!--                    <a class="">10</a>-->
<!--                </div>-->
<!--                </collapse-transition>-->
<!--                <collapse-transition>-->
<!--                <div class="row_1 paddingbottom" v-show="show">-->
<!--                    <a class="">大</a>-->
<!--                    <a class="">小</a>-->
<!--                    <a class="">单</a>-->
<!--                    <a class="">双</a>-->
<!--                    <a class="">龙</a>-->
<!--                    <a class="">虎</a>-->
<!--                    <a>还原</a>-->
<!--                </div>-->
<!--                </collapse-transition>-->

                <div class="row_2">
                    <a :class="active==0?'active':''" @click="active=0;show=false">号码</a>
                    <a :class="active==1?'active':''" @click="active=1;show=false">大小</a>
                    <a :class="active==2?'active':''" @click="active=2;show=false">单双</a>
                    <a :class="active==3?'active':''" @click="active=3;show=false">组合</a>
<!--                    <a class="searchSwitch" @click="active=0;show=true">筛选</a>-->
                </div>
            </div>
            <div class="historyListCont">
                <div class="historyTable pk10">

                    <div class="th" v-show = 'active != 3'>
                        <div class="col_1">期号</div>
                        <div class="col_2">
                            <a>冠</a><a>亚</a><a>三</a><a>四</a><a>五</a><a>六</a><a>七</a><a>八</a><a>九</a><a>十</a>
                        </div>
                    </div>
                    <div class="th" v-show="active==3">
                        <div class="col_1">期号</div>
                        <div class="col_2"><a>冠军</a><a>亚军</a><a>第三</a><a>第四</a><a>第五</a><a>组合</a><a>组合</a><a>组合</a>
                        </div>
                    </div>

                    <div class="scrollView" ref="list">
                        <div class="scrollContainer">
                            <div class="scrollBox">
                                <div class="td" v-for="(item,index) in list" :key="item.id">
                                    <div class="col_1">
                                        <p>{{item['create_time'].substring(item['create_time'].length-5)}}</p>
                                        <p>{{item.issue}}</p>
                                    </div>
                                    <transition mode="out-in" enter-active-class="animated fadeInRight">
                                    <div class="col_2" v-show="active==0">
                                        <div class="box"><span class="block" :class="'block'+item['codes']['ball_1']['hm']">{{item['codes']['ball_1']['hm']}}</span></div>
                                        <div class="box"><span class="block" :class="'block'+item['codes']['ball_2']['hm']">{{item['codes']['ball_2']['hm']}}</span></div>
                                        <div class="box"><span class="block" :class="'block'+item['codes']['ball_3']['hm']">{{item['codes']['ball_3']['hm']}}</span></div>
                                        <div class="box"><span class="block" :class="'block'+item['codes']['ball_4']['hm']">{{item['codes']['ball_4']['hm']}}</span></div>
                                        <div class="box"><span class="block" :class="'block'+item['codes']['ball_5']['hm']">{{item['codes']['ball_5']['hm']}}</span></div>
                                        <div class="box"><span class="block" :class="'block'+item['codes']['ball_6']['hm']">{{item['codes']['ball_6']['hm']}}</span></div>
                                        <div class="box"><span class="block" :class="'block'+item['codes']['ball_7']['hm']">{{item['codes']['ball_7']['hm']}}</span></div>
                                        <div class="box"><span class="block" :class="'block'+item['codes']['ball_8']['hm']">{{item['codes']['ball_8']['hm']}}</span></div>
                                        <div class="box"><span class="block" :class="'block'+item['codes']['ball_9']['hm']">{{item['codes']['ball_9']['hm']}}</span></div>
                                        <div class="box"><span class="block" :class="'block'+item['codes']['ball_10']['hm']">{{item['codes']['ball_10']['hm']}}</span></div>
                                    </div>
                                    </transition>
                                    <transition mode="out-in" enter-active-class="animated fadeInRight">
                                    <div class="col_2" v-show="active==1">
                                        <div class="box"><span class="block" :class="item['codes']['ball_1']['dx']=='大'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_1']['dx']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['ball_2']['dx']=='大'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_2']['dx']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['ball_3']['dx']=='大'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_3']['dx']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['ball_4']['dx']=='大'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_4']['dx']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['ball_5']['dx']=='大'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_5']['dx']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['ball_6']['dx']=='大'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_6']['dx']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['ball_7']['dx']=='大'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_7']['dx']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['ball_8']['dx']=='大'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_8']['dx']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['ball_9']['dx']=='大'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_9']['dx']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['ball_10']['dx']=='大'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_10']['dx']}}</span></div>
                                    </div>
                                    </transition>
                                    <transition mode="out-in" enter-active-class="animated fadeInRight">
                                    <div class="col_2" v-show="active==2">

                                        <div class="box"><span class="block" :class="item['codes']['ball_1']['ds']=='双'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_1']['ds']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['ball_2']['ds']=='双'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_2']['ds']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['ball_3']['ds']=='双'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_3']['ds']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['ball_4']['ds']=='双'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_4']['ds']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['ball_5']['ds']=='双'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_5']['ds']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['ball_6']['ds']=='双'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_6']['ds']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['ball_7']['ds']=='双'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_7']['ds']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['ball_8']['ds']=='双'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_8']['ds']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['ball_9']['ds']=='双'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_9']['ds']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['ball_10']['ds']=='双'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_10']['ds']}}</span></div>

                                    </div>
                                    </transition>
                                    <transition mode="out-in" enter-active-class="animated fadeInRight">
                                    <div class="col_2" v-show="active==3">
                                        <div class="box"><span class="block" :class="item['codes']['ball_1']['lh']=='虎'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_1']['lh']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['ball_2']['lh']=='虎'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_2']['lh']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['ball_3']['lh']=='虎'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_3']['lh']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['ball_4']['lh']=='虎'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_4']['lh']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['ball_5']['lh']=='虎'?'spBlockBlue':'spBlockOrange'">{{item['codes']['ball_5']['lh']}}</span></div>
                                        <div class="box"><span class="text">{{item['codes']['gyh']['zh']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['gyh']['dx']=='大'?'redText':'blueText'">{{item['codes']['gyh']['dx']}}</span></div>
                                        <div class="box"><span class="block" :class="item['codes']['gyh']['ds']=='单'?'redText':'blueText'">{{item['codes']['gyh']['ds']}}</span></div>
                                    </div>
                                    </transition>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </collapse-transition>
</template>

<script>
    import CollapseTransition from '@/utils/collapse-transition'; // 本人将collapse-transition.js 放置在工具类utils文件夹

    export default {
        name: "HistoricalLotteryData",
        props: {
            // 显示
            open: {
                type: [Boolean],
                default:false //0 = 首页没登录 1 = 首页登录  2 = 个人中心  3 = 返回界面
            },
        },
        data() {
            return {
                active:0,
                list:'',
                scroll:'',
                // show:false
            }
        },
        methods: {//条用方法

            getHistory(){
                let _this = this;
                this.$get(this.$api.history).then(res => {
                    if(res.code == 200){
                        _this.list = res.data;

                    }
                    this.setScroll();
                });
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
                                click: false,
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
            'collapse-transition': CollapseTransition,
        },
        watch: {

            open(newval) {
               if (newval===true){
                   this.getHistory();
               }


            }
        }
    }
</script>

<style scoped>


    /*.scrollView {*/
    /*    width: 100%;*/
    /*    -ms-flex: 1;*/
    /*    flex: 1;*/
    /*    overflow-y: scroll;*/
    /*    -webkit-overflow-scrolling: touch;*/
    /*    position: relative;*/
    /*}*/
    .scrollView {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        /*width: 100%;*/
        max-height: 300px;
        position: relative;
        /* overflow-y: scroll; */
        /* overflow-x: hidden; */
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
    }
    .opacity02 {
        opacity: .2;
    }
    .historyFilterCont .row_1 {
        display: -ms-flexbox;
        display: flex;
        padding: 0 1.33333vw;
        margin-top: 2.66667vw;
    }
    .historyFilterCont .row_1 a {
        -ms-flex: 1;
        flex: 1;
        height: 6.13333vw;
        box-sizing: border-box;
        border: 1px solid #ccc;
        display: -ms-flexbox;
        display: flex;
        margin-right: 1.33333vw;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        color: #666;
        font-size: 3.2vw;
        border-radius: 2px;
    }
    .historyFilterCont .row_1 .paddingbottom {
        padding-bottom: 2.66667vw;
    }

    .historyFilterCont .row_2 {
        background-color: #e0e0ea;
        padding: 1.33333vw;
        display: -ms-flexbox;
        display: flex;
    }

    .historyFilterCont .row_2 a {
        -ms-flex: 1;
        flex: 1;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        height: 6.66667vw;
        font-size: 3.2vw;
        background-color: #fff;
        margin-right: 2.66667vw;
        border-radius: 3px;
        color: #666;
    }

    .historyFilterCont .row_2 a.active {
        color: #fff;
        background-color: #e1410f;
    }

    .historyFilterCont .row_2 a.searchSwitch {
        background-color: #3da12f;
        color: #fff;
    }

    /*pk拾开奖历史*/
    .historyTable .th, .historyTable .th .col_1 {
        display: -ms-flexbox;
        display: flex;
        height: 10.66667vw;
    }

    .historyTable .th {
        font-size: 4vw;
        color: #fff;
        background-color: #6d5fae;
    }

    .historyTable .th .col_1 {
        width: 17.33333vw;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .historyTable .th, .historyTable .th .col_1 {
        display: -ms-flexbox;
        display: flex;
        height: 10.66667vw;
    }

    .historyTable .th .col_2 {
        display: -ms-flexbox;
        display: flex;
        -ms-flex: 1;
        flex: 1;
        height: 10.66667vw;
        padding-right: .8vw;
    }

    .historyTable .th .col_2 a {
        display: -ms-flexbox;
        display: flex;
        -ms-flex: 1;
        flex: 1;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
    .spBlockOrange {
        display: -ms-flexbox;
        display: flex;
        border-radius: 3px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0,0,0,.53);
        background-color: #ff7300!important;
        text-shadow: 0 1px 0 transparent;
    }
    .spBlockBlue, .spBlockRed {
        display: -ms-flexbox;
        display: flex;
        border-radius: 3px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0,0,0,.53);
        text-shadow: 0 1px 0 transparent;
    }
    .spBlockBlue {
        background-color: #0089ff!important;
    }
    .historyTable .td {
        border-bottom: 1px solid #e5e5e5;
        display: -ms-flexbox;
        display: flex;
    }

    .historyTable .td .col_1 {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 17.33333vw;
        height: 10.66667vw;
    }

    .historyTable .td .col_1 p {
        color: #666;
        font-size: 3.2vw;
    }

    .historyTable.pk10 .td .col_2, .historyTable.pk10 .td .col_2 .box {
        display: -ms-flexbox;
        display: flex;
        -ms-flex: 1;
        flex: 1;
        height: 10.66667vw;
    }

    .historyTable.pk10 .td .col_2 .box {
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .historyTable.pk10 .td .col_2, .historyTable.pk10 .td .col_2 .box {
        display: -ms-flexbox;
        display: flex;
        -ms-flex: 1;
        flex: 1;
        height: 10.66667vw;
    }


    .historyTable.pk10 .td .col_2 .box .block, .historyTable.pk10 .td .col_2 .box .text {
        width: 6.66667vw;
        height: 6.66667vw;
        font-size: 3.73333vw;
        font-weight: 700;
    }
    .historyTable.pk10 .td .col_2 .box .text {
        line-height: 6.66667vw;
        text-align: center;
        color: #666;
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


    .block1, .blockYellow {
        background-color: #ffbe00 !important;
    }

    .block2, .blockBlue {
        background-color: #0089ff !important;
    }

    .block3, .blockBlack {
        background-color: #4d4d4d !important;
    }

    .block4, .blockOrange {
        background-color: #ff7300 !important;
    }

    .block5, .blockTurquoisBblue {
        background-color: #2bcccc !important;
    }

    .block6, .blockPurple {
        background-color: #7f52de !important;
    }

    .block7, .blockGary {
        background-color: #9a9999 !important;
    }

    .block8, .blockRed {
        background-color: #ec4949 !important;
    }

    .block9, .blockWinered {
        background-color: #ad5353 !important;
    }

    .block10, .blockGreen {
        background-color: #35ad2b !important;
    }
    .redText {
        color: #ec5a5a !important;
    }
    .blueText {
        color: #0496ff;
    }
</style>