<script>
  import StyleguideSection from "../../components/StyleguideSection.svelte";
  // import SpacingTable from "../../components/SpacingTable.svelte";
  import Grid from "../../components/swatches/Grid.svelte";
  import Swatch from "../../components/swatches/Swatch.svelte";

  import ClassName from "../../components/ClassName.svelte";

  export let classes;
  export let variants;

  let specialHeights = ["h-auto", "h-px", "h-full", "h-screen"];
</script>

<style>
  .description {
    margin-bottom: var(--common-gutter);
  }

  .swatch {
    height: inherit;
  }

  .label {
    display: flex;
    flex-direction: column;
    place-items: center;
    text-align: center;
  }
</style>

<StyleguideSection
  name="Height"
  description="You must be this tall to ride"
  {variants}>
  <p class="description">
    Exceedingly large heights &mdash; like those that use
    <ClassName>vw</ClassName>
    units &mdash; may be larger than they appear in this table.
  </p>
  <Grid {classes} let:className={cn}>
    {#if specialHeights.includes(cn.name)}
      <div class="border-gray-900">
        <div class="bg-indigo-100 h-20 w-auto" />
        <em class="label">{cn.name} - limited display</em>
      </div>
    {:else}
      <div class="border-gray-900">
        <div class="bg-indigo-100 {cn.name}" />
        <em class="label">{cn.name}</em>
      </div>
    {/if}

  </Grid>
</StyleguideSection>
