<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";
	import Grid from "../../components/swatches/Grid.svelte";

	export let classes;
	export let variants;
</script>

<StyleguideSection name="Background Colors" description="Most of the colors of the rainbow." variants={variants}>
	<Grid swatches={classes.map(c => c.name)} circle fancy></Grid>
</StyleguideSection>
