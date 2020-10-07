<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";
	import Grid from "../../components/swatches/Grid.svelte";
	import Swatch from "../../components/swatches/Swatch.svelte";

	export let classes;
	export let variants;
</script>

<StyleguideSection name="Background Colors" description="Most of the colors of the rainbow." variants={variants}>
	<Grid {classes} let:className={cn}>
		<Swatch swatch={cn.name} circle fancy></Swatch>
	</Grid>
</StyleguideSection>
