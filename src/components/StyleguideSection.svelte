<script>
	export let name;
	export let description = "";
	export let variants = [];
</script>

<style>
	.styleguide-section {
		display: flex;
		margin-bottom: var(--section-margin);
	}

	.left {
		width: var(--left-column-width);
		margin-right: var(--common-gutter);
		position: relative;
	}

	.sticky {
		position: sticky;
		top: var(--common-gutter);
	}

	.right {
		flex: 1;
	}

	h2 {
		font-size: 2rem;
		font-weight: 800;
	}

	em {
		font-style: normal;
		color: #999;
	}

	.variants {
		display: flex;
		flex-wrap: wrap;
		margin-top: 10px;
	}

	.variants li {
		padding: 4px 12px;
		font-size: 0.8rem;
		margin-right: 8px;
		margin-bottom: 8px;
		background-color: #2a62f5;
		color: #FFF;
		font-weight: 600;
		border-radius: 12px;
		border-top-left-radius: 0;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
	}

	@media (max-width: 768px) {
		.styleguide-section {
			flex-direction: column;
		}

		.left {
			flex: 1;
			width: auto;
			margin: 0 0 var(--common-gutter) 0;
		}
	}
</style>

<section class="styleguide-section">
	<div class="left">
		<div class="sticky">
			<h2>{name}</h2>
			<em>{description}</em>
			{#if variants.length}
				<ul class="variants">
					{#each variants as variant}
						<li>{variant}:</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
	<div class="right">
		<slot></slot>
	</div>
</section>
