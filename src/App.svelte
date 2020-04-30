<script>
	import TopNav from './top-nav/top.nav.svelte'
	import SideNav from './side-nav/side.nav.svelte'
	import Calender from './main-calendar/calender.svelte'
</script>

<div class="main-app c-flex c-flex-column full-height">
	<TopNav />

	<div class="c-flex c-flex full-height">
		<SideNav />
		<Calender />
	</div>
	
</div>