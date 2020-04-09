<template>
    <div class="orderReportdManageView">
        <top title="个人报表"></top>
        <div  class="myTabsContainer">
            <a @click="show=0" :class="show==0 ? 'active':''">即时注单</a>
            <a @click="show=1" :class="show==1 ? 'active':''">取消注单</a>
            <a @click="show=2" :class="show==2 ? 'active':''">个人报表</a>
            <a @click="show=3" :class="show==3 ? 'active':''">帐变记录</a>
            <div class="my-tabs_line" :style="'width: 25%;left: '+25*show+'%'"></div>
        </div>
<!--        <right :show="show" @changeShow="prentShow"></right>-->
    </div>
</template>

<script>
    import top from '@/components/top.vue';
    // import right from '@/components/right.vue';

    export default {
        name: "report",
        data() {
            return {
              show:2,

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
            // right
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