<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";
	import Grid from "../../components/Swatches/Grid";

	export let meta;
</script>

<StyleguideSection name="Box Shadow" description="Utilities for adding shadows to elements." variants={meta.variants}>
	<Grid swatches={meta.classNames} squircle filled></Grid>
</StyleguideSection>
