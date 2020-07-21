<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";
	import ClassName from "../../components/ClassName.svelte";

	export let meta;

	// CSS Grid can't do a column-fill with dynamic row count
	// So we have to hack it with an inline style calculated from
	// the number of elements we want to populate
	$: numRows = Math.ceil(meta.classNames.length / 2);
	$: gridTemplateRows = `grid-template-rows: repeat(${numRows}, 1fr)`;
</script>

<style>
	.text {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-flow: column;
		gap: 16px 16px;
	}

	p {
		font-size: 0.9rem;
		margin-top: 4px;
	}

	@media (max-width: 900px) {
		.text {
			display: block;
		}

		.leading-cell {
			margin-bottom: 24px;
		}

		.leading-cell:last-child {
			margin: 0;
		}
	}
</style>

<StyleguideSection name="Line Height" description="Respect the personal space of your text." variants={meta.variants}>
	<div class="text" style={gridTemplateRows}>
		{#each meta.classNames as className}
			<div class="leading-cell">
				<ClassName>.{className}</ClassName>
				<p class={className}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, laborum dolor accusantium itaque voluptate dolores enim aliquid, nisi cupiditate, veritatis non nam! Nesciunt nihil doloribus, suscipit cumque corrupti dolor dolorum!</p>
			</div>
		{/each}
	</div>
</StyleguideSection>
