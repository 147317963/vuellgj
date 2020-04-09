<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in url" :key="index" ><img :src="item" ></div>
<!--            <div class="swiper-slide" ><img :src="index" ></div>-->
<!--            <div class="swiper-slide" ><img src="../assets/images/swiper/index-banner3.jpg" ></div>-->
<!--            <div class="swiper-slide" ><img src="../assets/images/swiper/index-banner4.jpg" ></div>-->
        </div>
        <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
    </div>
</template>
089就离开；
<script>
    import Swiper from 'swiper'; //轮播滚动插件
    import 'swiper/css/swiper.min.css';

    export default {
        name: "swiper",
        props: {
            // 显示
            url: {
                type:[Array],
                // default:0 //0 = 首页没登录 1 = 首页登录  2 = 个人中心  3 = 返回界面
            }
        },
        data() {
            return {

            }
        },
        methods: {//条用方法

        },
        mounted() {//加载完毕后
             new Swiper('.swiper-container', {
                effect : 'fade',
                autoplay: true,
                speed: 500,
                loop : true,
                // autoplayDisableOnInteraction: false,
                // loop: true,
                // autoHeight: true, //高度随内容变化
                // width: window.innerWidth,
                // el: '.swiper-pagination'
                // centeredSlides: true,
                // slidesPerView: 2,
                pagination: {
                    el: '.swiper-pagination',
                },


            })
        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        }

    }
</script>

<style scoped>
  .swiper-slide img {
      display: block;
      width: 100%;
  }
</style>