<template>
    <div class="orderCancelClassView">
        <div class="orderCancelContainer">
            <div class="btnGroupCont">
                <input type="text" class="search-time se_bg" readOnly="true" :value="starttime"
                       @click="showStartDataPicker = true"> <span class="sp">-</span><input type="text"
                                                                                            class="search-time se_bg"
                                                                                            readOnly="true"
                                                                                            :value="endtime"
                                                                                            @click="showEndDataPicker = true">
                <span class="search-btn ">搜索</span>
                <span class="search-btn " :class="dateText == '本月'?'active':''"
                      @click="onMonthConfirm(dateText = '本月')">本月</span>
            </div>
            <div class="orderCancelList">
                <div class="orderCancel-but">
                    <div class="oederSelect se_bg" v-text="gameText" @click="showGamePicker = true">

                    </div>

                </div>
                <div class="order-date">
                    <span :class="dateText == '今天'?'active':''" style="border-radius: 4px 0px 0px 4px;"
                          @click="onMonthConfirm(dateText = '今天')">今天</span>
                    <span :class="dateText == '昨天'?'active':''" @click="onMonthConfirm(dateText = '昨天')">昨天</span>
                    <span :class="dateText == '本周'?'active':''" @click="onMonthConfirm(dateText = '本周')">本周</span>
                    <span :class="dateText == '上周'?'active':''" style="border-radius: 0px 4px 4px 0px;"
                          @click="onMonthConfirm(dateText = '上周')">上周</span>
                </div>
            </div>
            <div>
                <table class="orderTableStyle">
                    <tr>
                        <th>时间</th>
                        <th>类型</th>
                        <th>金额</th>
                        <th>余额</th>
                        <th>详情</th>
                    </tr>
                    <tr>
                        <td class="tab-times">
                            <div>03-16</div>
                            <div> 19:03:16</div>
                        </td>
                        <td>
                            <div>用户下注</div>
                            <div class="type_name">极速赛车</div>
                        </td>
                        <td class="loseText">-5.00</td>
                        <td>85.30</td>
                        <td><a class="orderTableStyle-btn">详情</a></td>
                    </tr>
                </table>
            </div>
            <img src="../../assets/images/nodata.png" class="noData_img">
        </div>
        <van-popup v-model="showStartDataPicker" position="bottom">
            <van-datetime-picker
                    v-model="startDate"
                    type="date"
                    @confirm="onStartConfirm"
                    @cancel="showStartDataPicker = false"
                    :min-date="minDate"
                    :max-date="maxDate"
            />
        </van-popup>

        <van-popup v-model="showEndDataPicker" position="bottom">
            <van-datetime-picker
                    v-model="endDate"
                    type="date"
                    @confirm="onEndConfirm"
                    @cancel="showEndDataPicker = false"
                    :min-date="minDate"
                    :max-date="maxDate"
            />
        </van-popup>

        <van-popup v-model="showGamePicker" position="bottom">
            <van-picker
                    show-toolbar
                    :columns="columns"
                    @confirm="onGameKeyConfirm"
                    @cancel="showGamePicker = false"
            />
        </van-popup>
    </div>
</template>

<script>
    import moment from "moment";

    export default {
        name: "orderQ",
        props: {
            active: {
                type: [Number]
            }
        },
        data() {
            return {
                columns: [
                    {text: '全部', id: ''},
                    {text: '结算注单', id: 1},
                    {text: '撤消注单', id: 4},
                    {text: '后台撤消', id: 7},
                    {text: '用户撤消', id: 8},
                    {text: '线上入款', id: 20},
                    {text: '人工存入', id: 21},
                    {text: '团队充值', id: 23},
                    {text: '优惠活动', id: 24},
                    {text: '返点分红', id: 26},
                    {text: '转账存入', id: 27},
                    {text: '用户提现', id: 40},
                    {text: '人工出款', id: 41},
                    {text: '团队转账', id: 42},
                ],
                showStartDataPicker: false,//日期开始控件显示
                showEndDataPicker: false, //日期结束控件显示
                showGamePicker: false, //彩种控件显示
                maxDate: new Date(),
                minDate: new Date(new Date().setMonth((new Date().getMonth() - 1))),
                startDate: moment().format('YYYY-MM-DD'), //开始标准时间
                endDate: moment().format('YYYY-MM-DD'), //结束标准时间
                starttime: moment().format('YYYY-MM-DD'), //默认为当天开始时间
                endtime: moment().format('YYYY-MM-DD'), //默认为当天结束时间
                dateText: '今天',
                gameText: '全部',
                gameKey: ''

            }
        },
        methods: {//条用方法
            onStartConfirm() {//开始时间ON
                this.starttime = moment(this.startDate).format('YYYY-MM-DD');
                this.showStartDataPicker = false;
            },
            onEndConfirm() {//结束时间ON
                this.endtime = moment(this.endDate).format('YYYY-MM-DD');
                this.showEndDataPicker = false;
            },
            onMonthConfirm() {//点击本月
                let weekOfday = parseInt(moment().format('d'));
                if (this.dateText == '上周') {
                    this.starttime = moment().subtract(weekOfday + 7 - 1, 'days').format('YYYY-MM-DD');//上周一
                    this.endtime = moment().subtract(weekOfday, 'days').format('YYYY-MM-DD');//上周日
                } else if (this.dateText == '本周') {
                    this.starttime = moment().subtract(weekOfday - 1, 'days').format('YYYY-MM-DD');// 周一日期
                    // this.endtime = moment().add(7 - weekOfday, 'days').format('YYYY-MM-DD'); // 周日日期
                    this.endtime = moment().format('YYYY-MM-DD');
                } else if (this.dateText == '本月') {
                    this.starttime = moment().month(moment().month()).startOf('month').format('YYYY-MM-DD');
                    this.endtime = moment().format('YYYY-MM-DD');
                    // this.endtime = moment().month(moment().month()).endOf('month').format('YYYY-MM-DD');
                } else if (this.dateText == '今天') {
                    this.starttime = moment().format('YYYY-MM-DD');
                    this.endtime = moment().format('YYYY-MM-DD');
                } else if (this.dateText == '昨天') {
                    this.starttime = moment().subtract(1, 'days').format('YYYY-MM-DD');
                    this.endtime = moment().subtract(1, 'days').format('YYYY-MM-DD');
                }

            },
            onGameKeyConfirm(value) {
                this.gameText = value.text;
                this.gameKey = value.id;
                this.showGamePicker = false;
            }


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
            active(val) {
                //触发POST提交获取数据
                console.log(val)
            }
        }
    }
