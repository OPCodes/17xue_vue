<template>
	<div class="courseCenter">
		<section class="xueFirst longTop">
		    <div class="course-banner swiper-container" id="swiper-container">
		        <ul class="banner-wrapper swiper-wrapper">
		            <li class="banner-item fl swiper-slide">
		                <a class="banner-link">
		                    <img src="" alt="">
		                </a>
		                <a class="banner-link">
		                    <img src="" alt="">
		                </a>
		            </li>
		        </ul>
		        <ul class="switch-dot"></ul>
		    </div>
		</section>
		<section class="xue_firstFace">
		    <div class="liveRecommend courseSelected">
		    	<course-list :list="courses"></course-list>
		        <!-- <div class="courseSelectedList">
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
		                        	<img class="pic_small">
		                        </div>
		                        <div class="teacherName fl">阿紫老师</div>
		                    </div>
		                    <i class="iconRecommend"></i>
		                    <div class="coursePrice"><span class="doll">¥</span><span>3990</span></div>
		                </a>
		            </div>
		        </div> -->
		    </div>
		</section>
	</div>
</template>

<script>
	import { ajax } from '@/common/js/utils';
	import CourseList from '@/components/course-list';

	export default {
		data() {
			return {
				courses: [],
				page: 0,
				totalPage: 1
			};
		},
		methods: {
			_getList() {
				ajax({ url: '/api/course/center/subject/list.vpage', type: 'post' })
				.then(res => {
					if(res.success) {
						this.courses = res.data.courses.content;
						this.page = res.data.courses.number;
						this.totalPage = res.data.courses.totalPage;
					}
				});
			}
		},
		created() {
			this._getList();
		},
		components: {
			CourseList
		}
	}
</script>

<style lang="scss">
	body {
		background: #fff;
	}
</style>