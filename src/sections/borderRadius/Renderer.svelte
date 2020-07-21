<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";
	import Grid from "../../components/swatches/Grid";

	export let meta;
</script>

<StyleguideSection name="Border Radius" description="For rounding off those sharp edges." variants={meta.variants}>
	<Grid swatches={meta.classNames} filled stroked></Grid>
</StyleguideSection>
