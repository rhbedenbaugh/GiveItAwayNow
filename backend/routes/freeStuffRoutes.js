import {
    addNewFreeStuff,
    getFreeStuff,
    getFreeStuffWithID,
    UpdateFreeStuff,
    deleteFreeStuff
} from '../controllers/freeStuffControllers.js';

const routes = (app) => {
    app.route('/freeStuff')
    // GET endpoint
        .get(getFreeStuff)

    // POST endpoint
        .post(addNewFreeStuff);

    app.route('/freeStuff/:FreeStuffId')
    // get specific stuff
        .get(getFreeStuffWithID)

    // update specific stuff
        .put(UpdateFreeStuff)
    
    // delete specific stuff
        .delete(deleteFreeStuff);
};

export default routes;