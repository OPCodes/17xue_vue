<template>
	<div class="welcome">
		<section class="xueFirst">
			<slider class="course-banner"
				v-if="sliders.length > 0"
				:dotsClass="'on'"
				:loop="false"
				:autoplay="true"
				:interval="1000"
				>
				<ul class="banner-wrapper" slot="imgs">
				    <li class="banner-item fl swiper-slide" v-for="item in sliders">
				        <a class="banner-link" :href="item.jumpUrl">
				            <img v-url="item.imgUrl">
				        </a>
				    </li>
				</ul>
				<ul class="switch-dot" slot="dots">
					<i class="dots" v-for="item in sliders"></i>
				</ul>
			</slider>
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

		    <notice
		    	:para="'助跑新学期，提升学习力！'"
		    	:btnLink="'/'"
		    ></notice>

		    <!-- <div class="liveRecommend">
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
		    </div> -->

		    <!-- <div class="liveRecommend openCourseRankings">
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
		    </div> -->

		    <div class="liveRecommend courseSelected" v-if="selectList.length > 0">
		        <div class="liveTitleItem">
		            <div class="live-title" style="-webkit-tap-highlight-color:rgba(255,255,255,0);">精选课程</div>
		            <a class="liveMore" href="javascript:void(0);"></span></a>
		        </div>
		        <course-list :list="selectList"></course-list>
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
	import { ajax } from '@/common/js/utils';
	import Slider from '@/components/base/slider';
	import Notice from '@/components/notice';
	import CourseList from '@/components/course-list';

	export default {
		data() {
			return {
				sliders: [],
				selectList: []
			};
		},
		methods: {
		    _getIndexList() {
		        ajax({ url: '/api/indexlist.vpage', type: 'post' })
	        	.then(res => {
	        	    console.log(res);
	        	}).catch(err => {
	        	    console.info('ajax error', err);
	        	});
		    },
		    _getSliderList() {
		        ajax({ url: '/api/open/banner.vpage', type: 'post' })
	        	.then(res => {
	        		this.sliders = res.data.banners;
	        	}).catch(err => {
	        	    console.info('ajax error', err);
	        	});
		    },
		    _getSelectList(page) {
		        ajax({
		        	url: '/api/course/open/selectedcourselist.vpage',
		        	type: 'post',
		        	data: {
		        		page
			        }
			    })
	        	.then(res => {
	        	    if(res.success) {
	        	    	this.selectList = res.data.selectedCourseList.content;
	        	    	this.totalPages = res.data.selectedCourseList.totalPages;
	        	    }
	        	}).catch(err => {
	        	    console.info('ajax error', err);
	        	});
		    }
		},
		created() {
		    // this._getIndexList();
		    this._getSliderList();
		    setTimeout(() => {
		    	this._getSelectList(0);
		    }, 0);
		},
		components: {
			Slider,
			Notice,
			CourseList
		}
	}
</script>

<style lang="scss" scoped src="./welcome.scss">

</style>