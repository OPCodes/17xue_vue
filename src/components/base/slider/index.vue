<template>
	<div class="wrapper" ref="wrapper">
		<slot name="imgs"></slot>
		<slot name="dots"></slot>
	</div>
</template>
<script>
	import BScroll from 'better-scroll';

	export default {
		props: {
			list: {
				type: Array,
				default: []
			}
		},
		methods: {
			_initSlider() {
				this.slider = new BScroll(this.$refs.wrapper, {
					scrollX: true,
					scrollY: false,
					snap: true
				});
			}
		},
		created() {

		}
	};
</script>
<style scoped lang="scss">
	.wrapper {
		width: 100%;
		position: relative;
		left: 0;
		top: 0;
		overflow: hidden;
	}
</style>