<template>
    <div class="homeView">
        <!--        logo 个人中心-->
        <navigation></navigation>
        <!--        图片轮播-->
        <swiper :url='swiperimg'></swiper>
        <!--        热门精选-->
        <hot></hot>
<!--        <right></right>-->
        <div class="br_home"></div>
        <interactive></interactive>
        <bottom></bottom>
    </div>
</template>

<script>
    import navigation from '@/components/index/navigation.vue';
    import swiper from '@/components/swiper/index.vue';
    import hot from '@/components/index/hot.vue';
    import interactive from '@/components/index/interactive.vue';
    import bottom from '@/components/index/bottom.vue';
    export default {
        components: {
            navigation,
            swiper,
            hot,
            interactive,
            bottom,
        },
        data() {
            return {
                swiperimg: [
                    require("../assets/images/swiper/index-banner2.jpg"),
                    require("../assets/images/swiper/index-banner3.jpg"),
                    require("../assets/images/swiper/index-banner4.jpg"),
                ],
            }
        },
        methods: {//条用方法
        },
        mounted() {//加载完毕后

        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        }

    }
</script>

<style scoped>

    .homeView {
        background-color: #f7f7f7;
    }
    .homeView .br_home {
        background-color: #e6e6e6;
    }

    .homeView .br_home {
        width: 100%;
        height: 2.4vw;
    }

</style>