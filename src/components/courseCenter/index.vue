<template>
	<div>
		<top-navi></top-navi>
		<section class="xueFirst longTop">
		    <!-- <div class="course-banner swiper-container" id="swiper-container">
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
		    </div> -->
		</section>
		<section class="xue_firstFace">
		    <div class="liveRecommend courseSelected">
		    	<course-list :list="courses"></course-list>
		    </div>
		</section>
	</div>
</template>

<script>
	import { ajax } from '@/common/js/utils';
	import { getFtlParams } from '@/common/js/api';
	import CourseList from '@/components/course-list';
	import TopNavi from '@/components/top-navi';

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
			},
			_getFtl() {
				getFtlParams();
			}
		},
		created() {
			this._getFtl();
			this._getList();
		},
		components: {
			CourseList,
			TopNavi
		}
	}
</script>

<style lang="scss">
	@import '../../common/styles/helpers.scss';

	body {
		background: #fff;
	}
	.xueFirst {
		-webkit-text-size-adjust:none;
		font-weight: normal;
		.course-banner {
			position: relative;
			left: 0;
			top: 0;
			width: 100%;
			height: px2rem(220);
			text-align: center;
			overflow: hidden;
			.banner-wrapper {
	            position: absolute;
	            left: 0;
	            top: 0;
	            width: 9999999px;
	            height: px2rem(220);
	            .banner-item {
	                width: px2rem(750);
	                height: px2rem(220);
	                img {
	                    width: 100%;
	                    height: 100%;
	                }
	                .banner-link {
	                    display: block;
	                    width: 100%;
	                    height: 100%;
	                }
	            }
	        }
	        .switch-dot {
	            position: absolute;
	            top: px2rem(197);
	            left: 0;
	            margin-bottom: px2rem(15);
	            width: 100%;
	            height: px2rem(8);
	            z-index: 2;
	            .swiper-pagination-bullet {
	                display: inline-block;
	                margin: 0 px2rem(7);
	                width: px2rem(10);
	                height: px2rem(10);
	                border-radius: 50%;
	                background: #fff;
	            }
	        }
		}
		&.longTop {
			margin-top: px2rem(92);
		}
	}
</style>