<template>
	<div class="welcome">
		<section class="xueFirst">
			<slider class="course-banner swiper-container">
				<ul class="banner-wrapper swiper-wrapper" slot="imgs">
				    <li class="banner-item fl swiper-slide">
				        <a class="banner-link">
				            <img src="">
				        </a>
				        <a class="banner-link">
				            <img src="">
				        </a>
				    </li>
				</ul>
				<ul class="switch-dot" slot="dots"></ul>
			</slider>
		    <!-- <div class="course-banner swiper-container" id="swiper-container">

		    </div> -->
		</section>
		<section class="xue_firstFace">
		    <div class="core_navItem">
		        <div class="core_col core_courseCenter">
		            <h3 class="core_title">选课中心</h3>
		        </div>
		        <div class="core_col core_studyCenter">
		            <h3 class="core_title">学习中心</h3>
		        </div>
		    </div>
		    <div class="core_navItem float" id="float_navi" style="display: none;">
		        <div class="core_col core_courseCenter">
		            <h3 class="core_title">选课中心</h3>
		        </div>
		        <div class="core_col core_studyCenter">
		            <h3 class="core_title">学习中心</h3>
		        </div>
		    </div>
		    <section class="activity clearfix">
		        <span class="activity_col activity_title fl">【活动】</span>
		        <span class="activity_col activity_para fl">助跑新学期，提升学习力！</span>
		        <span class="activity_col activity_bar fl"></span>
		        <a href="javascript: void(0);" class="activity_col activity_btn fl">去查看</a>
		    </section>
		    <div class="liveRecommend">
		        <div class="liveTitleItem">
		            <div class="live-title">直播课推荐</div>
		            <a class="liveMore" href="javascript:void(0);"></span></a>
		        </div>
		        <div class="courseRecommendWrapper" id="courseRecommendWrapper">
		            <div class="courseRecommendList clearfix" id="courseRecommendList">
		                <div class="courseRecommendItem fl">
		                    <a class="toBlock" href="javascript:void(0);">
		                        <div class="live_comm live_time"></div>
		                        <div class="live_comm live_courseName">外教带你趣学英语</div>
		                        <div class="live_comm live_teacherName">华夏</div>
		                        <div class="live_comm live_state">
		                            <div class="marquee-wrapper">
		                                <p class="marquee">正在直播中</p>
		                            </div>
		                        </div>
		                        <div class="live_comm live_state">预约：773479792人</div>
		                        <div class="teacherPic">
		                            <img src="">
		                        </div>
		                    </a>
		                </div>
		            </div>
		        </div>
		    </div>
		    <div class="liveRecommend openCourseRankings">
		        <div class="liveTitleItem">
		            <div class="live-title" style="-webkit-tap-highlight-color:rgba(255,255,255,0);">公开课排行榜</div>
		            <a class="liveMore" href="javascript:void(0);" ></span></a>
		        </div>
		        <div class="openCourseList">
		            <div class="openCourseItem clearfix" >
		                <div class="teacherAvatar fl">
		                    <div class="picItem ">
		                        <img src="" alt="">
		                    </div>
		                </div>
		                <div class="courseItem fl">
		                    <div class="openCourseName">三年级海尼曼绘本寒假超长班班班班</div>
		                    <div class="openCourseTeacher">夏婉秋</div>
		                    <div class="playNum">284724727</div>
		                    <div class="openCourseTag">巧用自然拼读，轻松读Heinemann</div>
		                </div>
		            </div>
		        </div>
		    </div>
		    <div class="liveRecommend courseSelected">
		        <div class="liveTitleItem">
		            <div class="live-title" style="-webkit-tap-highlight-color:rgba(255,255,255,0);">精选课程</div>
		            <a class="liveMore" href="javascript:void(0);"></span></a>
		        </div>
		        <div class="courseSelectedList">
		            <div class="courseSelectedItem">
		                <a class="toBlock" href="javascript:void(0);">
		                    <div class="courseSelectedName">
		                        <div class="subjectText">英语</div>
		                        <div class="subContent">单词记忆宝典（上）</div>
		                    </div>
		                    <div class="courseSelectedTimes">
		                        <span class="day"></span>
		                    </div>
		                    <div class="teacherItem clearfix">
		                        <div class="courseSelectedTeacher fl">
		                            <img src="" alt="">
		                        </div>
		                        <div class="teacherName fl">阿紫老师</div>
		                    </div>
		                    <i class="iconRecommend"></i>
		                    <div class="coursePrice"><span class="doll">¥</span><span>3990</span></div>
		                </a>
		            </div>
		        </div>
		    </div>
		</section>

		<div id="nomore" style="display: none;">没有更多啦!</div>
		<div class="alert-shadow">
		    <div class="alert-cont">
		        <div class="avatar-img">
		            <img src="" alt="">
		        </div>
		        <p class="avatar-tips"></p>
		    </div>
		</div>

	</div>
</template>

<script>
	import { ajax } from '@/common/js/Tools';
	import Slider from '@/components/base/slider';

	export default {
		methods: {
		    _getIndexList() {
		        ajax({ url: '/api/indexlist.vpage', type: 'post' })
		        .then(returnData => {
		            if(returnData.success) {
		                console.log(returnData.data);
		            }
		        }).catch(err => {
		            console.log(err);
		        });
		    }
		},
		created() {
		    this._getIndexList();
		},
		components: {
			Slider
		}
	}
</script>

<style scoped lang="scss" src="./_welcome.scss"></style>