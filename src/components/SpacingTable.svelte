<script>
	import ClassName from "./ClassName.svelte";

	export let classes;
</script>

<style>
	em {
		font-style: normal;;
	}

	.table {
		display: grid;
		grid-template-columns: 1fr 1fr 6fr;
		align-items: stretch;
	}

	.cell {
		display: flex;
		align-items: center;
		padding: 4px 8px;
		border-bottom: 1px solid var(--subtle-color);
	}

	.cell:nth-child(3n - 2) {
		padding-left: 0;
	}

	.cell:nth-child(3n) {
		padding-right: 0;
	}

	.heading {
		font-weight: 600;
	}

	.measurement {
		text-align: right;
	}

	.cell.heading {
		border: none;
	}

	.cell.measurement {
		justify-content: flex-end;
	}

	.cell.slot {
		overflow: hidden;
	}

	.unit {
		font-size: 0.8rem;
		color: #999;
		display: inline-block;
		padding-left: 4px;
	}
</style>

<section class="table">
	<em class="cell heading">Class</em>
	<em class="cell heading measurement">Measurement</em>
	<em class="cell heading">Sample</em>

	{#each classes as c}
		<div class="cell">
			<ClassName>.{c.name}</ClassName>
		</div>
		<div class="cell measurement">
			<span class="measurement">{c.measurement.value}<em class="unit">{c.measurement.unit ?? ""}</em></span>
		</div>
		<div class="cell slot">
			<slot measurement={c.measurement}></slot>
		</div>
	{/each}
</section>
