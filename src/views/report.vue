<template>
    <div class="orderReportdManageView">
        <top title="个人报表"></top>
<!--        <div  class="myTabsContainer">-->
<!--            <a @click="menuListShow=0" :class="menuListShow==0 ? 'active':''">即时注单</a>-->
<!--            <a @click="menuListShow=1" :class="menuListShow==1 ? 'active':''">取消注单</a>-->
<!--            <a @click="menuListShow=2" :class="menuListShow==2 ? 'active':''">个人报表</a>-->
<!--            <a @click="menuListShow=3" :class="menuListShow==3 ? 'active':''">帐变记录</a>-->
<!--            <div class="my-tabs_line" :style="'width: 25%;left: '+25*menuListShow+'%'"></div>-->
<!--        </div>-->
        <van-tabs v-model="active" background="#f7f7f7" title-active-color="#d54a5b"   title-inactive-color="#666">
            <van-tab title="即时注单">
                <orderJ :active="active"></orderJ>
            </van-tab>
            <van-tab title="取消注单">
                <orderQ :active="active"></orderQ>
            </van-tab>
            <van-tab title="个人报表">
                <orderG :active="active"></orderG>
            </van-tab>
            <van-tab title="帐变记录">
                <orderZ :active="active"></orderZ>
            </van-tab>
        </van-tabs>

    </div>
</template>

<script>
    import top from '@/components/top.vue';
    import orderJ from '@/components/report/orderJ.vue';
    import orderQ from '@/components/report/orderQ.vue';
    import orderG from '@/components/report/orderG.vue';
    import orderZ from '@/components/report/orderZ.vue';
    export default {
        name: "report",
        data() {
            return {
                active:0,
            }
        },
        methods: {//条用方法


        },
        mounted() {//加载完毕后
            this.active = JSON.parse(this.$route.params.id);
        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },
        watch: {

        },
        components: {//注册组件
            top,
            orderJ,
            orderQ,
            orderG,
            orderZ,
        }
    }
</script>

<style scoped>

    .myTabsContainer {
        width: 100%;
        height: 10.4vw;
        display: -ms-flexbox;
        display: flex;
        position: relative;
    }
    .myTabsContainer {
        border-bottom: 1px solid #e5e5e5;
    }
    .myTabsContainer a {
        color: #666;
    }

    .myTabsContainer a {
        -ms-flex: 1;
        flex: 1;
        text-align: center;
        height: 10.4vw;
        line-height: 10.4vw;
        font-size: 3.73333vw;
    }
    .myTabsContainer a.active {
        color: #d54a5b;
    }
    .myTabsContainer .my-tabs_line {
        background-color: #d54a5b;
    }
    .myTabsContainer .my-tabs_line {
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        border-radius: 1px;
    }
</style>