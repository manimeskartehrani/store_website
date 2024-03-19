<script lang="ts">
	import UserIcon from './svg/UserIcon.svelte';
</script>

<button
	type="button"
	class="relative inline-flex mb-1 items-center p-2 font-medium text-bold text-gray-800 rounded-lg focus:outline-none"
>
	<UserIcon />
	<div
		class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-1 -end-1"
	>
		21
	</div>
</button>
