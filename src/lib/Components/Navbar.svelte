<script lang="ts">
	import MenuItem from './MenuItem.svelte';
	import SearchButton from './SearchButton.svelte';
	import HamburgerMenuBotton from './HamburgerMenuBotton.svelte';
	import UserButton from './UserButton.svelte';
	import CardButton from './CardButton.svelte';
	import SearchButtonMd from './SearchButtonMd.svelte';
</script>

<nav class=" bg-transparent dark:bg-gray-900">
	<!-- one div contain entier section -->
	<div class="max-w-screen-2xl flex flex-wrap h-auto items-center justify-between mx-auto p-4">
		<!-- Left side of Navbar for md view -->
		<div class="flex flex-1 h-auto lg:order-1 xl:order-1 2xl:order-1 3xl:order-1">
			<a href="/" class=" space-x-2 rtl:space-x-reverse">
				<span
					class=" flex flex-1 self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
					>Mani Store</span
				>
			</a>
		</div>
		<!-- Middle section of Navbar for md view -->
		<div class="flex md:justify-end md:order-2 lg:order-4 xl:order-4 2xl:order-4 3xl:order-4">
			<!-- Menu Items of Navbar for md view -->

			<div class=" flex p-2 md:items-center">
				<!-- Search Icon of Navabr  -->
				<!-- Search Icon -->
				<SearchButton />

				<!-- Hamberger Menu -->
				<div class=" flex ml-2 md:order-4">
					<HamburgerMenuBotton />
				</div>
				<!-- User section of navbar  -->
				<div class=" flex md:items-center md:order-2">
					<UserButton />
				</div>
				<!-- Basket section of Navabr  -->
				<div class="flex justify-center items-center md:order-3">
					<CardButton />
				</div>
			</div>
		</div>
		<div
			class=" hidden items-center justify-end lg:flex lg:flex-1 lg:w-auto lg:order-3 xl:flex xl:flex-1 xl:w-auto xl:order-3 2xl:flex 2xl:flex-1 2xl:w-auto 2xl:order-3 3xl:flex 3xl:flex-1 3xl:w-auto 3xl:order-3 md:w-full md:order-2"
			id="navbar-search"
		>
			<div class="relative lg:flex xl:flex md:mt-1">
				<!-- Search icone for md view -->
				<SearchButtonMd />
				<input
					type="text"
					id="search-navbar"
					class="block w-full p-2 ps-10 text-sm bg-gray-100 text-gray-900 rounded-3xl outline-none dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
					placeholder="Search..."
				/>
			</div>
		</div>
		<div
			class=" hidden justify-center lg:flex lg:flex-1 lg:w-auto lg:order-2 xl:flex xl:flex-2 xl:w-auto xl:order-2 2xl:flex 2xl:flex-1 2xl:w-auto 2xl:order-2 3xl:flex 3xl:flex-1 3xl:w-auto 3xl:order-2 md:w-full md:order-2"
		>
			<MenuItem service="Home" href="/" extraStyle="md:hidden" />
			<MenuItem service="About" href="/" extraStyle="md:hidden" />
			<MenuItem service="Services" href="/" extraStyle="md:hidden lg:hidden" />
			<MenuItem service="Services2" href="/" extraStyle="md:hidden lg:hidden xl:hidden " />
			<MenuItem
				service="Services3"
				href="/"
				extraStyle="md:hidden lg:hidden xl:hidden 2xl:hidden"
			/>
		</div>
	</div>
</nav>
