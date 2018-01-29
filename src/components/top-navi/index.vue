<template>
	<div class="xue_comp_topNavi">
	    <div class="level_wrapper clearfix">
	        <div class="grade_filter fl">
	            <span class="filter_txt"></span>
	        </div>
	        <div id="subject_swiper" class="subject_swiper_wrapper fl clearfix">
	            <ul class="subject_swiper clearfix">
	                <li class="swiper_col"></li>
	            </ul>
	        </div>
	    </div>
	    <div id="clazzType_swiper">
	        <ul class="clazzType_swiper clearfix">
	            <li class="swiper_col"></li>
	        </ul>
	    </div>
	    <!-- <div class="topNavi_cover"></div> -->
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped lang="scss">
	@import '../../common/styles/helpers.scss';

	.xue_comp_topNavi {
		width: 100%;
		height: px2rem(90);
		background: #fff;
		border: red;
		display: block;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 10;
		.xue_comp_gradeBox_main {
			position: absolute;
			left: 0;
			top: px2rem(91);
		}
		.level_wrapper {
			border-bottom: 1px solid #ccc;
			height: px2rem(90);
			background: #fff;
			position: relative;
			left: 0;
			top: 0;
		}
		.grade_filter {
			width: px2rem(190);
			box-sizing: border-box;
			border-right: 1px solid #212121;
			height: px2rem(40);
			margin-top: px2rem(25);
			padding-left: px2rem(30);
			.filter_txt {
				width: px2rem(96);
				text-align: center;
				display: block;
				color: #212121;
				font-size: px2rem(28);
				line-height: px2rem(40);
				position: relative;
				left: 0;
				top: 0;
				padding-right: px2rem(34);
				background: url(topNavi_arrow.png) no-repeat right center;
				background-size: px2rem(20) px2rem(8);
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.xue_comp_dropdown {
				top: px2rem(75);
				left: px2rem(10);
			}
		}
		.subject_swiper_wrapper {
			padding-left: px2rem(16);
			margin-top: px2rem(25);
			width: px2rem(490);
			overflow-x: scroll;
			box-sizing: border-box;
		}
		.subject_swiper {
			width: px2rem(550);
			.swiper_col {
				width: px2rem(100);
				height: px2rem(40);
				font-size: px2rem(28);
				color: #4A4A4A;
				line-height: px2rem(40);
				text-align: center;
				margin-right: px2rem(10);
				border-radius: px2rem(20);
				float: left;
				&.on {
					background-image: -webkit-gradient(linear, left top, left top, from(#fe626c), to(#ff775a));
					background-image: -webkit-linear-gradient(left, #fe626c 0%, #ff775a 100%);
					background-image: -moz-linear-gradient(left, #fe626c 0%, #ff775a 100%);
					background-image: -o-linear-gradient(left, #fe626c 0%, #ff775a 100%);
					background-image: linear-gradient(-90deg, #fe626c 0%, #ff775a 100%);
					color: #fff;
				}
			}
		}
		#clazzType_swiper {
			width: 100%;
			height: 0;
			position: relative;
			left: 0;
			top: 0;
			background: #fff;
			border-bottom: 1px solid #ccc;
			-webkit-transition: 0.3s all ease;
			-o-transition: 0.3s all ease;
			-moz-transition: 0.3s all ease;
			transition: 0.3s all ease;
			overflow: hidden;
			opacity: 0;
			z-index: 1;
			&.show {
				opacity: 1;
				height: px2rem(80);
			}
		}
		.clazzType_swiper {
			position: absolute;
			left: px2rem(30);
			top: 0;
			height: px2rem(80);
			width: auto;
			font-size: px2rem(26);
			line-height: px2rem(80);
			background: #fff;
			color: #6F6F6F;
			box-sizing: border-box;
			.swiper_col {
				float: left;
				margin-right: px2rem(55);
				&.on {
					color: #212121;
				}
			}
		}
		.topNavi_cover {
			width: px2rem(56);
			height: px2rem(40);
			margin-top: px2rem(25);
			position: absolute;
			right: 0;
			top: 0;
			background: url(topNavi_cover.png) no-repeat px2rem(20) center;
			background-size: px2rem(5) px2rem(24);
		}
	}
</style>