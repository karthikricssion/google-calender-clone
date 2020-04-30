<div class="small-calendar">
    <div class="c-flex s-calendar-month-directions">
        <div class="s-cal-month-year">
            <span>{calendarData.selectedMonth.formated}</span>
        </div>
        <div class="s-cal-nxt-prv-actions">
            <span on:click={ getPrevMonth }>Prev</span>        
            <span on:click={ getNextMonth }>Next</span>
        </div>
    </div>

    <div class="c-flex s-calendar-header">
        {#each weekdays as weekday, i}
            <div class="item" >{ weekday }</div>
        {/each}
    </div>

    <div class="c-flex s-calendar-days-holder">
        <div class="days-container-holder">
            {#each calendarData.singleDays as singleDay, i}
                <div class="item" >{ singleDay.dateFormate }</div>

                {#if ((i + 1) % 7 == 0)}
                    <div class="break"></div>
                {/if}
            {/each}
        </div>
    </div>
</div>

<script>
    import { getDay, format, getDaysInMonth, addMonths, startOfMonth, subMonths } from 'date-fns'
    import locale from 'date-fns/esm/locale/en-US'
    const weekdays = [...Array(7).keys()].map(i => locale.localize.day(i, { width: 'abbreviated' }))

    function singleDataObj(obj) {
        this.date = obj.date || ''
        this.dateFormate = obj.dateFormate || 0
        this.weekDay = obj.weekDay || ''
        this.dayInMonth = obj.dayInMonth || 0
        this.dayInWeek = obj.dayInWeek || 0
        this.dayInYear = obj.dayInYear || 0
    }
    
    let calendarData = {
        today: {
            dateObj: new Date(),
            format: ''
        },
        selectedMonth: {
            dateObj: new Date(),
            formated: ''
        },
        calendarHeader: weekdays,
        totalNumberOfDaysInSelectedMonth: 0,
        totalBoxesToBeCreated: 42,
        singleDays: []
    }

    function renderCalenderObj() {
        calendarData.totalNumberOfDaysInSelectedMonth = getDaysInMonth(calendarData.selectedMonth.dateObj)
        calendarData.selectedMonth.formated = format(calendarData.selectedMonth.dateObj, 'MMMM yyyy')
        calendarData.singleDays = []

        var count = 1
        for(var i = 1; i <= calendarData.totalBoxesToBeCreated; i++ ) {  
            var currentWeekDayNo = getDay(calendarData.selectedMonth.dateObj)
            var dayObj = new singleDataObj({})
            if(i >= currentWeekDayNo && count <= calendarData.totalNumberOfDaysInSelectedMonth) {
                dayObj.dateFormate = count
                count = count + 1 
            } else {
                
            }

            calendarData.singleDays.push(dayObj)
        }
    }

    function getPrevMonth( action ) {
        var getStartOfCurrentMonth  = startOfMonth(calendarData.selectedMonth.dateObj)
        calendarData.selectedMonth.dateObj = subMonths(getStartOfCurrentMonth, 1)

        renderCalenderObj()
    }

    function getNextMonth() {
        var getStartOfCurrentMonth  = startOfMonth(calendarData.selectedMonth.dateObj)
        calendarData.selectedMonth.dateObj = addMonths(getStartOfCurrentMonth, 1)

        renderCalenderObj()
    }

    renderCalenderObj()

</script>

<style>
    .days-container-holder {
        display: flex;
        flex-wrap: wrap;
    }

    .break {
        flex-basis: 100%;
        height: 0;
    }

    .item {
        display: flex;
        flex: auto;
        flex: 0 0 36px;
        justify-content: center;
    }

    .s-calendar-month-directions {
        justify-content: space-between;
    }

    .s-calendar-month-directions .s-cal-month-year {

    }

    .s-calendar-month-directions .s-cal-nxt-prv-actions {

    }
</style>