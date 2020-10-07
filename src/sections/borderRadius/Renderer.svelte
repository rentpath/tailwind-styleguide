<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";
	import Grid from "../../components/swatches/Grid.svelte";
	import Swatch from "../../components/swatches/Swatch.svelte";

	export let classes;
	export let variants;
</script>

<StyleguideSection name="Border Radius" description="For rounding off those sharp edges." variants={variants}>
	<Grid {classes} let:className={cn}>
		<Swatch swatch={cn.name} filled stroked></Swatch>
	</Grid>
</StyleguideSection>
