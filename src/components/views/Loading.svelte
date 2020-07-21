<script>
	import { state$ } from "./../../stores/state";

	const RADIUS = 54;
	const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

	let progress;

	$: percentage = $state$.progress;
	$: dashoffset = CIRCUMFERENCE * (1 - percentage);
</script>

<style>
	.wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	svg {
		transform: rotate(-90deg);
	}

	.bg {
		fill: none;
		stroke: var(--subtle-color);
	}

	.progress {
		fill: none;
		stroke: var(--primary-color);
		stroke-linecap: round;
	}
</style>

<div class="wrapper">
	<svg class="progress" width="120" height="120" viewBox="0 0 120 120">
		<circle class="bg" cx="60" cy="60" r={RADIUS} stroke-width="12" />
		<circle
			bind:this={progress}
			style={`stroke-dasharray: ${CIRCUMFERENCE}; stroke-dashoffset: ${dashoffset}`}
			class="progress"
			cx="60"
			cy="60"
			r={RADIUS}
			stroke-width="12" />
	</svg>
</div>
