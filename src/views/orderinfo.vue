<template>
    <div class="orderInfoView">
        <top title="订单信息"></top>
        <div class="scrollView">
            <div><!----> <!---->
                <ul class="order-list">
                    <li><span>用户名称</span>
                        <div>dong1314</div>
                    </li>
                    <li class="gmnr"><span>购买内容</span>
                        <div>极速赛车冠军 大 <a class="odds">@1.94</a></div>
                    </li>
                    <li><span>开奖期号</span>
                        <div>31420650</div>
                    </li>
                    <li><span>投注时间</span>
                        <div>2020-03-16 19:10:41</div>
                    </li> <!---->
                    <li><span>开奖时间</span>
                        <div>2020-03-16 19:11:48</div>
                    </li>
                    <li><span>投注盘口</span>
                        <div>A盘</div>
                    </li>
                    <li><span>下注金额</span>
                        <div>5.00</div>
                    </li>
                    <li><span>开奖号码</span>
                        <div class="openCode openCodePk10"><a class="block7">7</a><a class="block1">1</a><a
                                class="block3">3</a><a class="block10">10</a><a class="block5">5</a><a
                                class="block4">4</a><a class="block9">9</a><a class="block6">6</a><a
                                class="block8">8</a><a class="block2">2</a></div> <!----> <!----> <!----> <!----></li>
                    <li><span>中奖金额</span>
                        <div>9.70</div>
                    </li>
                    <li><span>返点金额</span>
                        <div>0.00</div>
                    </li>
                    <li><span>投注盈亏</span>
                        <div>4.70</div>
                    </li>
                    <li><span>状态</span>
                        <div>结算</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import top from '@/components/top.vue';

    export default {
        name: "orderinfo",
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
            top,
        },
        watch: {
            //data(val, newval) {
            //console.log(val)
            //console.log(newval)
        }
    }
</script>

<style scoped>

    .orderInfoView {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    .scrollView {
        height: 133.33333vw;
        -ms-flex: 1;
        flex: 1;
    }
    .scrollView {
        width: 100%;
        -ms-flex: 1;
        flex: 1;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        position: relative;
    }
    .order-list {
        background-color: #fff !important;
    }

    .orderInfoView .order-list {
        width: 100vw;
        margin: auto;
    }

    #theme-light-red .order-list li {
        border-bottom: 1px solid #ddd !important;
    }

    .orderInfoView .order-list li {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        font-size: 3.46667vw;
        padding: 4vw .66667vw;
        -ms-flex-align: center;
        align-items: center;
    }

    .orderInfoView .order-list li span {
        text-indent: 1.33333vw;
    }

    .order-list li div {
        color: #666 !important;
    }

    .orderInfoView .order-list li div {
        width: 50%;
        text-align: right;
        padding-right: 2.66667vw;
        float: right;
    }

    .order-list li div {
        color: #666 !important;
    }

    .orderInfoView .order-list .gmnr div {
        width: 70%;
        font-size: 4vw;
        font-weight: 500;
    }

    .orderInfoView .order-list li div .odds {
        color: #d54a5b;
    }

    .orderInfoView .order-list .gmnr .odds {
        font-size: 4vw;
        font-weight: 500;
    }

    .orderInfoView .order-list li .openCodePk10 {
        width: 78%;
    }

    .orderInfoView .order-list li .openCode a {
        text-align: center;
        width: 6.66667vw;
        line-height: 6.66667vw;
        display: block;
        margin-left: .8vw;
        height: 6.66667vw;
        float: left;
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

    .block7, .blockGary {
        background-color: #9a9999 !important;
    }

    .block1, .blockYellow {
        background-color: #ffbe00 !important;
    }

    .block3, .blockBlack {
        background-color: #4d4d4d !important;
    }

    .block10, .blockGreen {
        background-color: #35ad2b !important;
    }

    .block5, .blockTurquoisBblue {
        background-color: #2bcccc !important;
    }

    .block4, .blockOrange {
        background-color: #ff7300 !important;
    }

    .block9, .blockWinered {
        background-color: #ad5353 !important;
    }

    .block6, .blockPurple {
        background-color: #7f52de !important;
    }

    .block8, .blockRed {
        background-color: #ec4949 !important;
    }

    .block2, .blockBlue {
        background-color: #0089ff !important;
    }

</style>