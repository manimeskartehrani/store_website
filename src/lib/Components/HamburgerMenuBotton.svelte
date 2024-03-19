<script lang="ts">
	import HamburgerMenuIcon from './svg/HamburgerMenuIcon.svelte';
	let styledButton: string =
		'inline-flex items-center p-2 w-10 h-10 justify-center text-sm me-1 text-black rounded-lg xl:hidden lg:hidden 2xl:hidden 3xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600';

	export { styledButton as class };
</script>

<button
	data-collapse-toggle="navbar-search"
	type="button"
	class={styledButton}
	aria-controls="navbar-search"
	aria-expanded="false"
>
	<HamburgerMenuIcon />
</button>
