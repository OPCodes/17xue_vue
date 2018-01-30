<template>
	<div class="loader">
		<div class="loader-inner ball-clip-rotate">
			<div></div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped lang="scss">
	@import '../../../common/styles/helpers.scss';

	$primary-color: #fe626c !default;
	$ball-size: px2rem(40) !default;
	$margin: px2rem(2) !default;

	@mixin global-bg() {
	    background-color: $primary-color;
	}

	@mixin global-animation() {
	    animation-fill-mode: both;
	}

	@mixin balls() {
	    @include global-bg();

	    width: $ball-size;
	    height: $ball-size;
	    border-radius: 100%;
	    margin: $margin;
	}

	@keyframes rotate {
		0% {
		    transform: rotate(0deg);
		}
		50% {
		    transform: rotate(180deg);
		}
		100% {
		 transform: rotate(360deg);
		}
	}

	.ball-clip-rotate {
		display: flex;
		justify-content: center;
		align-items: center;
	    > div {
	        @include balls();
	        @include global-animation();

	        border: px2rem(4) solid $primary-color;
	        border-bottom-color: transparent;
	        background: transparent !important;
	        animation: rotate 0.75s 0s linear infinite;
	    }
	}

</style>