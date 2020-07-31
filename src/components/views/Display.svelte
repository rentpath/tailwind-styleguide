<script>
	import BackgroundColor from "./../../sections/backgroundColor/Renderer.svelte";
	import BorderRadius from "./../../sections/borderRadius/Renderer.svelte";
	import BoxShadow from "./../../sections/boxShadow/Renderer.svelte";
	import FontSize from "./../../sections/fontSize/Renderer.svelte";
	import LineHeight from "./../../sections/lineHeight/Renderer.svelte";
	import Margin from "./../../sections/margin/Renderer.svelte";
	import Padding from "./../../sections/padding/Renderer.svelte";
	import TextColor from "./../../sections/textColor/Renderer.svelte";

	export let parsed;
</script>

<svelte:head>
	{@html `<style type="text/css" ✂prettier:content✂="JHtwYXJzZWQucnVsZXMuam9pbigiXG4iKX0="></style>`}
</svelte:head>

<BackgroundColor
	classes={parsed.collection['backgroundColor'].classes}
	variants={parsed.collection['backgroundColor'].variants} />
<BorderRadius
	classes={parsed.collection['borderRadius'].classes}
	variants={parsed.collection['borderRadius'].variants} />
<BoxShadow
	classes={parsed.collection['boxShadow'].classes}
	variants={parsed.collection['boxShadow'].variants} />
<Padding
	classes={parsed.collection['padding'].classes}
	variants={parsed.collection['padding'].variants} />
<Margin
	classes={parsed.collection['margin'].classes}
	variants={parsed.collection['margin'].variants} />
<FontSize
	classes={parsed.collection['fontSize'].classes}
	variants={parsed.collection['fontSize'].variants} />
<LineHeight
	classes={parsed.collection['lineHeight'].classes}
	variants={parsed.collection['lineHeight'].variants} />
<TextColor
	classes={parsed.collection['textColor'].classes}
	variants={parsed.collection['textColor'].variants} />
