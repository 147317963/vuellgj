<template>

<!--    <van-popup v-model="dateShow" position="bottom">  dateshow 控制显示 -->
<!--        <datetimePicker  @changeValue="changeValue"></datetimePicker>   @changeValue="changeValue" 子组件通信父组件 -->
<!--    </van-popup>-->

        <van-datetime-picker ref="Picker"
                             v-model="currentDate"
                             type="date"
                             :min-date="minDate"
                             :max-date="maxDate"
                             @confirm="changeValue"
                             @cancel="changeValue"


        />



</template>

<script>

    export default {
        name: "datetimePicker",
        props:{

            minDate:{
                type:[Date],
                default: function () {
                    return new Date(new Date().setMonth((new Date().getMonth() - 1))) //一个月
                },
            },
            maxDate:{
                type:[Date],
                default: function () {
                    return new Date();
                },
            }
        },
        data() {
            return {
                    currentDate: new Date(),
                    minDate: new Date(new Date().setMonth((new Date().getMonth() - 1))),//一个月
                // maxDate: new Date(),

            }
        },
        methods: {//条用方法
            changeValue() {
                this.$emit('changeValue', false,this.$refs.Picker.getPicker().getValues());
            }

        },
        mounted() {//加载完毕后

        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },

        components: {//注册组件

        }
    }
</script>

<style scoped>

</style>