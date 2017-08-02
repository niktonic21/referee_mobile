import React from 'react';

  export const getData = () => {
        var url = 'http://jobb.sk/referee/delegacie/delegacie.json'

        return fetch(url)
            .then(res => res.json()).then(json => {
                return json;
            })
            .catch((error) => {
                console.error(error);
            })
    };

    export const getDelegationList = (id) => {

        var url = 'http://jobb.sk/referee/delegacie/delegacia'+ id +'.json'
        return fetch(url)
            .then(res => res.json()).then(json => {
                return json;
            })
            .catch((error) => {
                console.error(error);
            });
    };
