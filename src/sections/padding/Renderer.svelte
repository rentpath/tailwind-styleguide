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

	.swatch,
	.swatch-fill {
		width: 32px;
		height: 32px;
		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;
	}

	.swatch {
		box-sizing: content-box;
		background-color: var(--less-subtle-color);
	}

	.swatch-fill {
		background-color: var(--primary-color);
	}
</style>

<StyleguideSection name="Padding" description="Give your components some breathing room." variants={variants}>
	<p class="description">
		All padding options are available in
		<ClassName>x</ClassName>,
		<ClassName>y</ClassName>,
		<ClassName>t</ClassName>,
		<ClassName>r</ClassName>,
		<ClassName>b</ClassName>, and
		<ClassName>l</ClassName> pseudo-variants. For example,
		<ClassName>.p-8</ClassName>
		would be availble to use as
		<ClassName>.px-8</ClassName>,
		<ClassName>.py-8</ClassName>,
		<ClassName>.pt-8</ClassName>,
		<ClassName>.pr-8</ClassName>,
		<ClassName>.pb-8</ClassName>,
		<ClassName>.pl-8</ClassName>
		variants as well to control left &amp; right, top &amp; bottom, top, right, bottom, and left paddings respectively.
	</p>
	<SpacingTable {classes} let:measurement={m}>
		<div class="swatch" style={`padding-right: ${m.value + (m.unit ?? "")}`}>
			<div class="swatch-fill"></div>
		</div>
	</SpacingTable>
</StyleguideSection>
