import offline from 'react-native-simple-store';

export default function(store) {
    let currentDeleg;
    let currentReferee;

    store.subscribe(() => {
        const {
            offlineDelegLoaded,
            offlineRefereeLoaded,
            offlineDelegList,
            offlineRefereeList
        } = store.getState().items;

        if (offlineDelegLoaded && currentDeleg !== offlineDelegList) {
            offline.save('/seasons/20172018', offlineDelegList);
            currentDeleg = offlineDelegList;
        }
        if (offlineRefereeLoaded && currentReferee !== offlineRefereeList) {
            offline.save('/referees', offlineRefereeList);
            currentReferee = offlineRefereeList;
        }
    });
}
