<script lang="ts">
	import CardIcon from './svg/CardIcon.svelte';
</script>

<button
	type="button"
	class="relative inline-flex items-center p-3 text-sm font-medium text-bold text-gray-800 rounded-lg focus:outline-none"
>
	<CardIcon />
	<div
		class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-1 -end-1"
	>
		20
	</div>
</button>
