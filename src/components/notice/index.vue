<template>
	<section class="activity clearfix">
	    <span class="activity_col activity_title fl">{{title}}</span>
	    <span class="activity_col activity_para fl">{{para}}</span>
	    <span class="activity_col activity_bar fl"></span>
	    <a class="activity_col activity_btn fl" :href="btnLink">{{btnTxt}}</a>
	</section>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '【活动】'
			},
			para: {
				type: String,
				default: ''
			},
			btnTxt: {
				type: String,
				default: '去查看'
			},
			btnLink: {
				type: String,
				default: 'javascript: void(0);'
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../common/styles/helpers.scss';

	.activity {
		width: px2rem(710);
		height: px2rem(78);
		margin: 0 auto px2rem(20) auto;
		border-radius: px2rem(100);
		background: #FFF url(icon_activity.png) no-repeat px2rem(40) center;
		background-size: px2rem(30) px2rem(28);
		line-height: px2rem(78);
		padding-left: px2rem(67);
		box-sizing: border-box;
		.activity_col {
			display: block;
			&.activity_title {
				font-size: px2rem(30);
				color: #FF6E6E;
			}
			&.activity_para {
				width: px2rem(344);
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: px2rem(28);
				color: #5C6681;
			}
			&.activity_bar {
				width: 1px;
				height: px2rem(24);
				background-color: #FF8581;
				margin-right: px2rem(20);
				margin-left: px2rem(32);
				margin-top: px2rem(27);
			}
			&.activity_btn {
				font-size: px2rem(24);
				color: #FF6E6E;
			}
		}
	}
</style>