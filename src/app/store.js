// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from '../features/userSlice';

// export default configureStore({
//     reducer: {
//         counter: userReducer,
//     },
// }); 

import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/userSlice';

export default configureStore({
    reducer: {
        user: userReducer,
    },
});

