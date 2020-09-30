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

	.swatch-left,
	.swatch-right {
		width: 32px;
		height: 32px;
	}

	.swatch-left {
		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;
	}

	.swatch-right {
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
	}

	.swatch {
		display: inline-block;
		width: auto;
		height: 32px;
		background-color: var(--less-subtle-color);
		border-radius: 8px;
	}

	.swatch-left,
	.swatch-right {
		display: inline-block;
		background-color: var(--primary-color);
	}
</style>

<StyleguideSection name="Margin" description="Please respect social distancing guidelines." variants={variants}>
	<p class="description">
		All margin options are available in
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
		variants as well to control left &amp; right, top &amp; bottom, top, right, bottom, and left margins respectively.
	</p>
	<SpacingTable {classes} let:measurement={m}>
		<div class="swatch">
			<!--
			-- Because of how browsers render newlines around containers with display: inline-block,
			-- these elements have to be on the same line
			-->
			<div class="swatch-left" style={`margin-right: ${m.value + (m.unit || "")}`}></div><div class="swatch-right"></div>
		</div>
	</SpacingTable>
</StyleguideSection>
