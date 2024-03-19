<script lang="ts">
    let liKlass: string = 'block py-2 px-3 text-gray-800 rounded hover:underline hover:underline-offset-[20px] hover:decoration-4 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:no-underline md:decoration-transparent'
    let ulKlass:string ='flex flex-col p-4 mt-0 lg:p-0 font-medium rounded-lg lg:space-x-4 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 xl:p-0 xl:space-x-4 xl:flex-row xl:mt-0 xl:border-0xl:bg-white 2xl:p-0 2xl:space-x-4 2xl:flex-row 2xl:mt-0 2xl:border-0 3xl:p-0 3xl:space-x-4 3xl:flex-row 3xl:mt-0 3xl:border-0'
    let service: string = ''
    let href: string = '/'
    export {liKlass as class}
    export {ulKlass as class}
    export service
    export href
</script>

<ul
	class = {ulKlass}
>
	<li>
		<a
			{href}
			class={liKlass}>{service}</a
		>
	</li>

</ul>

