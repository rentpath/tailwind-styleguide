<script>
	import ClassName from "./ClassName.svelte";

	export let classes;
</script>

<style>
	table {
		width: 100%;
	}

	tbody tr {
		border-bottom: 1px solid var(--subtle-color)
	}

	thead td {
		font-weight: 600;
	}

	td {
		padding: 4px 8px;
	}

	td:first-child {
		padding-left: 0;
	}

	.measurement {
		text-align: right;
	}

	.unit {
		font-size: 0.8rem;
		color: #999;
		display: inline-block;
		padding-left: 4px;
	}
</style>

<table>
	<thead>
		<tr>
			<td>Class</td>
			<td class="measurement">Measurement</td>
			<td>Sample</td>
		</tr>
	</thead>
	<tbody>
		{#each classes as c}
			<tr>
				<td>
					<ClassName>.{c.name}</ClassName>
				</td>
				<td class="measurement">{c.measurement.value}<span class="unit">{c.measurement.unit ?? ""}</span></td>
				<td>
					<slot measurement={c.measurement}></slot>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
