<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";
	import Grid from "../../components/swatches/Grid";

	export let meta;
</script>

<StyleguideSection name="Background Colors" description="Most of the colors of the rainbow." variants={meta.variants}>
	<Grid swatches={meta.classNames} circle fancy></Grid>
</StyleguideSection>
