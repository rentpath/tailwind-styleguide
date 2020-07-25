<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";
	import Grid from "../../components/swatches/Grid";

	export let classes;
	export let variants;
</script>

<StyleguideSection name="Box Shadow" description="Determines how angsty your components should be." variants={variants}>
	<Grid swatches={classes.map(c => c.name)} squircle filled></Grid>
</StyleguideSection>
