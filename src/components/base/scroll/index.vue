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
				this.children = this.$refs.wrapper.children[0].children;
				let cardWidth = this.children[0].clientWidth + this.children[0].offsetLeft;
				this.$refs.wrapper.children[0].style.width = `${this.children.length * cardWidth}px`;
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