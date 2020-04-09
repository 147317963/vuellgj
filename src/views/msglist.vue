<template>
    <div class="msgListView">
        <top title="消息列表"></top>
        <van-tabs type="card" v-model="active" animated title-inactive-color="#000000"    style="padding-top: 2.4vw" color="#d54a5b">
            <van-tab title="公告" style="padding-top: 2.4vw">
                <!--公告-->
                <van-collapse v-model="activeNames" >
                    <van-collapse-item label="2019-10-28 09:09:00" title="标题" name="1" >内容</van-collapse-item>
                    <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
                    <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
                </van-collapse>

            </van-tab>
            <van-tab title="站内信" style="padding-top: 2.4vw">
                <!--站内信-->
            </van-tab>
        </van-tabs>


    </div>
</template>

<script>
    import top from '@/components/top.vue';

    export default {
        name: "msglist",
        data() {
            return {
                activeNames:[],
                active:0
            }
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
            active() {
                this.activeNames = [];
            }
        }
    }
</script>

<style scoped>
    .msgListView {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    .msgListView .recordContainer {
        padding: 2.4vw 4vw;
    }
     .msgListView .recordContainer ul {
        border: 1px solid #d54a5b;
    }
    .msgListView .recordContainer ul {
        border-radius: 5px;
        overflow: hidden;
        font-size: 3.73333vw;
    }
     .msgListView .recordContainer .active {
        background-color: #d54a5b;
        color: #fff;
    }
    .van-tabs__wrap {
        height: 8vw;
    }
    .van-tabs__nav--card {

        height: 8vw;

    }
    .msgListView .recordContainer ul .recharge {
        width: 50%;
        float: left;
        text-align: center;
        height: 8vw;
        line-height: 8vw;
    }
    .msgListView .recordContainer ul .drawMoney {
        width: 50%;
        float: right;
        text-align: center;
        height: 8vw;
        line-height: 8vw;
        list-style: none;
    }
</style>