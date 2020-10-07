<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";
	import Grid from "../../components/swatches/Grid.svelte";
	import Swatch from "../../components/swatches/Swatch.svelte";

	export let classes;
	export let variants;
</script>

<StyleguideSection name="Box Shadow" description="Determines how angsty your components should be." variants={variants}>
	<Grid {classes} let:className={cn}>
		<Swatch swatch={cn.name} squircle filled></Swatch>
	</Grid>
</StyleguideSection>
