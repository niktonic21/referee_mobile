import offline from 'react-native-simple-store';
import { addDelegSuccess, addRefereeSuccess } from './actions/ItemsActions';

export default function(store) {
    let currentDeleg = {};
    let currentReferee = {};
    let currentTimestamp = null;

    store.subscribe(() => {
        const {
            offlineDelegLoaded,
            offlineRefereeLoaded,
            offlineDelegList,
            offlineRefereeList,
            onlineDelegList,
            onlineRefereeList,
            timestamp
        } = store.getState().items;

        if (offlineDelegLoaded && currentDeleg !== offlineDelegList) {
            offline.save('/seasons/20172018', offlineDelegList);
            currentDeleg = offlineDelegList;
        }
        if (offlineRefereeLoaded && currentReferee !== offlineRefereeList) {
            offline.save('/referees', offlineRefereeList);
            currentReferee = offlineRefereeList;
        }

        if (timestamp && currentTimestamp !== timestamp) {
            offline.save('timestamp', timestamp);
            currentTimestamp = timestamp;
        }
        if (Object.keys(offlineDelegList).length > 0 && Object.keys(onlineDelegList).length === 0) {
            store.dispatch(addDelegSuccess(offlineDelegList));
        }
        if (
            Object.keys(offlineRefereeList).length > 0 &&
            Object.keys(onlineRefereeList).length === 0
        ) {
            store.dispatch(addRefereeSuccess(offlineRefereeList));
        }
    });
}
