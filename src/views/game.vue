<template>
    <div class="gameCenterView">
        <top title="游戏"></top>
        <div class="tabsView">
            <gameopen :odds-pan="oddsPan" @changeOddsPan="prentOddsPan"></gameopen>
            <pk10 :odds-pan="oddsPan"></pk10>
        </div>
<!--        <van-tabs v-model="active"   background="#f7f7f7" title-active-color="#d54a5b" animated line-width="25%" line-height="1" title-inactive-color="#999" >-->
<!--            <van-tab title="投注区" title-style="border-right: 1px solid #e5e5e5;">-->


<!--            </van-tab>-->
<!--            <van-tab title="计划群" title-style="border-right: 1px solid #e5e5e5;">-->

<!--            </van-tab>-->
<!--            <van-tab title="微彩群" title-style="border-right: 1px solid #e5e5e5;">-->

<!--            </van-tab>-->
<!--            <van-tab title="红包群" title-style="">-->

<!--            </van-tab>-->
<!--        </van-tabs>-->
    </div>
</template>

<script>
    import top from '@/components/top.vue';
    import gameopen from '@/components/gameopen.vue';
    import pk10 from '@/components/game/pk10.vue';
    export default {
        name: "game",
        data() {
            return {
                active:0,
                oddsPan:'a',
            }
        },
        methods: {//条用方法
            prentOddsPan(value){
                this.oddsPan = value;
            }
        },
        mounted() {//加载完毕后
        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },
        components: {//注册组件
            top,
            gameopen,
            pk10,
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
    .gameCenterView {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }
    .tabsView {
        -ms-flex: 1;
        flex: 1;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 100%;
        min-height: 0;
    }
</style>