<template>
        <div class="orderPendingClassView">
            <div class="orderContainer">
                <table class="orderTableStyle">
                    <thead>
                    <tr>
                        <th>游戏名称</th>
                        <th>下注笔数</th>
                        <th>下注金额</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody> <!----></tbody>
                </table>
            </div>
            <img src="../../assets/images/nodata.png" v-show ='show' class="noData_img">
        </div>
</template>

<script>
    export default {
        name: "orderJ",
        props:{
            active:{
                type:[Number]
            }
        },
        data() {
            return {
                //如果没数据就显示IMG图片
                show:true
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
    .orderPendingClassView {
        background-color: #fff!important;
        color: #333!important;
    }
    .orderPendingClassView {
        margin-top: 2.66667vw;
    }
    .orderTableStyle {
        color: #333!important;
    }

    .orderTableStyle {
        text-align: center;
        border-collapse: separate;
        border-spacing: 0;
        width: 100%;
        font-size: 3.73333vw;
    }
    .orderTableStyle th {
        background-color: #9090ab!important;
        color: #fff!important;
    }
    .orderPendingClassView .orderTableStyle th {
        text-align: center;
        font-size: 3.73333vw;
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
</style>