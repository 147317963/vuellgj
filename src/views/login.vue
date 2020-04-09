<template>
    <div class="loginView">
        <div class="loginContainer">
            <div class="dowmApp">
                <div class="iconImg">
                    <router-link to="/custome">
                        <img src="../assets/images/login/topLogo.png" class="iconImg2" />
                        <span class="softmsg">下载APP,体验更多乐趣</span>
                        <span  class="downloadNew">立即下载 <img src="../assets/images/login/dowmImg.png"></span>
                    </router-link>
                </div>
            </div>
            <div class="logoCont">
                <img src="../assets/images/login/logo-white.png" />
            </div>

            <div class="loginForm">
                <div class="cellCont">
                    <div class="icon">
                        <i class="iconfont icon-yonghu"></i>
                    </div>
                    <div class="input">
                        <input id="usernameInput" placeholder="请输入用户名" type="text" />
                    </div>
                </div>
            </div>
            <div class="loginForm">
                <div class="cellCont">
                    <div class="icon">
                        <i class="iconfont icon-mima"></i>
                    </div>
                    <div class="input">
                        <input id="passwordInput" placeholder="请输入密码" type="text" />
                    </div>
                </div>
            </div>
            <div class="LoginButton">
                <input type="button" value="登录" class="button button-assertive" />
            </div>
            <div class="rembPwd" >
                <span @click="check=!check"><i class="iconfont" :class="check ? 'icon-square_check':'icon-square'"></i>&nbsp;记住密码</span>
                <router-link to="/custome" class="forginPwd">忘记密码</router-link>
            </div>
<!--            <div class="LoginButton_1">-->
<!--                <router-link to="/custome" class="customeCont">-->
<!--                    <span class="custome">在线客服</span><img src="../assets/images/login/service.png">-->
<!--                </router-link>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                check:false
            }
        },
        methods: {//调用方法


        },
    }
</script>

<style scoped>
    .loginView {
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        background-attachment: fixed;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
    }

    .loginView .loginContainer {
        background-image: url(../assets/images/login/login-bg-red.jpg);
    }

    .loginView .loginContainer {
        width: 100%;
        -ms-flex: 1;
        flex: 1;
        overflow-y: scroll;
    }

    .loginView .loginContainer .dowmApp {
        background: #344051;
        line-height: 12vw;
        height: 12vw;

    }
    .loginView .loginContainer .dowmApp .iconImg {
        height: 12vw;
        /*clear:both;*/
    }

    /*.loginView .loginContainer .dowmApp .iconImg .iconImg1 {*/
    /*    float: left;*/
    /*    height: 12vw;*/
    /*    width: 7.73333vw;*/
    /*}*/

    .loginView .loginContainer .dowmApp .iconImg .iconImg2 {
        float: left;
        height: 12vw;
        width: 24.26667vw;
    }

    .loginView .loginContainer .dowmApp .softmsg {
        margin-left: 1.33333vw;
        font-size: 3.2vw;
        color: #e5cba5;
    }

    .loginView .loginContainer .dowmApp .downloadNew {
        float: right;
        text-align: right;
        width: 26.66667vw;
        font-size: 4vw;
        font-weight: 700;
        background: #e5cba5;
        color: #344051;
    }

    .loginView .loginContainer .dowmApp .downloadNew img {
        float: right;
        height: 12vw;
        width: 8.53333vw;
    }

    .loginView .loginContainer .logoCont {
        width: 50.66667vw;
        display: block;
        margin: 13.33333vw auto;
    }

    .loginView .loginContainer .loginForm {
        border: 1px solid #e0e3e6;
        background-color: #f7f7f7;
    }

    .loginView .loginContainer .loginForm {
        width: 87.33333vw;
        margin: 2.66667vw auto;
        border-radius: 1.06667vw;
        overflow: hidden;
    }

    .loginView .loginContainer .loginForm .cellCont {
        width: 100%;
        height: 12.53333vw;
        overflow: hidden;
    }

    .loginView .loginContainer .loginForm .cellCont .icon {
        width: 15.46667vw;
        height: 12.53333vw;
        float: left;
    }

    .loginView .loginContainer .loginForm .cellCont .icon .iconfont {
        color: #969285;
        display: block;
        width: 7.2vw;
        height: 7.2vw;
        margin: 2.66667vw auto;
        font-size: 6.66667vw;
    }

    .loginView .loginContainer .loginForm .cellCont .input {
        width: 65.33333vw;
        height: 12.53333vw;
        float: left;
        line-height: 12.53333vw;
    }

    .loginView .loginContainer .loginForm .cellCont .input input {
        color: #333;
        background-color: #f7f7f7;
    }

    .loginView .loginContainer .loginForm .cellCont .input .inputDiv, .loginView .loginContainer .loginForm .cellCont .input input {
        display: block;
        width: 100%;
        height: 12.53333vw;
        font-size: 4vw;
        line-height: 12.53333vw;
        border: none;
        outline: 0;
        border-radius: 0;
    }

    .loginView .loginContainer .LoginButton {
        width: 87.33333vw;
        margin: 0 auto;
    }

    .loginView .loginContainer .LoginButton input {
        background-color: #d54a5b;
    }

    .loginView .loginContainer .LoginButton input, .loginView .loginContainer .rembPwd, #theme-light-red .loginView .loginContainer .rembPwd a {
        color: #fff;
    }

    .loginView .loginContainer .LoginButton input {
        border-radius: 1.06667vw;
        border-color: transparent;
        line-height: 12.53333vw;
        width: 100%;
        font-size: 4.8vw;
    }

    .loginView .loginContainer .LoginButton input, .loginView .loginContainer .rembPwd, .loginView .loginContainer .rembPwd a {
        color: #fff;
    }

    .loginView .loginContainer .rembPwd {
        display: block;
        width: 80vw;
        margin: 5.33333vw auto;
        height: 8vw;
        font-size: 4vw;
    }

    .loginView .loginContainer .rembPwd .forginPwd {
        float: right;
        color: #666;
    }

    .loginView .loginContainer .LoginButton_1 {
        width: 26.66667vw;
        margin: 0 auto;
        text-align: center;
    }
    .loginView .loginContainer .LoginButton_1 span {
        color: #fff;
        font-size: 4vw;
    }
    .loginView .loginContainer .LoginButton_1 img {
        width: 26.66667vw;
        height: 24vw;
    }
</style>