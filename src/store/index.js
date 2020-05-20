import { writable } from 'svelte/store';
import { 
    getDay, 
    format, 
    getDaysInMonth, 
    addMonths, 
    startOfMonth, 
    subMonths, 
    isToday,
    addDays,
    subDays,
    getDate,
    getDayOfYear,
    endOfMonth
} from 'date-fns'

const myStore = () => {
    const calendarView = {
        today: '',
        renderMiniCalendar: false,
        selected: {
            month: '',
            year: '',
            day: '',
            dateObj: {},
            format: ''
        },
        viewType: 'month'
    }

    function formateSelectedDate(val) {
        return format(val, 'MMMM yyyy')
    }

    const { subscribe, update, set } =  writable(calendarView)

    const methods = {
        init() {
            update(calendarView => {
                calendarView.today = new Date(),
                calendarView.selected.dateObj = new Date()
                calendarView.selected.format = formateSelectedDate(calendarView.selected.dateObj)
                calendarView.renderMiniCalendar = true
                return calendarView
            })
        },

        updateSelectedMonth(val) {
            update(calendarView => {
                calendarView.selected.dateObj = val
                calendarView.selected.format = formateSelectedDate(val)
                return calendarView
            })
        },

        resetMiniCal() {
            update(calendarView => {
                calendarView.renderMiniCalendar = false
                return calendarView
            })
        }
    }

    return {
        subscribe,
        update,
        set,
        ...methods
    }
}

export default myStore();