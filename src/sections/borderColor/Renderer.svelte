<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";
	import Grid from "../../components/swatches/Grid.svelte";
	import Swatch from "../../components/swatches/Swatch.svelte";

	export let classes;
	export let variants;
</script>

<StyleguideSection name="Border Color" description="Make your walls a little more colorful." variants={variants}>
	<Grid {classes} let:className={cn}>
		<Swatch swatch={cn.name} squircle stroked></Swatch>
	</Grid>
</StyleguideSection>
