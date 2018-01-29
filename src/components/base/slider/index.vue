<template>
	<div class="wrapper" ref="wrapper">
		<slot name="imgs"></slot>
		<slot name="dots"></slot>
	</div>
</template>
<script>
	import BScroll from 'better-scroll';
	import { addClass, delClass } from '@/common/js/utils';

	export default {
		props: {
			dotsClass: {
				type: String,
				defalut: ''
			},
			loop: {
				type: Boolean,
				defalut: false
			},
			autoplay: {
				type: Boolean,
				defalut: false
			},
			interval: {
				type: Number,
				default: 4000
			}
		},
		methods: {
			_initWidth() {
				let totalWidth = 0,
					sliderWidth = this.$refs.wrapper.clientWidth;
				this.children = this.$refs.wrapper.children[0].children;
				Array.prototype.forEach.call(this.children, (item, index) => {
					item.style.width = `${sliderWidth}px`;
					totalWidth += sliderWidth;
				});
				this.$refs.wrapper.children[0].style.width = `${totalWidth}px`;

				if(this.dotsClass !== '') {
					this.dots = this.$refs.wrapper.children[1].children;
					addClass(this.dots[0], this.dotsClass);
				}
			},
			_initSlider() {
				this.slider = new BScroll(this.$refs.wrapper, {
					scrollX: true,
					scrollY: false,
					momentum: false,
					snap: true,
					snapLoop: this.loop,
					snapThreshold: 0.3,
					snapSpeed: 400
				});

				this.currentPage = this.slider.currentPage.pageX;

				this.slider.on('scrollEnd', () => {
					this.currentPage = this.slider.currentPage.pageX;
					this._changeDots(this.currentPage);
					this.autoplay && this._play();
				});

				this.slider.on('beforeScrollStart', () => {
					this.autoplay && clearTimeout(this.timer);
				});

				this.autoplay && this._play();
			},
			_play() {
				this.timer = setTimeout(() => {
					let pageNum = (this.currentPage + 1) % this.children.length;
					this.slider.goToPage(pageNum);
					clearTimeout(this.timer);
				}, this.interval);
			},
			_changeDots(currentIndex) {
				Array.prototype.forEach.call(this.dots, (item, index) => {
					if(currentIndex == index) {
						addClass(item, this.dotsClass)
					} else {
						delClass(item, this.dotsClass);
					}
				});
			}
		},
		mounted() {
			this.$nextTick(() => {
				this._initWidth();
				this._initSlider();
			});
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