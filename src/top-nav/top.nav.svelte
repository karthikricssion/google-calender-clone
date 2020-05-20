<div class="g-top-navigation">
    <header>
        <div class="logo-toggle-bar">
            { $CalendarViewStore.selected.format }

            <button on:click={setToday}>Today</button>
        </div>
    </header>
</div>

<script>
    import CalendarViewStore from '../store';

    function setToday() {
        CalendarViewStore.init()
    }
</script>

<style>
    .g-top-navigation {
        flex: 0 0 64px;
        border-bottom: 1px solid #dadce0;
        padding: 8px;
    }

    .g-top-navigation header {
        width: 100%;
    }
</style>