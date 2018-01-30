<template>
	<div class="nomore" v-show="showNoMore">{{text}}</div>
</template>

<script>
	export default {
		props: {
			page: {
				type: Number,
				default: 0
			},
			totalPages: {
				type: Number,
				default: 1
			},
			text: {
				type: String,
				default: '没有更多了!'
			}
		},
		computed: {
			showNoMore() {
				return this.page + 1 === this.totalPages;
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../../common/styles/helpers.scss';

	.nomore {
	    text-align: center;
	    padding: px2rem(40) px2rem(30) px2rem(70) px2rem(30);
	    color: #6B6B6B;
	    font-size: px2rem(22);
	    background-color: #F2F5F9;
	}
</style>