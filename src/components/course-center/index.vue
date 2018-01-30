<template>
	<div style="background: #fff;">
		<top-navi
			v-if="params"
			:subjects="params.subjects"
			:grades="params.grades"
		></top-navi>
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
		    	<course-list
		    		:list="courses"
		    		:page="page"
		    		:totalPages="totalPages"
		    		@scrollToEnd="loadMoreList"
		    	></course-list>
		    </div>
    		<loading style="padding-top: 30px;" :bg="'#F2F5F9'" v-show="listFlag"></loading>
		</section>
	</div>
</template>

<script>
	import { ajax, loadMore } from '@/common/js/utils';
	import { getFtlParams } from '@/common/js/api';
	import CourseList from '@/components/course-list';
	import TopNavi from '@/components/top-navi';
	import Loading from '@/components/base/loading';

	export default {
		data() {
			return {
				courses: [],
				page: 0,
				totalPages: 1,
				params: null,
				listFlag: false
			};
		},
		methods: {
			loadMoreList() {
				loadMore({
					flag: this.listFlag,
					page: this.page,
					totalPages: this.totalPages,
					fnSearch: this._getList
				});
			},
			_getList(page) {
				if(this.listFlag) return;
				this.listFlag = true;
				const data = Object.assign({
					grade: this.params.currentUser ? this.params.currentUser.grade : 0,
					subject: this.subject,
					clazzType: 0,
					coupon_cos_ids: []
				}, { page });
				ajax({ url: '/api/course/center/subject/list.vpage', type: 'post', data })
				.then(res => {
					if(res.success) {
						this.courses = this.courses.concat(res.data.courses.content);
						this.page = res.data.courses.number;
						this.totalPages = res.data.courses.totalPages;
					}
					this.listFlag = false;
				})
				.catch( err => {
					this.listFlag = true;
				});
			},
			_getFtl() {
				return getFtlParams().then(res => {
					this.params = res;
					return Promise.resolve();
				});
			}
		},
		created() {
			this.subject = this.$route.params.subject - 0;
			this._getFtl().then(() => {
				this._getList(this.page);
			});
		},
		watch: {
			$route() {
				this.subject = this.$route.params.subject - 0;
				this.page = 0;
				this.totalPage = 1;
				this._getList();
				document.documentElement.scrollTop = 0;
			}
		},
		components: {
			CourseList,
			TopNavi,
			Loading
		}
	}
</script>

<style lang="scss">
	@import '../../common/styles/helpers.scss';

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