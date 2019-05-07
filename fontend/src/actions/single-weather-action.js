import { createAction } from 'redux-act';


const setHasDetail = createAction('get has detail', (data) => {
    console.log('in set has detail, ' + data);
    return data;
});

const getHasDetail = createAction('get has detail');


export default {
    setHasDetail,
    getHasDetail
};