</script>

<style scoped>
    .btnGroupCont {
        width: 96vw;
        margin: auto;
        margin-top: 2.66667vw;
        display: -ms-flexbox;
        display: flex;
        color: #999;
        -ms-flex-align: center;
        align-items: center;
    }

    .btnGroupCont .search-time {
        box-sizing: border-box;
        width: 32vw;
        height: 8vw;
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        /*background-size: 100% 100%;*/
        border-radius: 1.06667vw;
        border: none;
        font-size: 3.46667vw;
        text-indent: .53333vw;
        color: #9090ab;
        white-space: nowrap;
    }

    .btnGroupCont .search-btn, .btnGroupCont .search-time {
        background-color: #f7f7f7;
        border: 1px solid #9090ab;
        /*text-align: center;*/
    }

    .btnGroupCont .sp {
        margin: 0 .26667vw;
    }

    .btnGroupCont .search-btn {
        box-sizing: border-box;
        font-size: 3.2vw;
        line-height: 8vw;
        -ms-flex: 1;
        flex: 1;
        margin-left: 1.06667vw;
        height: 8vw;
        border-radius: 1.06667vw;
        float: right;
        color: #9090ab;
        text-align: center;
    }

    .btnGroupCont .active {
        background-color: #d54a5b;
        color: #fff;
    }

    .orderCancelList {
        display: -ms-flexbox;
        display: flex;
        line-height: 7.33333vw;
        width: 96vw;
        margin: 2vw auto;
    }

    .orderCancelList .orderCancel-but {
        width: 25.33333vw;
        height: 7.73333vw;
    }

    .orderCancelContainer .orderCancelList .orderCancel-but .oederSelect {
        background-color: #f7f7f7;
        /*border-top: 1px solid #9090ab !important;*/
        color: #9090ab;
        border: 1px solid #9090ab;
        /*text-align: center;*/
    }

    .orderCancelList .orderCancel-but .oederSelect {
        width: 100%;
        height: 100%;
        border-radius: .8vw;
        outline-style: none;
        font-size: 2.93333vw;
        text-indent: 1.33333vw;
    }

    .se_bg {
        -webkit-appearance: none;
        background-image: url(../../assets/images/se_bg_01.png);
        background-size: auto 30%;
        background-repeat: no-repeat;
        background-position: 95% 50%;
    }

    .orderCancelList .order-date {
        display: -ms-flexbox;
        display: flex;
        -ms-flex: 1;
        flex: 1;
        margin-left: 2.66667vw;
    }

    .orderCancelContainer .orderCancelList .order-date span.active {
        background-color: #d54a5b !important;
        color: #fff !important;
    }

    .orderCancelContainer .orderCancelList .order-date span {
        color: #9090ab;
        background-color: #fff !important;
        border-bottom: 1px solid #9090ab !important;
        border-top: 1px solid #9090ab !important;
        border-left: 1px solid #9090ab !important;
    }

    .orderCancelContainer .orderCancelList .order-date span:last-child {
        border-right: 1px solid #9090ab !important;
    }

    .orderCancelList .order-date span {
        text-align: center;
        font-size: 3.2vw;
        width: 17.33333vw;
        height: 8vw;
        line-height: 8vw;
        display: block;
        box-sizing: border-box;
    }

    .orderTableStyle {
        color: #333 !important;
    }

    .orderTableStyle {
        text-align: center;
        border-collapse: separate;
        border-spacing: 0;
        width: 100%;
        font-size: 3.73333vw;
    }

     .orderTableStyle th {
        background-color: #9090ab !important;
        color: #fff !important;
    }

    .orderTableStyle th {
        font-weight: 400;
        height: 8.8vw;
    }

    .noData_img {
        display: block;
        width: 29.33333vw;
        height: 44vw;
        margin: 13.33333vw auto;
    }
     .orderTableStyle td {
        height: 10.66667vw;
    }
    .orderTableStyle .tab-times {
        font-size: 3.2vw;
        width: 14.66667vw;
    }
    .orderTableStyle .type_name {
        font-size: 3.2vw;
        color: #777;
    }
     .orderTableStyle td {
        background-color: #fff!important;
        border-bottom: 1px solid #ddd!important;
    }
    .loseText {
        color: #ec5a5a!important;
    }
    .greenText, .winText {
        color: #0b887d!important;
    }
    .orderTableStyle td .odds,  .orderTableStyle td .orderTableStyle-btn {
        color: #d54a5b;
    }
</style>