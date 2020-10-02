<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";
	import Grid from "../../components/swatches/Grid.svelte";

	export let classes;
	export let variants;
</script>

<StyleguideSection name="Border Color" description="Make your walls a little more colorful." variants={variants}>
	<Grid swatches={classes.map(c => c.name)} squircle stroked></Grid>
</StyleguideSection>
