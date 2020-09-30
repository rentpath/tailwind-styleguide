<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";
	import SpacingTable from "../../components/SpacingTable.svelte";
	import ClassName from "../../components/ClassName.svelte";

	export let classes;
	export let variants;
</script>

<style>
	.description {
		margin-bottom: var(--common-gutter);
	}

	.swatch {
		height: 32px;
	}

	.swatch {
		width: auto;
		background-color: var(--primary-color);
		border-radius: 8px;
	}
</style>

<StyleguideSection name="Width" description="Width great power comes great responsibiity" variants={variants}>
	<p class="description">
		Exceedingly large widths &mdash; like those that use <ClassName>vw</ClassName> units &mdash; may be larger than they appear in this table.
	</p>
	<SpacingTable {classes} let:measurement={m}>
		<div class="swatch" style={`width: ${m.value + (m.unit || "")}`}></div>
	</SpacingTable>
</StyleguideSection>
