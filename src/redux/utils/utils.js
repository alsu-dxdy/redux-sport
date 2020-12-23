// filterTasks прин з-чи и зн акт ф-ра
// После чего ф-ет з-чи по типу акт-сти и воз-ет new массив
export const filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
        case 'running':
            return tasks.filter(task => task.typeSport === 'Running');
            break;
        case 'cycling':
            return tasks.filter(task => task.typeSport === 'Cycling');
            break;
        case 'skiing':
            return tasks.filter(task => task.typeSport === 'Skiing');
            break;
        case 'walking':
            return tasks.filter(task => task.typeSport === 'Walking');
            break;
        default:
            return tasks;
    }
}

export const sorterTasks = (tasks, sortBy) => {
    switch (sortBy) {
        case 'date':
            // Date.parse('YYYY-MM-DD') возвращает таймстамп
            return tasks.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
            break;
        case 'distance':
            return tasks.sort((a, b) => a.km - b.km);
            break;
        case 'default':
            return tasks.sort((a, b) => a.id - b.id);
            break;

        default:
            return tasks;
    }
}
