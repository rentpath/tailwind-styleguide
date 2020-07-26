<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";

	export let classes;
	export let variants;
</script>

<StyleguideSection name="Padding" description="Your description here." variants={variants}>
	<code><pre>{JSON.stringify(classes, null, 4)}</pre></code>
</StyleguideSection>
