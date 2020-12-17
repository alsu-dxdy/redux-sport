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