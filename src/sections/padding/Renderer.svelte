<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";

	export let meta;

	let assignedClass;
</script>

<style>
	.paddings {
		display: grid;
		grid-template-columns: 128px 2fr;
	}

	em {
		font-style: normal;
		font-weight: normal;
		font-weight: 600;
		font-size: 0.8rem;
		color: #999;
	}

	li {
		padding: 8px 16px;
		border-bottom: 1px solid #EFEFEF;
	}

	li:hover {
		background-color: var(--primary-color);
	}

	li:hover em {
		color: #FFF;
	}

	.canvas {
		height: 100vh;
		position: sticky;
		top: 0;
		width: auto;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.box-outer {
		display: inline-block;
		background-color: #EFEFEF;
	}

	.box-inner {
		width: 64px;
		height: 64px;
		background-color: #CCC;
	}
</style>

<StyleguideSection name="Padding" description="Utilities for controlling an element's padding." variants={meta.variants}>
	<!-- <code><pre>{JSON.stringify(meta.classNames, null, 4)}</pre></code> -->
	<div class="paddings">
		<ul class="list">
			{#each meta.classNames as className}
				<li on:mouseenter={() => assignedClass = className}><em>{className}</em></li>
			{/each}
		</ul>
		<div class="canvas">
			<div class={`box-outer ${assignedClass}`}>
				<div class="box-inner"></div>
			</div>
		</div>
	</div>
</StyleguideSection>
