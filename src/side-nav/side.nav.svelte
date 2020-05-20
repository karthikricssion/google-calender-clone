<div class="c-flex c-flex-column full-height g-side-navigation">
    <div class="side-bar-contents">
        <CalenderMini today={$CalendarViewStore.today} />
    </div>
</div>

<script>
    import CalenderMini from '../mini-components/calender.svelte'
    import CalendarViewStore from '../store';
</script>

<style>
    .g-side-navigation {
        flex: 0 0 256px;
        padding: 8px;
    }
</style>