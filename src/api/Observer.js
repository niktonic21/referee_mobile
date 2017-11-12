export const getData = () => {
    const url = 'http://jobb.sk/referee/delegacie/delegacie.json';
    return fetch(url)
        .then(res => res.json()).then(json => {
            return json;
        })
        .catch((error) => {
            console.error(error);
        });
};

export const getDelegat = (del) => {
    const url = 'http://jobb.sk/referee/delegacie/'+ del;
    return fetch(url)
        .then(res => res.json()).then(json => {
            return json;
        })
        .catch((error) => {
            console.error(error);
        });
};

export const getDelegationList = (id) => {

    const url = 'http://jobb.sk/referee/delegacie/delegacia'+ id +'.json';
    return fetch(url)
        .then(res => res.json()).then(json => {
            return json;
        })
        .catch((error) => {
            console.error(error);
        });
};
