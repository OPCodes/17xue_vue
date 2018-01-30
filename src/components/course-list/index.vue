<template>
	<div class="courseSelectedList">
	    <div class="courseSelectedItem" v-for="item in list">
	        <a class="toBlock" href="javascript:void(0);">
	            <div class="courseSelectedName">
	                <div class="subjectText">{{gradeMap[item.subject]}}</div>
	                <div class="subContent">{{item.name}}</div>
	            </div>
	            <div class="courseSelectedTimes">
	                <span class="day">{{item.note}}</span>
	            </div>
	            <div class="teacherItem clearfix">
	                <div class="courseSelectedTeacher fl" v-if="item.teacherImage">
	                    <img class="pic_small" v-url="item.teacherImage">
	                </div>
	                <div class="teacherName fl">{{item.teacherName}}</div>
	            </div>
	            <i class="iconRecommend" v-if="!!item.recommend"></i>
	            <div class="coursePrice"><span class="doll">¥</span><span>{{item.realPrice / 100}}</span></div>
	        </a>
	    </div>
		<!-- <div id="nomore" style="display: none;">没有更多啦!</div> -->
		<div class="listNull main" v-if="list.length == 0">
		    <img src="/public/images/wechat/null/course_null.png" alt="" class="listNull_img">
		    <div class="listNull_txt">暂无课程</div>
		</div>
	</div>
</template>

<script>
	const LOAD_LENGTH = 50;
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
					'1': "英语",
					'2': "数学",
					'3': "语文"
				}
			}
		},
		mounted() {
			document.addEventListener('scroll', () => {
				let { clientHeight, scrollHeight } = document.documentElement;
				let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				if(scrollHeight - clientHeight - scrollTop <= LOAD_LENGTH) this.$emit('scrollToEnd');
			});
		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/styles/helpers.scss';

	.courseSelectedList {
		overflow: hidden;
		.courseSelectedItem {
			position: relative;
			border-bottom: 1px solid #E3E8EE;
			margin-top: px2rem(48);
			margin-left: px2rem(28);
			margin-right: px2rem(30);
			.courseSelectedName {
				position: relative;
				font-size: px2rem(34);
				line-height: px2rem(34);
				color: #4A5060;
				padding-left: px2rem(86);
				.subjectText {
					width: px2rem(68);
					height: px2rem(40);
					background: url(icon_subject.png) no-repeat;
		            background-size: 100% 100%;
		            font-size: px2rem(22);
		            color: #FFF;
		            line-height: px2rem(36);
		            text-align: center;
		            position: absolute;
		            top: 0;
		            left: 0;
				}
				.subContent {
					width: px2rem(563);
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-weight: bolder;
				}
			}
			.courseSelectedTimes {
				font-size: px2rem(24);
				line-height: px2rem(40);
				height: px2rem(40);
				color: #9EA5B8;
				margin-top: px2rem(13);
				.time {
					padding-left: px2rem(30);
				}
				.classHour {
					padding-left: px2rem(20);
				}
			}
			.teacherItem {
				margin-top: px2rem(42);
				margin-bottom: px2rem(28);
				.courseSelectedTeacher {
					width: px2rem(50);
					height: px2rem(50);
					border-radius: 50%;
					background-color: #E3E9F8;
		            background-size: 100% 100%;
					overflow: hidden;
					.pic_small {
						width: 100%;
						height: 100%
					}
				}
				.teacherName {
					font-size: px2rem(24);
					line-height: px2rem(50);
					color: #CBCED8;
					margin-left: px2rem(20);
				}
			}
			.iconRecommend {
				display: block;
				position: absolute;
				width: px2rem(44);
				height: px2rem(50);
				top: 0;
				right: 0;
				background: url(icon_recommend.png) no-repeat;
				background-size: 100% 100%;
			}
			.iconReserved {
				display: block;
				position: absolute;
				width: px2rem(42);
				height: px2rem(50);
				top: 0;
				right: 0;
				background: url(icon_reserved.png) no-repeat;
				background-size: 100% 100%;
				&.toLeft {
					right: px2rem(64);
				}
			}
			.coursePrice {
				position: absolute;
				right: 0;
				bottom: px2rem(30);
				font-size: px2rem(34);
				color: #FF6E6E;
				line-height: px2rem(34);
				.doll {
					font-size: px2rem(26);
				}
			}
			.courseViewCont {
				width: 100%;
				height: px2rem(61);
				text-align: right;
				position: absolute;
				right: 0;
				bottom: px2rem(30);
				.openText {
					font-size: px2rem(26);
					line-height: px2rem(26);
					color: #FF6E6E;
				}
				.viewCont {
					font-size: px2rem(22);
					line-height: px2rem(22);
					color: #CBCED8;
					margin-top: px2rem(13);
				}
			}
		}
	}

	.listNull {
		&.main {
			padding-top: px2rem(250);
		}
		&.comp {
			padding-top: px2rem(88);
		}
		&.task {
			padding-top: px2rem(20);
			.listNull_img {
				width: px2rem(200);
				height: px2rem(200);
			}
		}
		.listNull_img {
			width: px2rem(280);
			height: px2rem(250);
			display: block;
			margin: 0 auto;
		}
		.listNull_txt {
			font-size: px2rem(22);
			line-height: px2rem(22);
			color: #6F6F6F;
			margin-top: px2rem(40);
			text-align: center;
		}
		.knowMore {
			display: block;
			width: px2rem(558);
			height: px2rem(88);
			margin: px2rem(299) auto 0 auto;
			text-align: center;
			font-size: px2rem(30);
			line-height: px2rem(88);
			border-radius: px2rem(50);
			border: solid 2px #F95862;
			background-color: #F2F5F9;
			color: #F95862;
		}
	}

	#nomore {
	    text-align: center;
	    padding: px2rem(40) px2rem(30) px2rem(70) px2rem(30);
	    color: #6B6B6B;
	    font-size: px2rem(22);
	    background-color: #F2F5F9;
	}
</style>