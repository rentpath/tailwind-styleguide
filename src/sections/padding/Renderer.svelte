<script>
	import ClassName from "../../components/ClassName.svelte";
	import StyleguideSection from "../../components/StyleguideSection.svelte";

	export let meta;

	let assignedClass;
</script>

<style>
	table {
		width: auto;
	}

	thead {
		font-weight: 600;
		color: #999;
	}

	tbody tr {
		border-bottom: 1px solid #EFEFEF;
	}

	tbody td {
		padding: 8px 0;
	}

	.measure {
		font-weight: 600;
		padding-right: 16px;
		text-align: right;
	}

	.unit {
		color: #333;
		font-weight: normal;
		font-size: 0.8rem;
	}

	.block {
		background-color: #CCC;
		height: 24px;
	}
</style>

<StyleguideSection name="Padding" description="Utilities for controlling an element's padding." variants={meta.variants}>
	<table>
		<thead>
			<tr>
				<td>Class</td>
				<td class="measure">Width</td>
				<td></td>
			</tr>
		</thead>
		<tbody>
			{#each meta.spacings as spacing}
				<tr>
					<td>
						<ClassName>.p-{spacing.name}</ClassName>
					</td>
					<td class="measure">{spacing.value} <span class="unit">{spacing.unit ?? ""}</span></td>
					<td>
						<div style={`width: ${spacing.value}${spacing.unit ?? ""}`} class="block"></div>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</StyleguideSection>
