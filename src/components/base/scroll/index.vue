<template>
	<div class="wrapper" ref="wrapper">
		<slot></slot>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';

	export default {
		props: {
			dir: {
				type: String,
				default: 'y'
			}
		},
		methods: {
			_initWidth() {
				let totalWidth = 0;
				// this.children = 
			},
			_initScroll() {
				this.scroll = new BScroll(this.$refs.wrapper, {
					scrollX: true,
					click: true,
					eventPassthrough: 'vertical'
				});
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.dir === 'x' && this._initWidth();
				this._initScroll();
			});
		}
	}
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