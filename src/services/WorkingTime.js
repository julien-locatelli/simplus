
import {localStorageKeys} from '../constants';
import LocalStorage from './LocalStorage';

class WorkingTime {

    static getWorkingTimeArray() {

        return new Promise((resolve) => {
            resolve(LocalStorage.getItem(localStorageKeys.workingTimeArray) || []);
        });
    }

    static saveWorkingTimeArray(workingTimeArray) {

        return new Promise(resolve => {
            resolve(LocalStorage.setItem(localStorageKeys.workingTimeArray, workingTimeArray));
        });
    }
}

export default WorkingTime