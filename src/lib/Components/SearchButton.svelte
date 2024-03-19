<script lang="ts">
	import SearchIcon from './svg/SearchIcon.svelte';
	export let styleclass: string =
		'flex 3xl:hidden 2xl:hidden xl:hidden lg:hidden text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-xl mr-2';
</script>

<button
	class={styleclass}
	type="button"
	data-collapse-toggle="navbar-search"
	aria-controls="navbar-search"
	aria-expanded="false"
>
	<SearchIcon />
</button>

<!-- class=" absolute inset-y-0 start-0 text-4xl font-bold px-2 py-2 md:hidden outline-none rounded-full
focus:outline-none hover:bg-gray-300 focus:ring-gray-300 -->
