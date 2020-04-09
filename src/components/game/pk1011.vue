<template>
    <div class="gameMainContainer">
        <div class="gameLeftCont" ref="menuList">
            <div class="scrollContainer">
                <div class="scrollBox">
                    <ul class="gameTypesCont">
                        <li :class="active==0?'active':''" @click.stop="active=0">1~10</li>
                        <li :class="active==1?'active':''" @click.stop="active=1">两面</li>
                        <li :class="active==2?'active':''" @click.stop="active=2">冠亚和</li>
                        <li :class="active==3?'active':''" @click.stop="active=3">冠军</li>
                        <li :class="active==4?'active':''" @click.stop="active=4">亚军</li>
                        <li :class="active==5?'active':''" @click.stop="active=5">季军</li>
                        <li :class="active==6?'active':''" @click.stop="active=6">第四名</li>
                        <li :class="active==7?'active':''" @click.stop="active=7">第五名</li>
                        <li :class="active==8?'active':''" @click.stop="active=8">第六名</li>
                        <li :class="active==9?'active':''" @click.stop="active=9">第七名</li>
                        <li :class="active==10?'active':''" @click.stop="active=10">第八名</li>
                        <li :class="active==11?'active':''" @click.stop="active=11">第九名</li>
                        <li :class="active==12?'active':''" @click.stop="active=12">第十名</li>
                        <li :class="active==13?'active':''" @click.stop="active=13">1VS10</li>
                        <li :class="active==14?'active':''" @click.stop="active=14">2VS9</li>
                        <li :class="active==15?'active':''" @click.stop="active=15">3VS8</li>
                        <li :class="active==16?'active':''" @click.stop="active=16">4VS7</li>
                        <li :class="active==17?'active':''" @click.stop="active=17">5VS6</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="gameRightCont" ref="list">
            <transition mode="out-in" enter-active-class="animated fadeInRight">
                <div class="scrollContainer" v-if="active==0">
                    <div class="scrollBox">
                        <div class="titleCont">
                            <div class="title-equ w80">名次</div>
                            <div class="title-equ">冠军</div>
                            <div class="title-equ">亚军</div>
                            <div class="title-equ">季军</div>
                            <div class="title-equ">第四名</div>
                            <div class="title-equ">第五名</div>
                        </div>
                        <div class="colTemplate">
                            <div class="colBox w80">
                                <div class="box"><span class="block block1">1</span></div>
                                <div class="box"><span class="block block2">2</span></div>
                                <div class="box"><span class="block block3">3</span></div>
                                <div class="box"><span class="block block4">4</span></div>
                                <div class="box"><span class="block block5">5</span></div>
                                <div class="box"><span class="block block6">6</span></div>
                                <div class="box"><span class="block block7">7</span></div>
                                <div class="box"><span class="block block8">8</span></div>
                                <div class="box"><span class="block block9">9</span></div>
                                <div class="box"><span class="block block10">10</span></div>
                            </div>

                            <div class="colBox" >
                                <div v-for="(item,index) in odds['冠军']" :key="item.id"  class="box" :class="{active : odds['冠军'][index]['is_ban'] == true }"  @click="changeClick(odds['冠军'][index])"   v-show="Number(item['name']) <= 10">
                                    <span class="playPrice fs34" >{{item['odds_'+oddsPan]}}</span>
                                </div>

                            </div>
                            <div class="colBox">
                                <div v-for="item in odds['亚军']" :key="item.id" class="box" v-show="Number(item['name']) <= 10">
                                    <span class="playPrice fs34" >{{item['odds_'+oddsPan]}}</span>
                                </div>
                            </div>
                            <div class="colBox">
                                <div v-for="item in odds['季军']" :key="item.id" class="box" v-show="Number(item['name']) <= 10">
                                    <span class="playPrice fs34" >{{item['odds_'+oddsPan]}}</span>
                                </div>
                            </div>
                            <div class="colBox">
                                <div v-for="item in odds['第四']" :key="item.id" class="box" v-show="Number(item['name']) <= 10">
                                    <span class="playPrice fs34" >{{item['odds_'+oddsPan]}}</span>
                                </div>
                            </div>
                            <div class="colBox">
                                <div v-for="item in odds['第五']" :key="item.id" class="box" v-show="Number(item['name']) <= 10">
                                    <span class="playPrice fs34" >{{item['odds_'+oddsPan]}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="titleCont">
                            <div class="title-equ w80">名次</div>
                            <div class="title-equ">第六名</div>
                            <div class="title-equ">第七名</div>
                            <div class="title-equ">第八名</div>
                            <div class="title-equ">第九名</div>
                            <div class="title-equ">第十名</div>
                        </div>
                        <div class="colTemplate">
                            <div class="colBox w80">
                                <div class="box"><span class="block block1">1</span></div>
                                <div class="box"><span class="block block2">2</span></div>
                                <div class="box"><span class="block block3">3</span></div>
                                <div class="box"><span class="block block4">4</span></div>
                                <div class="box"><span class="block block5">5</span></div>
                                <div class="box"><span class="block block6">6</span></div>
                                <div class="box"><span class="block block7">7</span></div>
                                <div class="box"><span class="block block8">8</span></div>
                                <div class="box"><span class="block block9">9</span></div>
                                <div class="box"><span class="block block10">10</span></div>
                            </div>
                            <div class="colBox">
                                <div v-for="item in odds['第六']" :key="item.id" class="box" v-show="Number(item['name']) <= 10">
                                    <span class="playPrice fs34" >{{item['odds_'+oddsPan]}}</span>
                                </div>
                            </div>
                            <div class="colBox">
                                <div v-for="item in odds['第七']" :key="item.id" class="box" v-show="Number(item['name']) <= 10">
                                    <span class="playPrice fs34" >{{item['odds_'+oddsPan]}}</span>
                                </div>
                            </div>
                            <div class="colBox">
                                <div v-for="item in odds['第八']" :key="item.id" class="box" v-show="Number(item['name']) <= 10">
                                    <span class="playPrice fs34" >{{item['odds_'+oddsPan]}}</span>
                                </div>
                            </div>
                            <div class="colBox">
                                <div v-for="item in odds['第九']" :key="item.id" class="box" v-show="Number(item['name']) <= 10">
                                    <span class="playPrice fs34" >{{item['odds_'+oddsPan]}}</span>
                                </div>
                            </div>
                            <div class="colBox">
                                <div v-for="item in odds['第十']" :key="item.id" class="box" v-show="Number(item['name']) <= 10">
                                    <span class="playPrice fs34" >{{item['odds_'+oddsPan]}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </transition>
            <transition mode="out-in" enter-active-class="animated fadeInRight">
                <div class="scrollContainer" v-if="active==1">
                    <div class="scrollBox">
                        <div class="titleCont">
                            <div class="title-equ">冠军</div>
                            <div class="title-equ">亚军</div>
                            <div class="title-equ">季军</div>
                            <div class="title-equ">第四名</div>
                            <div class="title-equ">第五名</div>
                        </div>
                        <div class="colTemplate">
                            <div class="colBox">
                                <div v-for="(item,index) in odds['冠军']" :key="item.id"  class="box fd-column"      v-show="item['name'] == '大' || item['name'] == '小' || item['name'] == '单'|| item['name'] == '双' || item['name'] == '龙' || item['name'] == '虎'">
                                    <span class="playName fs34">{{item['name']}}</span>
                                    <span class="playPrice fs34" >{{item['odds_'+oddsPan]}}</span>
                                </div>
<!--                                <div class="box fd-column">-->
<!--                                    <span class="playName fs34">大</span>-->
<!--                                    <span class="playPrice fs34">1.94</span>-->
<!--                                </div>-->
<!--                                <div class="box fd-column"><span class="playName fs34">小</span> <span-->
<!--                                        class="playPrice fs34">1.94</span></div>-->
<!--                                <div class="box fd-column"><span class="playName fs34">单</span> <span-->
<!--                                        class="playPrice fs34">1.94</span></div>-->
<!--                                <div class="box fd-column"><span class="playName fs34">双</span> <span-->
<!--                                        class="playPrice fs34">1.94</span></div>-->
<!--                                <div class="box fd-column"><span class="playName fs34">龙</span> <span-->
<!--                                        class="playPrice fs34">1.94</span></div>-->
<!--                                <div class="box fd-column"><span class="playName fs34">虎</span> <span-->
<!--                                        class="playPrice fs34">1.94</span></div>-->
                            </div>
                            <div class="colBox">
                                <div v-for="(item,index) in odds['亚军']" :key="item.id"  class="box fd-column"      v-show="item['name'] == '大' || item['name'] == '小' || item['name'] == '单'|| item['name'] == '双' || item['name'] == '龙' || item['name'] == '虎'">
                                    <span class="playName fs34">{{item['name']}}</span>
                                    <span class="playPrice fs34" >{{item['odds_'+oddsPan]}}</span>
                                </div>
                            </div>
                            <div class="colBox">
                                <div v-for="(item,index) in odds['季军']" :key="item.id"  class="box fd-column"      v-show="item['name'] == '大' || item['name'] == '小' || item['name'] == '单'|| item['name'] == '双' || item['name'] == '龙' || item['name'] == '虎'">
                                    <span class="playName fs34">{{item['name']}}</span>
                                    <span class="playPrice fs34" >{{item['odds_'+oddsPan]}}</span>
                                </div>
                            </div>
                            <div class="colBox">
                                <div v-for="(item,index) in odds['第四']" :key="item.id"  class="box fd-column"      v-show="item['name'] == '大' || item['name'] == '小' || item['name'] == '单'|| item['name'] == '双' || item['name'] == '龙' || item['name'] == '虎'">
                                    <span class="playName fs34">{{item['name']}}</span>
                                    <span class="playPrice fs34" >{{item['odds_'+oddsPan]}}</span>
                                </div>
                            </div>
                            <div class="colBox">
                                <div v-for="(item,index) in odds['第五']" :key="item.id"  class="box fd-column"      v-show="item['name'] == '大' || item['name'] == '小' || item['name'] == '单'|| item['name'] == '双' || item['name'] == '龙' || item['name'] == '虎'">
                                    <span class="playName fs34">{{item['name']}}</span>
                                    <span class="playPrice fs34" >{{item['odds_'+oddsPan]}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="titleCont">
                            <div class="title-equ">第六名</div>
                            <div class="title-equ">第七名</div>
                            <div class="title-equ">第八名</div>
                            <div class="title-equ">第九名</div>
                            <div class="title-equ">第十名</div>
                        </div>
                        <div class="colTemplate">
                            <div class="colBox">
                                <div v-for="(item,index) in odds['第六']" :key="item.id"  class="box fd-column"      v-show="item['name'] == '大' || item['name'] == '小' || item['name'] == '单'|| item['name'] == '双' || item['name'] == '龙' || item['name'] == '虎'">
                                    <span class="playName fs34">{{item['name']}}</span>
                                    <span class="playPrice fs34" >{{item['odds_'+oddsPan]}}</span>
                                </div>
                            </div>
                            <div class="colBox">
                                <div v-for="(item,index) in odds['第七']" :key="item.id"  class="box fd-column"      v-show="item['name'] == '大' || item['name'] == '小' || item['name'] == '单'|| item['name'] == '双' || item['name'] == '龙' || item['name'] == '虎'">
                                    <span class="playName fs34">{{item['name']}}</span>
                                    <span class="playPrice fs34" >{{item['odds_'+oddsPan]}}</span>
                                </div>
                            </div>
                            <div class="colBox">
                                <div v-for="(item,index) in odds['第八']" :key="item.id"  class="box fd-column"      v-show="item['name'] == '大' || item['name'] == '小' || item['name'] == '单'|| item['name'] == '双' || item['name'] == '龙' || item['name'] == '虎'">
                                    <span class="playName fs34">{{item['name']}}</span>
                                    <span class="playPrice fs34" >{{item['odds_'+oddsPan]}}</span>
                                </div>
                            </div>
                            <div class="colBox">
                                <div v-for="(item,index) in odds['第九']" :key="item.id"  class="box fd-column"      v-show="item['name'] == '大' || item['name'] == '小' || item['name'] == '单'|| item['name'] == '双' || item['name'] == '龙' || item['name'] == '虎'">
                                    <span class="playName fs34">{{item['name']}}</span>
                                    <span class="playPrice fs34" >{{item['odds_'+oddsPan]}}</span>
                                </div>
                            </div>
                            <div class="colBox">
                                <div v-for="(item,index) in odds['第十']" :key="item.id"  class="box fd-column"      v-show="item['name'] == '大' || item['name'] == '小' || item['name'] == '单'|| item['name'] == '双' || item['name'] == '龙' || item['name'] == '虎'">
                                    <span class="playName fs34">{{item['name']}}</span>
                                    <span class="playPrice fs34" >{{item['odds_'+oddsPan]}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition mode="out-in" enter-active-class="animated fadeInRight">
                <div class="scrollContainer" v-if="active==2">
                    <div class="scrollBox">
                        <div class="titleCont">
                            <div class="title-full">冠亚和</div>
                        </div>
                        <div class="listTemplate">
                            <div v-for="item in odds['冠亚和值']" :key="item.id" class="col50">
                                <span class="playName mw_50 fs34" >{{item['name']}}</span>
                                <span class="playPrice mw_100 fs34" >{{item['odds_'+oddsPan]}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition mode="out-in" enter-active-class="animated fadeInRight">
                <div class="scrollContainer" v-if="active==3">
                    <div class="scrollBox">
                        <div class="titleCont">
                            <div class="title-full">冠军</div>
                        </div>
                        <div class="listTemplate">
                            <div v-for="item in odds['冠军']" :key="item.id" class="col50">
                                <span class="playName mw_50 fs34" >{{item['name']}}</span>
                                <span class="playPrice mw_100 fs34" >{{item['odds_'+oddsPan]}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition mode="out-in" enter-active-class="animated fadeInRight">
                <div class="scrollContainer" v-if="active==4">
                    <div class="scrollBox">
                        <div class="titleCont">
                            <div class="title-full">亚军</div>
                        </div>
                        <div class="listTemplate">
                        <div v-for="item in odds['亚军']" :key="item.id" class="col50">
                            <span class="playName mw_50 fs34" >{{item['name']}}</span>
                            <span class="playPrice mw_100 fs34" >{{item['odds_'+oddsPan]}}</span>
                        </div>
                        </div>

                    </div>
                </div>
            </transition>
            <transition mode="out-in" enter-active-class="animated fadeInRight">
                <div class="scrollContainer" v-if="active==5">
                    <div class="scrollBox">
                        <div class="titleCont">
                            <div class="title-full">季军</div>
                        </div>
                        <div class="listTemplate">
                            <div v-for="item in odds['季军']" :key="item.id" class="col50">
                                <span class="playName mw_50 fs34" >{{item['name']}}</span>
                                <span class="playPrice mw_100 fs34" >{{item['odds_'+oddsPan]}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition mode="out-in" enter-active-class="animated fadeInRight">
                <div class="scrollContainer" v-if="active==6">
                    <div class="scrollBox">
                        <div class="titleCont">
                            <div class="title-full">第四</div>
                        </div>
                        <div class="listTemplate">
                        <div v-for="item in odds['第四']" :key="item.id" class="col50">
                            <span class="playName mw_50 fs34" >{{item['name']}}</span>
                            <span class="playPrice mw_100 fs34" >{{item['odds_'+oddsPan]}}</span>
                        </div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition mode="out-in" enter-active-class="animated fadeInRight">
                <div class="scrollContainer" v-if="active==7">
                    <div class="scrollBox">
                        <div class="titleCont">
                            <div class="title-full">第五</div>
                        </div>
                        <div class="listTemplate">
                            <div v-for="item in odds['第五']" :key="item.id" class="col50">
                                <span class="playName mw_50 fs34" >{{item['name']}}</span>
                                <span class="playPrice mw_100 fs34" >{{item['odds_'+oddsPan]}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition mode="out-in" enter-active-class="animated fadeInRight">
                <div class="scrollContainer" v-if="active==8">
                    <div class="scrollBox">
                        <div class="titleCont">
                            <div class="title-full">第六</div>
                        </div>
                        <div class="listTemplate">
                            <div v-for="item in odds['第六']" :key="item.id" class="col50">
                                <span class="playName mw_50 fs34" >{{item['name']}}</span>
                                <span class="playPrice mw_100 fs34" >{{item['odds_'+oddsPan]}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition mode="out-in" enter-active-class="animated fadeInRight">
                <div class="scrollContainer" v-if="active==9">
                    <div class="scrollBox">
                        <div class="titleCont">
                            <div class="title-full">第七</div>
                        </div>
                        <div class="listTemplate">
                            <div v-for="item in odds['第七']" :key="item.id" class="col50">
                                <span class="playName mw_50 fs34" >{{item['name']}}</span>
                                <span class="playPrice mw_100 fs34" >{{item['odds_'+oddsPan]}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition mode="out-in" enter-active-class="animated fadeInRight">
                <div class="scrollContainer" v-if="active==10">
                    <div class="scrollBox">
                        <div class="titleCont">
                            <div class="title-full">第八</div>
                        </div>
                        <div class="listTemplate">
                        <div v-for="item in odds['第八']" :key="item.id" class="col50">
                            <span class="playName mw_50 fs34" >{{item['name']}}</span>
                            <span class="playPrice mw_100 fs34" >{{item['odds_'+oddsPan]}}</span>
                        </div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition mode="out-in" enter-active-class="animated fadeInRight">
                <div class="scrollContainer" v-if="active==11">
                    <div class="scrollBox">
                        <div class="titleCont">
                            <div class="title-full">第九</div>
                        </div>
                        <div class="listTemplate">
                        <div v-for="item in odds['第九']" :key="item.id" class="col50">
                            <span class="playName mw_50 fs34" >{{item['name']}}</span>
                            <span class="playPrice mw_100 fs34" >{{item['odds_'+oddsPan]}}</span>

                        </div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition mode="out-in" enter-active-class="animated fadeInRight">
                <div class="scrollContainer" v-if="active==12">
                    <div class="scrollBox">
                        <div class="titleCont">
                            <div class="title-full">第十</div>
                        </div>
                        <div class="listTemplate">
                            <div v-for="item in odds['第十']" :key="item.id" class="col50">
                                <span class="playName mw_50 fs34" >{{item['name']}}</span>
                                <span class="playPrice mw_100 fs34" >{{item['odds_'+oddsPan]}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>

            <transition mode="out-in" enter-active-class="animated fadeInRight">
                <div class="scrollContainer" v-if="active==13">
                    <div class="scrollBox">
                        <div class="titleCont">
                            <div class="title-full">1VS10</div>
                        </div>
                        <div class="listTemplate">
                            <div v-for="item in odds['1VS10']" :key="item.id" class="col50">
                                <span class="playName mw_50 fs34" >{{item['name']}}</span>
                                <span class="playPrice mw_100 fs34" >{{item['odds_'+oddsPan]}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition mode="out-in" enter-active-class="animated fadeInRight">
                <div class="scrollContainer" v-if="active==14">
                    <div class="scrollBox">
                        <div class="titleCont">
                            <div class="title-full">2VS9</div>
                        </div>
                        <div class="listTemplate">
                            <div v-for="item in odds['2VS9']" :key="item.id" class="col50">
                                <span class="playName mw_50 fs34" >{{item['name']}}</span>
                                <span class="playPrice mw_100 fs34" >{{item['odds_'+oddsPan]}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>

            <transition mode="out-in" enter-active-class="animated fadeInRight">
                <div class="scrollContainer" v-if="active==15">
                    <div class="scrollBox">
                        <div class="titleCont">
                            <div class="title-full">3VS8</div>
                        </div>
                        <div class="listTemplate">
                            <div v-for="item in odds['3VS8']" :key="item.id" class="col50">
                                <span class="playName mw_50 fs34" >{{item['name']}}</span>
                                <span class="playPrice mw_100 fs34" >{{item['odds_'+oddsPan]}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition mode="out-in" enter-active-class="animated fadeInRight">
                <div class="scrollContainer" v-if="active==16">
                    <div class="scrollBox">
                        <div class="titleCont">
                            <div class="title-full">4VS7</div>
                        </div>
                        <div class="listTemplate">
                            <div v-for="item in odds['4VS7']" :key="item.id" class="col50">
                                <span class="playName mw_50 fs34" >{{item['name']}}</span>
                                <span class="playPrice mw_100 fs34" >{{item['odds_'+oddsPan]}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
            <transition mode="out-in" enter-active-class="animated fadeInRight">
                <div class="scrollContainer" v-if="active==17">
                    <div class="scrollBox">
                        <div class="titleCont">
                            <div class="title-full">5VS6</div>
                        </div>
                        <div class="listTemplate">
                            <div v-for="item in odds['5VS6']" :key="item.id" class="col50">
                                <span class="playName mw_50 fs34" >{{item['name']}}</span>
                                <span class="playPrice mw_100 fs34" >{{item['odds_'+oddsPan]}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>


    </div>
</template>

<script>
    // import BScroll from 'better-scroll'
    import {Getodds} from '@/api/odds'

    export default {
        name: "pk10",
        props: {
            // 显示
            oddsPan: {
                type: [String],
                required:true
                // default:0 //0 = 首页没登录 1 = 首页登录  2 = 个人中心  3 = 返回界面
            }
        },
        data() {
            return {
                active: 0,
                menuList: '',
                list: '',
                pan:'a',
                odds: {"冠亚和值":{"大":{"id":501001,"name":"大","alias":"","code":"GYD","game_key":"bjsc","played_groupid":10,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"冠亚和值","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"小":{"id":501002,"name":"小","alias":"","code":"GYX","game_key":"bjsc","played_groupid":10,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"冠亚和值","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"单":{"id":501003,"name":"单","alias":"","code":"GYDAN","game_key":"bjsc","played_groupid":10,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"冠亚和值","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"双":{"id":501004,"name":"双","alias":"","code":"GYSHUAN","game_key":"bjsc","played_groupid":10,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"冠亚和值","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"3":{"id":501005,"name":"3","alias":"","code":"3","game_key":"bjsc","played_groupid":10,"odds_a":"41.78","odds_b":"40.88","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":100000,"max_turn_money":200000,"ruleFun":"冠亚和值","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"4":{"id":501006,"name":"4","alias":"","code":"4","game_key":"bjsc","played_groupid":10,"odds_a":"41.78","odds_b":"40.88","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":100000,"max_turn_money":200000,"ruleFun":"冠亚和值","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"5":{"id":501007,"name":"5","alias":"","code":"5","game_key":"bjsc","played_groupid":10,"odds_a":"20.89","odds_b":"20.44","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":100000,"max_turn_money":200000,"ruleFun":"冠亚和值","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"6":{"id":501008,"name":"6","alias":"","code":"6","game_key":"bjsc","played_groupid":10,"odds_a":"20.89","odds_b":"20.44","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":100000,"max_turn_money":200000,"ruleFun":"冠亚和值","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"7":{"id":501009,"name":"7","alias":"","code":"7","game_key":"bjsc","played_groupid":10,"odds_a":"13.93","odds_b":"13.63","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":100000,"max_turn_money":200000,"ruleFun":"冠亚和值","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"8":{"id":501010,"name":"8","alias":"","code":"8","game_key":"bjsc","played_groupid":10,"odds_a":"13.93","odds_b":"13.63","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":100000,"max_turn_money":200000,"ruleFun":"冠亚和值","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"9":{"id":501011,"name":"9","alias":"","code":"9","game_key":"bjsc","played_groupid":10,"odds_a":"10.45","odds_b":"10.22","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":100000,"max_turn_money":200000,"ruleFun":"冠亚和值","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"10":{"id":501012,"name":"10","alias":"","code":"10","game_key":"bjsc","played_groupid":10,"odds_a":"10.45","odds_b":"10.22","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":100000,"max_turn_money":200000,"ruleFun":"冠亚和值","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"11":{"id":501013,"name":"11","alias":"","code":"11","game_key":"bjsc","played_groupid":10,"odds_a":"8.36","odds_b":"8.36","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":100000,"max_turn_money":200000,"ruleFun":"冠亚和值","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"12":{"id":501014,"name":"12","alias":"","code":"12","game_key":"bjsc","played_groupid":10,"odds_a":"10.45","odds_b":"10.22","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":100000,"max_turn_money":200000,"ruleFun":"冠亚和值","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"13":{"id":501015,"name":"13","alias":"","code":"13","game_key":"bjsc","played_groupid":10,"odds_a":"10.45","odds_b":"10.22","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":100000,"max_turn_money":200000,"ruleFun":"冠亚和值","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"14":{"id":501016,"name":"14","alias":"","code":"14","game_key":"bjsc","played_groupid":10,"odds_a":"13.93","odds_b":"13.63","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":100000,"max_turn_money":200000,"ruleFun":"冠亚和值","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"15":{"id":501017,"name":"15","alias":"","code":"15","game_key":"bjsc","played_groupid":10,"odds_a":"13.93","odds_b":"13.63","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":100000,"max_turn_money":200000,"ruleFun":"冠亚和值","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"16":{"id":501018,"name":"16","alias":"","code":"16","game_key":"bjsc","played_groupid":10,"odds_a":"20.89","odds_b":"20.44","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":100000,"max_turn_money":200000,"ruleFun":"冠亚和值","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"17":{"id":501019,"name":"17","alias":"","code":"17","game_key":"bjsc","played_groupid":10,"odds_a":"20.89","odds_b":"20.44","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":100000,"max_turn_money":200000,"ruleFun":"冠亚和值","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"18":{"id":501020,"name":"18","alias":"","code":"18","game_key":"bjsc","played_groupid":10,"odds_a":"41.78","odds_b":"40.88","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":100000,"max_turn_money":200000,"ruleFun":"冠亚和值","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"19":{"id":501021,"name":"19","alias":"","code":"19","game_key":"bjsc","played_groupid":10,"odds_a":"41.78","odds_b":"40.88","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":100000,"max_turn_money":200000,"ruleFun":"冠亚和值","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0}},"冠军":{"大":{"id":501101,"name":"大","alias":"","code":"DA","game_key":"bjsc","played_groupid":11,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"冠军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"小":{"id":501102,"name":"小","alias":"","code":"XIAO","game_key":"bjsc","played_groupid":11,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"冠军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"单":{"id":501103,"name":"单","alias":"","code":"DAN","game_key":"bjsc","played_groupid":11,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"冠军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"双":{"id":501104,"name":"双","alias":"","code":"SHUANG","game_key":"bjsc","played_groupid":11,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"冠军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"1":{"id":501107,"name":"1","alias":"","code":"1","game_key":"bjsc","played_groupid":11,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"冠军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"2":{"id":501108,"name":"2","alias":"","code":"2","game_key":"bjsc","played_groupid":11,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"冠军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"3":{"id":501109,"name":"3","alias":"","code":"3","game_key":"bjsc","played_groupid":11,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"冠军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"4":{"id":501110,"name":"4","alias":"","code":"4","game_key":"bjsc","played_groupid":11,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"冠军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"5":{"id":501111,"name":"5","alias":"","code":"5","game_key":"bjsc","played_groupid":11,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"冠军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"6":{"id":501112,"name":"6","alias":"","code":"6","game_key":"bjsc","played_groupid":11,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"冠军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"7":{"id":501113,"name":"7","alias":"","code":"7","game_key":"bjsc","played_groupid":11,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"冠军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"8":{"id":501114,"name":"8","alias":"","code":"8","game_key":"bjsc","played_groupid":11,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"冠军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"9":{"id":501115,"name":"9","alias":"","code":"9","game_key":"bjsc","played_groupid":11,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"冠军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"10":{"id":501116,"name":"10","alias":"","code":"10","game_key":"bjsc","played_groupid":11,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"冠军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0}},"1VS10":{"龙":{"id":501105,"name":"龙","alias":"","code":"LONG","game_key":"bjsc","played_groupid":11,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"1VS10","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"虎":{"id":501106,"name":"虎","alias":"","code":"HU","game_key":"bjsc","played_groupid":11,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"1VS10","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0}},"亚军":{"大":{"id":501201,"name":"大","alias":"","code":"DA","game_key":"bjsc","played_groupid":12,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"亚军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"小":{"id":501202,"name":"小","alias":"","code":"XIAO","game_key":"bjsc","played_groupid":12,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"亚军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"单":{"id":501203,"name":"单","alias":"","code":"DAN","game_key":"bjsc","played_groupid":12,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"亚军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"双":{"id":501204,"name":"双","alias":"","code":"SHUANG","game_key":"bjsc","played_groupid":12,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"亚军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"1":{"id":501207,"name":"1","alias":"","code":"1","game_key":"bjsc","played_groupid":12,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"亚军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"2":{"id":501208,"name":"2","alias":"","code":"2","game_key":"bjsc","played_groupid":12,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"亚军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"3":{"id":501209,"name":"3","alias":"","code":"3","game_key":"bjsc","played_groupid":12,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"亚军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"4":{"id":501210,"name":"4","alias":"","code":"4","game_key":"bjsc","played_groupid":12,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"亚军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"5":{"id":501211,"name":"5","alias":"","code":"5","game_key":"bjsc","played_groupid":12,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"亚军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"6":{"id":501212,"name":"6","alias":"","code":"6","game_key":"bjsc","played_groupid":12,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"亚军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"7":{"id":501213,"name":"7","alias":"","code":"7","game_key":"bjsc","played_groupid":12,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"亚军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"8":{"id":501214,"name":"8","alias":"","code":"8","game_key":"bjsc","played_groupid":12,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"亚军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"9":{"id":501215,"name":"9","alias":"","code":"9","game_key":"bjsc","played_groupid":12,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"亚军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"10":{"id":501216,"name":"10","alias":"","code":"10","game_key":"bjsc","played_groupid":12,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"亚军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0}},"2VS9":{"龙":{"id":501205,"name":"龙","alias":"","code":"LONG","game_key":"bjsc","played_groupid":12,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"2VS9","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"虎":{"id":501206,"name":"虎","alias":"","code":"HU","game_key":"bjsc","played_groupid":12,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"2VS9","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0}},"季军":{"大":{"id":501301,"name":"大","alias":"","code":"DA","game_key":"bjsc","played_groupid":13,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"季军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"小":{"id":501302,"name":"小","alias":"","code":"XIAO","game_key":"bjsc","played_groupid":13,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"季军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"单":{"id":501303,"name":"单","alias":"","code":"DAN","game_key":"bjsc","played_groupid":13,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"季军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"双":{"id":501304,"name":"双","alias":"","code":"SHUANG","game_key":"bjsc","played_groupid":13,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"季军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"1":{"id":501307,"name":"1","alias":"","code":"1","game_key":"bjsc","played_groupid":13,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"季军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"2":{"id":501308,"name":"2","alias":"","code":"2","game_key":"bjsc","played_groupid":13,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"季军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"3":{"id":501309,"name":"3","alias":"","code":"3","game_key":"bjsc","played_groupid":13,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"季军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"4":{"id":501310,"name":"4","alias":"","code":"4","game_key":"bjsc","played_groupid":13,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"季军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"5":{"id":501311,"name":"5","alias":"","code":"5","game_key":"bjsc","played_groupid":13,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"季军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"6":{"id":501312,"name":"6","alias":"","code":"6","game_key":"bjsc","played_groupid":13,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"季军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"7":{"id":501313,"name":"7","alias":"","code":"7","game_key":"bjsc","played_groupid":13,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"季军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"8":{"id":501314,"name":"8","alias":"","code":"8","game_key":"bjsc","played_groupid":13,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"季军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"9":{"id":501315,"name":"9","alias":"","code":"9","game_key":"bjsc","played_groupid":13,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"季军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"10":{"id":501316,"name":"10","alias":"","code":"10","game_key":"bjsc","played_groupid":13,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"季军","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0}},"3VS8":{"龙":{"id":501305,"name":"龙","alias":"","code":"LONG","game_key":"bjsc","played_groupid":13,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"3VS8","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"虎":{"id":501306,"name":"虎","alias":"","code":"HU","game_key":"bjsc","played_groupid":13,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"3VS8","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0}},"第四":{"大":{"id":501401,"name":"大","alias":"","code":"DA","game_key":"bjsc","played_groupid":14,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第四","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"小":{"id":501402,"name":"小","alias":"","code":"XIAO","game_key":"bjsc","played_groupid":14,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第四","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"单":{"id":501403,"name":"单","alias":"","code":"DAN","game_key":"bjsc","played_groupid":14,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第四","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"双":{"id":501404,"name":"双","alias":"","code":"SHUANG","game_key":"bjsc","played_groupid":14,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第四","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"1":{"id":501407,"name":"1","alias":"","code":"1","game_key":"bjsc","played_groupid":14,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第四","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"2":{"id":501408,"name":"2","alias":"","code":"2","game_key":"bjsc","played_groupid":14,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第四","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"3":{"id":501409,"name":"3","alias":"","code":"3","game_key":"bjsc","played_groupid":14,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第四","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"4":{"id":501410,"name":"4","alias":"","code":"4","game_key":"bjsc","played_groupid":14,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第四","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"5":{"id":501411,"name":"5","alias":"","code":"5","game_key":"bjsc","played_groupid":14,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第四","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"6":{"id":501412,"name":"6","alias":"","code":"6","game_key":"bjsc","played_groupid":14,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第四","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"7":{"id":501413,"name":"7","alias":"","code":"7","game_key":"bjsc","played_groupid":14,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第四","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"8":{"id":501414,"name":"8","alias":"","code":"8","game_key":"bjsc","played_groupid":14,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第四","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"9":{"id":501415,"name":"9","alias":"","code":"9","game_key":"bjsc","played_groupid":14,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第四","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"10":{"id":501416,"name":"10","alias":"","code":"10","game_key":"bjsc","played_groupid":14,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第四","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0}},"4VS7":{"龙":{"id":501405,"name":"龙","alias":"","code":"LONG","game_key":"bjsc","played_groupid":14,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"4VS7","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"虎":{"id":501406,"name":"虎","alias":"","code":"HU","game_key":"bjsc","played_groupid":14,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"4VS7","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0}},"第五":{"大":{"id":501501,"name":"大","alias":"","code":"DA","game_key":"bjsc","played_groupid":15,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第五","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"小":{"id":501502,"name":"小","alias":"","code":"XIAO","game_key":"bjsc","played_groupid":15,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第五","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"单":{"id":501503,"name":"单","alias":"","code":"DAN","game_key":"bjsc","played_groupid":15,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第五","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"双":{"id":501504,"name":"双","alias":"","code":"SHUANG","game_key":"bjsc","played_groupid":15,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第五","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"1":{"id":501507,"name":"1","alias":"","code":"1","game_key":"bjsc","played_groupid":15,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第五","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"2":{"id":501508,"name":"2","alias":"","code":"2","game_key":"bjsc","played_groupid":15,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第五","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"3":{"id":501509,"name":"3","alias":"","code":"3","game_key":"bjsc","played_groupid":15,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第五","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"4":{"id":501510,"name":"4","alias":"","code":"4","game_key":"bjsc","played_groupid":15,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第五","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"5":{"id":501511,"name":"5","alias":"","code":"5","game_key":"bjsc","played_groupid":15,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第五","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"6":{"id":501512,"name":"6","alias":"","code":"6","game_key":"bjsc","played_groupid":15,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第五","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"7":{"id":501513,"name":"7","alias":"","code":"7","game_key":"bjsc","played_groupid":15,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第五","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"8":{"id":501514,"name":"8","alias":"","code":"8","game_key":"bjsc","played_groupid":15,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第五","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"9":{"id":501515,"name":"9","alias":"","code":"9","game_key":"bjsc","played_groupid":15,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第五","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"10":{"id":501516,"name":"10","alias":"","code":"10","game_key":"bjsc","played_groupid":15,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第五","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0}},"5VS6":{"龙":{"id":501505,"name":"龙","alias":"","code":"LONG","game_key":"bjsc","played_groupid":15,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"5VS6","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"虎":{"id":501506,"name":"虎","alias":"","code":"HU","game_key":"bjsc","played_groupid":15,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"5VS6","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0}},"第六":{"大":{"id":501601,"name":"大","alias":"","code":"DA","game_key":"bjsc","played_groupid":16,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第六","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"小":{"id":501602,"name":"小","alias":"","code":"XIAO","game_key":"bjsc","played_groupid":16,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第六","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"单":{"id":501603,"name":"单","alias":"","code":"DAN","game_key":"bjsc","played_groupid":16,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第六","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"双":{"id":501604,"name":"双","alias":"","code":"SHUANG","game_key":"bjsc","played_groupid":16,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第六","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"1":{"id":501607,"name":"1","alias":"","code":"1","game_key":"bjsc","played_groupid":16,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第六","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"2":{"id":501608,"name":"2","alias":"","code":"2","game_key":"bjsc","played_groupid":16,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第六","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"3":{"id":501609,"name":"3","alias":"","code":"3","game_key":"bjsc","played_groupid":16,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第六","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"4":{"id":501610,"name":"4","alias":"","code":"4","game_key":"bjsc","played_groupid":16,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第六","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"5":{"id":501611,"name":"5","alias":"","code":"5","game_key":"bjsc","played_groupid":16,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第六","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"6":{"id":501612,"name":"6","alias":"","code":"6","game_key":"bjsc","played_groupid":16,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第六","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"7":{"id":501613,"name":"7","alias":"","code":"7","game_key":"bjsc","played_groupid":16,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第六","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"8":{"id":501614,"name":"8","alias":"","code":"8","game_key":"bjsc","played_groupid":16,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第六","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"9":{"id":501615,"name":"9","alias":"","code":"9","game_key":"bjsc","played_groupid":16,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第六","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"10":{"id":501616,"name":"10","alias":"","code":"10","game_key":"bjsc","played_groupid":16,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第六","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0}},"第七":{"大":{"id":501701,"name":"大","alias":"","code":"DA","game_key":"bjsc","played_groupid":17,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第七","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"小":{"id":501702,"name":"小","alias":"","code":"XIAO","game_key":"bjsc","played_groupid":17,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第七","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"单":{"id":501703,"name":"单","alias":"","code":"DAN","game_key":"bjsc","played_groupid":17,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第七","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"双":{"id":501704,"name":"双","alias":"","code":"SHUANG","game_key":"bjsc","played_groupid":17,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第七","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"1":{"id":501707,"name":"1","alias":"","code":"1","game_key":"bjsc","played_groupid":17,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第七","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"2":{"id":501708,"name":"2","alias":"","code":"2","game_key":"bjsc","played_groupid":17,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第七","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"3":{"id":501709,"name":"3","alias":"","code":"3","game_key":"bjsc","played_groupid":17,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第七","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"4":{"id":501710,"name":"4","alias":"","code":"4","game_key":"bjsc","played_groupid":17,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第七","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"5":{"id":501711,"name":"5","alias":"","code":"5","game_key":"bjsc","played_groupid":17,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第七","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"6":{"id":501712,"name":"6","alias":"","code":"6","game_key":"bjsc","played_groupid":17,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第七","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"7":{"id":501713,"name":"7","alias":"","code":"7","game_key":"bjsc","played_groupid":17,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第七","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"8":{"id":501714,"name":"8","alias":"","code":"8","game_key":"bjsc","played_groupid":17,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第七","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"9":{"id":501715,"name":"9","alias":"","code":"9","game_key":"bjsc","played_groupid":17,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第七","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"10":{"id":501716,"name":"10","alias":"","code":"10","game_key":"bjsc","played_groupid":17,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第七","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0}},"第八":{"大":{"id":501801,"name":"大","alias":"","code":"DA","game_key":"bjsc","played_groupid":18,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第八","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"小":{"id":501802,"name":"小","alias":"","code":"XIAO","game_key":"bjsc","played_groupid":18,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第八","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"单":{"id":501803,"name":"单","alias":"","code":"DAN","game_key":"bjsc","played_groupid":18,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第八","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"双":{"id":501804,"name":"双","alias":"","code":"SHUANG","game_key":"bjsc","played_groupid":18,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第八","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"1":{"id":501807,"name":"1","alias":"","code":"1","game_key":"bjsc","played_groupid":18,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第八","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"2":{"id":501808,"name":"2","alias":"","code":"2","game_key":"bjsc","played_groupid":18,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第八","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"3":{"id":501809,"name":"3","alias":"","code":"3","game_key":"bjsc","played_groupid":18,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第八","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"4":{"id":501810,"name":"4","alias":"","code":"4","game_key":"bjsc","played_groupid":18,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第八","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"5":{"id":501811,"name":"5","alias":"","code":"5","game_key":"bjsc","played_groupid":18,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第八","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"6":{"id":501812,"name":"6","alias":"","code":"6","game_key":"bjsc","played_groupid":18,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第八","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"7":{"id":501813,"name":"7","alias":"","code":"7","game_key":"bjsc","played_groupid":18,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第八","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"8":{"id":501814,"name":"8","alias":"","code":"8","game_key":"bjsc","played_groupid":18,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第八","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"9":{"id":501815,"name":"9","alias":"","code":"9","game_key":"bjsc","played_groupid":18,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第八","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"10":{"id":501816,"name":"10","alias":"","code":"10","game_key":"bjsc","played_groupid":18,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第八","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0}},"第九":{"大":{"id":501901,"name":"大","alias":"","code":"DA","game_key":"bjsc","played_groupid":19,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第九","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"小":{"id":501902,"name":"小","alias":"","code":"XIAO","game_key":"bjsc","played_groupid":19,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第九","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"单":{"id":501903,"name":"单","alias":"","code":"DAN","game_key":"bjsc","played_groupid":19,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第九","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"双":{"id":501904,"name":"双","alias":"","code":"SHUANG","game_key":"bjsc","played_groupid":19,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第九","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"1":{"id":501907,"name":"1","alias":"","code":"1","game_key":"bjsc","played_groupid":19,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第九","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"2":{"id":501908,"name":"2","alias":"","code":"2","game_key":"bjsc","played_groupid":19,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第九","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"3":{"id":501909,"name":"3","alias":"","code":"3","game_key":"bjsc","played_groupid":19,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第九","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"4":{"id":501910,"name":"4","alias":"","code":"4","game_key":"bjsc","played_groupid":19,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第九","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"5":{"id":501911,"name":"5","alias":"","code":"5","game_key":"bjsc","played_groupid":19,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第九","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"6":{"id":501912,"name":"6","alias":"","code":"6","game_key":"bjsc","played_groupid":19,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第九","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"7":{"id":501913,"name":"7","alias":"","code":"7","game_key":"bjsc","played_groupid":19,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第九","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"8":{"id":501914,"name":"8","alias":"","code":"8","game_key":"bjsc","played_groupid":19,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第九","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"9":{"id":501915,"name":"9","alias":"","code":"9","game_key":"bjsc","played_groupid":19,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第九","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"10":{"id":501916,"name":"10","alias":"","code":"10","game_key":"bjsc","played_groupid":19,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第九","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0}},"第十":{"大":{"id":502001,"name":"大","alias":"","code":"DA","game_key":"bjsc","played_groupid":20,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第十","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"小":{"id":502002,"name":"小","alias":"","code":"XIAO","game_key":"bjsc","played_groupid":20,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第十","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"单":{"id":502003,"name":"单","alias":"","code":"DAN","game_key":"bjsc","played_groupid":20,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第十","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"双":{"id":502004,"name":"双","alias":"","code":"SHUANG","game_key":"bjsc","played_groupid":20,"odds_a":"1.99","odds_b":"1.94","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第十","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"1":{"id":502007,"name":"1","alias":"","code":"1","game_key":"bjsc","played_groupid":20,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第十","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"2":{"id":502008,"name":"2","alias":"","code":"2","game_key":"bjsc","played_groupid":20,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第十","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"3":{"id":502009,"name":"3","alias":"","code":"3","game_key":"bjsc","played_groupid":20,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第十","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"4":{"id":502010,"name":"4","alias":"","code":"4","game_key":"bjsc","played_groupid":20,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第十","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"5":{"id":502011,"name":"5","alias":"","code":"5","game_key":"bjsc","played_groupid":20,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第十","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"6":{"id":502012,"name":"6","alias":"","code":"6","game_key":"bjsc","played_groupid":20,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第十","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"7":{"id":502013,"name":"7","alias":"","code":"7","game_key":"bjsc","played_groupid":20,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第十","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"8":{"id":502014,"name":"8","alias":"","code":"8","game_key":"bjsc","played_groupid":20,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第十","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"9":{"id":502015,"name":"9","alias":"","code":"9","game_key":"bjsc","played_groupid":20,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第十","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0},"10":{"id":502016,"name":"10","alias":"","code":"10","game_key":"bjsc","played_groupid":20,"odds_a":"9.95","odds_b":"9.70","rebate_a":"0.000","rebate_b":"0.020","min_money":5,"max_money":500000,"max_turn_money":1000000,"ruleFun":"第十","betCountFun":"","status":1,"android":0,"sort":0,"info":"","simpleInfo":"","example":"","selectNum":0,"zjMax":"","played_tpl":"","is_ban":0}}},
                order: []

            }
        },
        methods: {//条用方法
            setScroll() {
                this.$nextTick(() => {
                    this.menuList = new this.$BScroll(this.$refs.menuList, {
                        mouseWheel: true,
                        tap: true,
                        scrollY:true,
                        scrollX:false,
                        scrollbar: {
                            fade: true,
                            interactive: false // 1.8.0 新增
                        },
                        click: true,
                    }),
                        this.list = new this.$BScroll(this.$refs.list, {
                            mouseWheel: true,
                            tap: true,
                            scrollY:true,
                            scrollX:false,
                            scrollbar: {
                                fade: true,
                                interactive: false // 1.8.0 新增
                            },
                            click: true,
                        });


                });
            },
            changeClick(e){
                // this.order.push(
                //     1
                // );

                // if(this.order[e.currentTarget.id]){
                //     this.order[e.currentTarget.id] = !this.order[e.currentTarget.id];
                //
                // }else {
                //
                // }
                console.log(this.order);
                // this.order[]=e.currentTarget.id;

                // if(this.order.indexOf(e.currentTarget.id)){
                //     this.order.push({
                //         key:e.currentTarget.id,
                //
                //     });
                // }else {
                    this.order.push({
                        123:e.id,

                    });
                // }

            }

        },
        mounted() {//加载完毕后
            // console.log(document.body.clientHeight);
            Getodds({game_key: this.$route.params.type});
            console.log(this.odds['冠亚和值']);
            this.setScroll();

        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },
        components: {//注册组件
        },
        watch: {
            active() {
                this.list.scrollTo(0, 0);
                this.menuList.destroy();
                this.list.destroy();
                setTimeout(() => {
                    this.setScroll();
                }, 100)

            },



        }
    }
</script>

<style scoped>
    /*.scrollContainer {*/
    /*    height: 99%;*/
    /*}*/
    .gameMainContainer {
        width: 100%;
        -ms-flex: 1;
        flex: 1;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: row;
        flex-direction: row;
        min-height: 0;
    }

    .gameMainContainer .gameLeftCont {
        width: 20%;
        max-height: 100%;
        overflow: hidden;

        -webkit-overflow-scrolling: touch;


        position: relative;
    }

    .gameMainContainer .gameLeftCont {
        border-right: 1px solid #e5e5e5;
        background-color: #c4c5c8;
    }

    .gameMainContainer .gameLeftCont .gameTypesCont {
        display: block;
    }

    .gameMainContainer .gameLeftCont .gameTypesCont li {
        width: 100%;
        display: block;
        height: 10.13333vw;
        text-align: center;
        line-height: 10.13333vw;
        font-size: 3.73333vw;
        font-weight: 700;
        position: relative;
    }

    .gameMainContainer .gameLeftCont .gameTypesCont li {
        color: #666;
        border-bottom: 1px solid #fff;
    }

    .gameMainContainer .gameLeftCont .gameTypesCont li.active:before {
        content: "";
        width: 1.33333vw;
        height: 1.33333vw;
        position: absolute;
        top: 4vw;
        left: .66667vw;
        border-radius: 50%;
    }

    .gameMainContainer .gameLeftCont .gameTypesCont li.active {
        color: #fff;
        background-color: #d54a5b;
    }

    .gameMainContainer .gameLeftCont .gameTypesCont li.active:before {
        background-color: #f7f7f7;
    }


    .gameMainContainer .gameRightCont {
        -ms-flex: 1;
        flex: 1;
        width: 100%;
        max-height: 100%;
        position: relative;
        /*overflow-y: scroll;*/
        /*overflow-x: hidden;*/
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
    }


    .gameMainContainer .gameRightCont .titleCont {
        width: 100%;
        height: 10.13333vw;
        background-color: #a5a6a9;
        color: #fff;
        font-size: 3.46667vw;
        display: -ms-flexbox;
        display: flex;
        line-height: 10.13333vw;
        text-align: center;
        border-bottom: 1px solid #ededed;
        overflow: hidden;
    }

    .w80 {
        width: 10.66667vw !important;
        -ms-flex: none !important;
        flex: none !important;
    }

    .gameMainContainer .gameRightCont .titleCont .title-equ {
        -ms-flex: 1;
        flex: 1;
        border-right: 1px solid #ededed;
        box-sizing: border-box;
    }

    .gameMainContainer .gameRightCont .colTemplate .colBox {
        -ms-flex: 1;
        flex: 1;
    }

    .gameMainContainer .gameRightCont .colTemplate .colBox .box {
        width: 100%;
        display: -ms-flexbox;
        display: flex;
        text-align: center;
        min-height: 12vw;
        margin: 0;
        padding: 0;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 13px;
        box-sizing: border-box;
    }

    .gameMainContainer .gameRightCont .colTemplate .colBox .box {
        border-bottom: 1px solid #e5e5e5;
        border-right: 1px solid #e5e5e5;
    }

    .block1, .block2, .blockBlue, .blockYellow {
        display: -ms-flexbox;
        display: flex;
        border-radius: 3px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, .53);
    }

    .block1, .blockYellow {
        background-color: #ffbe00 !important;
    }

    .block2, .blockBlue {
        background-color: #0089ff !important;
    }

    .block1, .block2, .blockBlue, .blockYellow {
        display: -ms-flexbox;
        display: flex;
        border-radius: 3px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, .53);
    }

    .block3, .block4, .blockBlack, .blockOrange {
        display: -ms-flexbox;
        display: flex;
        border-radius: 3px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, .53);
    }

    .block3, .blockBlack {
        background-color: #4d4d4d !important;
    }

    .block4, .blockOrange {
        background-color: #ff7300 !important;
    }

    .block3, .block4, .blockBlack, .blockOrange {
        display: -ms-flexbox;
        display: flex;
        border-radius: 3px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, .53);
    }

    .block5, .block6, .blockPurple, .blockTurquoisBblue {
        display: -ms-flexbox;
        display: flex;
        border-radius: 3px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, .53);
    }

    .block5, .blockTurquoisBblue {
        background-color: #2bcccc !important;
    }

    .block6, .blockPurple {
        background-color: #7f52de !important;
    }

    .block5, .block6, .blockPurple, .blockTurquoisBblue {
        display: -ms-flexbox;
        display: flex;
        border-radius: 3px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, .53);
    }

    .block7, .block8, .blockGary, .blockRed {
        display: -ms-flexbox;
        display: flex;
        border-radius: 3px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, .53);
    }

    .block7, .blockGary {
        background-color: #9a9999 !important;
    }

    .block8, .blockRed {
        background-color: #ec4949 !important;
    }

    .block7, .block8, .blockGary, .blockRed {
        display: -ms-flexbox;
        display: flex;
        border-radius: 3px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, .53);
    }

    .block9, .block10, .blockGreen, .blockWinered {
        display: -ms-flexbox;
        display: flex;
        border-radius: 3px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, .53);
    }

    .block9, .blockWinered {
        background-color: #ad5353 !important;
    }

    .block10, .blockGreen {
        background-color: #35ad2b !important;
    }

    .block9, .block10, .blockGreen, .blockWinered {
        display: -ms-flexbox;
        display: flex;
        border-radius: 3px;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0, 0, 0, .53);
    }

    .gameMainContainer .gameRightCont .block {
        width: 7.2vw;
        height: 7.2vw;
        font-size: 4.26667vw;
        font-weight: 700;
    }

    .gameMainContainer .gameRightCont .colTemplate {
        width: 100%;
        display: -ms-flexbox;
        display: flex;
    }

    .gameMainContainer .gameRightCont .playPrice {
        color: #666;
    }

    .gameMainContainer .playPrice {
        font-weight: 700;
        font-size: 3.73333vw;
        color: #666;
        padding: 0 .66667vw;
    }

    .gameMainContainer .playName {
        font-weight: 700;
        font-size: 3.73333vw;
        color: #3f7cd5;
        margin: 0 1.33333vw;
    }

    .gameMainContainer .playName.fs34, .gameMainContainer .playPrice.fs34 {
        font-size: 4.53333vw;
    }

    .gameMainContainer .gameRightCont .playName, .gameMainContainer .gameRightCont .titleCont-scroll .title.active {
        color: #d54a5b;
    }


    .gameMainContainer .gameRightCont .titleCont {
        background-color: #a5a6a9;
        color: #fff;
        border-bottom: 1px solid #ededed;
    }

    .gameMainContainer .gameRightCont .titleCont .title-equ {
        border-right: 1px solid #ededed;
    }

    .gameMainContainer .gameRightCont .titleCont .title-equ:last-child {
        border-right: none;
    }

    .fd-column {
        -ms-flex-direction: column;
        flex-direction: column;
    }

    .gameMainContainer .gameRightCont .titleCont .title-full {
        width: 100%;
    }

    .gameMainContainer .gameRightCont .listTemplate {
        width: 100%;
        overflow: hidden;
    }

    .gameMainContainer .gameRightCont .listTemplate .col25, .gameMainContainer .gameRightCont .listTemplate .col33, .gameMainContainer .gameRightCont .listTemplate .col50, #theme-light-red .gameCenterView .gameMainContainer .gameRightCont .listTemplate .col100 {
        border-bottom: 1px solid #e5e5e5;
        border-right: 1px solid #e5e5e5;
    }

    .gameMainContainer .gameRightCont .listTemplate .col50, .gameMainContainer .gameRightCont .listTemplate .col100 {
        float: left;
        box-sizing: border-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        text-align: center;
        line-height: 12vw;
        margin: 0;
        padding: 0;
    }

    .gameMainContainer .gameRightCont .listTemplate .col50 {
        width: 50%;
    }

    .mw_120, .mw_150 {
        text-align: center;
    }

    .mw_120 {
        min-width: 16vw;
    }

    .mw_50 {
        min-width: 6.66667vw;
    }

    .mw_100 {
        min-width: 13.33333vw;
    }
     .gameCenterView .gameMainContainer .gameRightCont .colTemplate .colBox .box.active {
        background-color: #c4c5c8;
    }

</style>