<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";
	import Grid from "../../components/swatches/Grid";

	export let classes;
	export let variants;
</script>

<StyleguideSection name="Border Radius" description="For rounding off those sharp edges." variants={variants}>
	<Grid swatches={classes.map(c => c.name)} filled stroked></Grid>
</StyleguideSection>
