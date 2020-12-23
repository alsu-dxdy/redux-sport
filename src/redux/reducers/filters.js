import { CHANGE_FILTER, CHANGE_SORTER } from '../../constants';

const BASE_FILTER = 'all';
const BASE_SORTER = 'default';

export const filter = (state = BASE_FILTER, { type, activeFilter }) => {
    switch (type) {
        case CHANGE_FILTER:
            return activeFilter;
            break;
        default:
            return state;
    }
}


export const sorter = (state = BASE_SORTER, { type, activeSorter }) => {
    switch (type) {
        case CHANGE_SORTER:
            return activeSorter;
            break;
        default:
            return state;
    }
}

// export { filter, sorter };