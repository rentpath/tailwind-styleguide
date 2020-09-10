<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";
	import SpacingTable from "../../components/SpacingTable.svelte";
	import ClassName from "../../components/ClassName.svelte";

	export let classes;
	export let variants;
</script>

<style>
	.description {
		width-bottom: var(--common-gutter);
	}

	.swatch,
	.swatch-outer,
	.swatch-inner {
		height: 32px;
	}

	.swatch-outer, .swatch-inner {
		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;
	}

	.swatch-inner {
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
	}

	.swatch {
		display: inline-block;
		width: auto;
		background-color: var(--less-subtle-color);
		border-radius: 8px;
		width: 850px;
	}

	.swatch-inner {
		display: inline-block;
		width: 100%;
		background-color: var(--primary-color);
	}
</style>

<StyleguideSection name="Width" description="Width great power comes great responsibiity" variants={variants}>
	<p class="description">
		All width options
	</p>
	<SpacingTable {classes} let:measurement={m}>
		<div class="swatch">
			<div class="swatch-outer">
				{#if m.unit === 'vw'}
					<center>skipping display of `100vw`, it disrupts the visual layout</center>
				{:else}
					<div class="swatch-inner" style={`width: ${m.value + (m.unit ?? "")}`}></div>
				{/if}
			</div>
		</div>
	</SpacingTable>
</StyleguideSection>
