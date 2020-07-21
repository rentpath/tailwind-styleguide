<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";
	import Grid from "../../components/Swatches/Grid";

	export let meta;
</script>

<StyleguideSection name="Box Shadow" description="Determines how angsty your components should be." variants={meta.variants}>
	<Grid swatches={meta.classNames} squircle filled></Grid>
</StyleguideSection>
