<template>
	<div class="openCourseList">
	    <div class="openCourseItem clearfix" v-for="item in list">
	        <div class="teacherAvatar fl" :class="gradeMap[item.subject]">
	            <div class="picItem">
	                <img class="picT" v-url="item.teacherImage">
	            </div>
	        </div>
	        <div class="courseItem fl">
	            <div class="openCourseName">{{item.name}}</div>
	            <div class="openCourseTeacher">{{item.teacherName}}</div>
	            <div class="playNum">{{item.viewCount}}</div>
	            <div class="openCourseTag">{{item.note}}</div>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		data() {
			return {
				gradeMap: {
					'1': 'english',
					'2': 'auth',
					'3': 'chinese'
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/styles/helpers.scss';

	.openCourseList {
		.openCourseItem {
			width: px2rem(693);
			margin: 0 auto;
			padding-bottom: px2rem(30);
			padding-top: px2rem(30);
			border-bottom: 1px solid #E3E8EE;
			.teacherAvatar {
				width: px2rem(150);
				height: px2rem(200);
				border-radius: 8px;
				overflow: hidden;
				position: relative;
				&.auth {
					background: url(icon_openCourse_auth.png) no-repeat;
					background-size: 100% 100%;
				}
				&.english {
					background: url(icon_openCourse_english.png) no-repeat;
					background-size: 100% 100%;
				}
				&.chinese {
					background: url(icon_openCourse_chinese.png) no-repeat;
					background-size: 100% 100%;
				}
				.picItem {
					position: absolute;
					width: px2rem(180);
					height: px2rem(180);
					bottom: 0;
					left: px2rem(-15);
					z-index: 999;
					.picT {
						width: 100%;
						height: 100%;
					}
				}
			}
			.courseItem {
				margin-left: px2rem(30);
				.openCourseName {
					width: px2rem(513);
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-size: px2rem(34);
					line-height: px2rem(34);
					color: #4A5060;
					margin-top: px2rem(13);
					font-weight: medium;

				}
				.openCourseTeacher {
					font-size: px2rem(28);
					line-height: px2rem(40);
					color: #5C6681;
					margin-top: px2rem(12);

				}
				.playNum {
					font-size: px2rem(24);
					line-height: px2rem(40);
					margin-top: px2rem(3);
					color: #878E9F;
					background: url(icon_playBack.png) 0 center no-repeat;
		            background-size: px2rem(28) px2rem(26);
		            padding-left: px2rem(38);
				}
				.openCourseTag {
					font-size: px2rem(24);
					line-height: px2rem(40);
					color: #CBCED8;
					margin-top: px2rem(18);

				}
			}
		}
		.openCourseItem:last-child {
			border-bottom: none;
		}
	}
</style>