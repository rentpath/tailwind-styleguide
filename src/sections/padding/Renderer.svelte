<script>
	import StyleguideSection from "../../components/StyleguideSection.svelte";
	import ClassName from "../../components/ClassName.svelte";

	export let classes;
	export let variants;
</script>

<style>
	.swatch,
	.swatch-fill {
		width: 32px;
		height: 32px;
		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;
	}

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

	.swatch {
		box-sizing: content-box;
		background-color: var(--less-subtle-color);
	}

	.swatch-fill {
		background-color: var(--primary-color);
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

	.description {
		margin-bottom: var(--common-gutter);
	}
</style>

<StyleguideSection name="Padding" description="Respect your components' personal space." variants={variants}>
	<p class="description">
		All padding options are available in
		<ClassName>x</ClassName>,
		<ClassName>y</ClassName>,
		<ClassName>t</ClassName>,
		<ClassName>r</ClassName>,
		<ClassName>b</ClassName>, and
		<ClassName>l</ClassName> pseudo-variants. For example,
		<ClassName>.p-8</ClassName>
		would be availble to use as
		<ClassName>.px-8</ClassName>,
		<ClassName>.py-8</ClassName>,
		<ClassName>.pt-8</ClassName>,
		<ClassName>.pr-8</ClassName>,
		<ClassName>.pb-8</ClassName>,
		<ClassName>.pl-8</ClassName>
		variants as well to control left/right, top/bottom, top, right, bottom, and left paddings respectively.
	</p>
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
						<div class="swatch" style={`padding-right: ${c.measurement.value + (c.measurement.unit ?? "")}`}>
							<div class="swatch-fill"></div>
						</div>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</StyleguideSection>
