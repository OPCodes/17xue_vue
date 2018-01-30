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
		    	<router-link tag="div" class="core_col core_courseCenter" to="/courseCenter/0">
		    		<h3 class="core_title">选课中心</h3>
		    	</router-link>
		    	<router-link tag="div" class="core_col core_courseCenter" to="/">
		    		<h3 class="core_title">学习中心</h3>
		    	</router-link>
		    </div>

		    <notice
		    	:para="'助跑新学期，提升学习力！'"
		    	:btnLink="'/'"
		    ></notice>

		    <div class="liveRecommend" v-if="openList.length > 0">
		        <div class="liveTitleItem">
		            <div class="live-title">直播课推荐</div>
		            <a class="liveMore" href="javascript:void(0);"></span></a>
		        </div>
		        <scroll :dir="'x'" class="courseRecommendWrapper">
		        	<div class="courseRecommendList clearfix">
		        		<div class="courseRecommendItem fl" v-for="item in openList" :class="recommendItemBgMap[item.subject]">
		        		    <a class="toBlock" href="javascript:void(0);">
		        		        <div class="live_comm live_time" v-date="{ timestamp: item.startTime, format: 'YYYY.MM.DD HH:mm' }"></div>
		        		        <div class="live_comm live_courseName">{{item.name}}</div>
		        		        <div class="live_comm live_teacherName">{{item.teacherName || '北美外教'}}</div>
		        		        <div class="live_comm live_state">
		        		            <div class="marquee-wrapper">
		        		                <p class="marquee">正在直播中</p>
		        		            </div>
		        		        </div>
		        		        <div class="live_comm live_state">预约：{{item.viewCount}}人</div>
		        		        <div class="teacherPic">
		        		            <img class="tPic" v-url="item.teacherImage">
		        		        </div>
		        		    </a>
		        		</div>
			        </div>
		        </scroll>
		    </div>

		    <div class="liveRecommend openCourseRankings" v-if="rankList.length > 0">
		        <div class="liveTitleItem">
		            <div class="live-title" style="-webkit-tap-highlight-color:rgba(255,255,255,0);">公开课排行榜</div>
		            <a class="liveMore" href="javascript:void(0);" ></span></a>
		        </div>
		        <rank-list :list="rankList"></rank-list>
		    </div>

		    <div class="liveRecommend courseSelected" v-if="selectList.length > 0">
		        <div class="liveTitleItem">
		            <div class="live-title" style="-webkit-tap-highlight-color:rgba(255,255,255,0);">精选课程</div>
		            <a class="liveMore" href="javascript:void(0);"></span></a>
		        </div>
		        <course-list
		        	:list="selectList"
		        	:page="page"
		        	:totalPages="totalPages"
		        	@scrollToEnd="loadMore"
		        ></course-list>
		    </div>
		  <!--   <div class="listNull main" v-if="selectList.length == 0">
		        <img src="/public/images/wechat/null/course_null.png" alt="" class="listNull_img">
		        <div class="listNull_txt">暂无课程</div>
		    </div> -->
	        <loading v-show="selectListFlag"></loading>
		</section>

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
	import Scroll from '@/components/base/scroll';
	import Notice from '@/components/notice';
	import CourseList from '@/components/course-list';
	import rankList from '@/components/rank-list';
	import Loading from '@/components/base/loading';

	export default {
		data() {
			return {
				sliders: [],
				selectList: [],
				page: 0,
				totalPages: 1,
				selectList: [],
				openList: [],
				rankList: [],
				recommendItemBgMap: {
					1: 'englishBg',
					2: 'authBg',
					3: 'chineseBg'
				},
				selectListFlag: false
			};
		},
		methods: {
		    _getRankList() {
		        ajax({ url: '/api/course/open/ranklist.vpage', type: 'post' })
	        	.then(res => {
	        		if(res.success) {
	        			this.rankList = res.data.courseList;
	        		}
	        	}).catch(err => {
	        	    console.info('ajax error', err);
	        	});
		    },
		    _getIndexList() {
		        ajax({ url: '/api/indexlist.vpage', type: 'post' })
	        	.then(res => {
	        		if(res.success) {
	        			this.openList = res.data.openList;
	        		}
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
		    	this.selectListFlag = true;
		        ajax({
		        	url: '/api/course/open/selectedcourselist.vpage',
		        	type: 'post',
		        	data: {
		        		page
			        }
			    })
	        	.then(res => {
	        	    if(res.success) {
	        	    	this.selectList = this.selectList.concat(res.data.selectedCourseList.content);
	        	    	this.totalPages = res.data.selectedCourseList.totalPages;
	        	    	this.page = res.data.selectedCourseList.number;
	        	    }
	        	    this.selectListFlag = false;
	        	}).catch(err => {
	        	    this.selectListFlag = false;
	        	    console.info('ajax error', err);
	        	});
		    },
		    loadMore() {
		    	if(this.selectListFlag) return;
		    	if(this.page + 1 == this.totalPages) return;
		    	this._getSelectList(this.page + 1);
		    }
		},
		created() {
		    this._getIndexList();
		    this._getRankList();
		    this._getSliderList();
		    this._getSelectList(this.page);
		},
		components: {
			Slider,
			Notice,
			CourseList,
			Scroll,
			rankList,
			Loading
		}
	}
</script>

<style lang="scss" scoped src="./welcome.scss">

</style>