<script>
	export let name;
	export let description = "";
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
		</div>
	</div>
	<div class="right">
		<slot></slot>
	</div>
</section>
