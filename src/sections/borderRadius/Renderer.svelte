<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";
	import Grid from "../../components/Swatches/Grid";

	export let meta;
</script>

<StyleguideSection name="Border Radius" description="For rounding those sharp corners." variants={meta.variants}>
	<Grid swatches={meta.classNames} filled stroked></Grid>
</StyleguideSection>
