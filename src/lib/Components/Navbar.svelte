<script lang="ts">
	import CardIcone from './svg/CardIcone.svelte';
	import HamburgerMenu from './svg/HamburgerMenu.svelte';
	import SearchIcone from './svg/SearchIcone.svelte';
	import UserIcon from './svg/UserIcon.svelte';
    import MenuItem2 from './Components/MenuItem2.svelte'
   
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
				<button
					type="button"
					data-collapse-toggle="navbar-search"
					aria-controls="navbar-search"
					aria-expanded="false"
					class="flex 3xl:hidden 2xl:hidden xl:hidden lg:hidden text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-xl mr-2"
				>
					<SearchIcone />
				</button>

				<!-- Hamberger Menu -->
				<div class=" flex ml-2 md:order-4">
					<button
						data-collapse-toggle="navbar-search"
						type="button"
						class=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm me-1 text-gray-800 rounded-lg xl:hidden lg:hidden 2xl:hidden 3xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-search"
						aria-expanded="false"
					>
						<HamburgerMenu />
					</button>
				</div>
				<!-- User section of navbar  -->
				<div class=" flex md:items-center md:order-2">
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
				</div>
				<!-- Basket section of Navabr  -->
				<div class="flex justify-center items-center md:order-3">
					<button
						type="button"
						class="relative inline-flex items-center p-3 text-sm font-medium text-bold text-gray-800 rounded-lg focus:outline-none"
					>
						<CardIcone />
						<div
							class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-1 -end-1"
						>
							20
						</div>
					</button>
				</div>
			</div>
		</div>
		<div
			class=" hidden items-center justify-end lg:flex lg:flex-1 lg:w-auto lg:order-3 xl:flex xl:flex-1 xl:w-auto xl:order-3 2xl:flex 2xl:flex-1 2xl:w-auto 2xl:order-3 3xl:flex 3xl:flex-1 3xl:w-auto 3xl:order-3 md:w-full md:order-2"
			id="navbar-search"
		>
			<div class="relative lg:flex xl:flex md:mt-1">
				<!-- Search icone for md view -->
				<button
					class=" absolute inset-y-0 start-0 text-4xl font-bold px-2 py-2 md:hidden outline-none rounded-full focus:outline-none hover:bg-gray-300 focus:ring-gray-300"
				>
					<SearchIcone />
				</button>

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
        
        <!-- <MenuItem /> -->
			<!-- <ul
				class=" flex flex-col p-4 mt-0 lg:p-0 font-medium rounded-lg lg:space-x-4 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 xl:p-0 xl:space-x-4 xl:flex-row xl:mt-0 xl:border-0xl:bg-white 2xl:p-0 2xl:space-x-4 2xl:flex-row 2xl:mt-0 2xl:border-0 3xl:p-0 3xl:space-x-4 3xl:flex-row 3xl:mt-0 3xl:border-0"
			>
				<li>
					<a
						href="/"
						class="block py-2 px-3 text-gray-800 rounded hover:underline hover:underline-offset-[20px] hover:decoration-4 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:no-underline md:decoration-transparent"
						aria-current="page">Home</a
					>
				</li>
				<li>
					<a
						href="/"
						class="block py-2 px-3 text-gray-800 rounded hover:underline hover:underline-offset-[20px] hover:decoration-4 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:no-underline md:decoration-transparent"
						>About</a
					>
				</li>
				<li>
					<a
						href="/"
						class="block py-2 px-3 text-gray-800 rounded hover:underline hover:underline-offset-[20px] hover:decoration-4 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:hidden md:no-underline md:decoration-transparent"
						>Services</a
					>
				</li>
				<li>
					<a
						href="/"
						class="block py-2 px-3 text-gray-900 rounded hover:underline hover:underline-offset-[20px] hover:decoration-4 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:hidden xl:hidden md:no-underline md:decoration-transparent"
						>Services2</a
					>
				</li>
				<li>
					<a
						href="/"
						class="block py-2 px-3 text-gray-900 rounded hover:underline hover:underline-offset-[20px] hover:decoration-4 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:hidden xl:hidden 2xl:hidden md:no-underline md:decoration-transparent"
						>Services3</a
					>
				</li>
			</ul> -->
		</div>
	</div>
</nav>
