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
    console.log(tasks[0]);
    switch (sortBy) {
        case 'date':
            console.log(tasks[0].date);
            return tasks.sort((a, b) => a.date - b.date);
            break;
        case 'distance':
            console.log(tasks[0].km);
            return tasks.sort((a, b) => a.km - b.km);
            break;
        case 'default':
            return tasks.sort((a, b) => a.id - b.id);
            break;

        default:
            return tasks;
    }
}
