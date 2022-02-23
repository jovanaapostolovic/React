import React from 'react';




// action.payload = {
//     title: "",
//     id: "",
// }

export const GamesReducer = (state, action) => {
    switch (action.type) {
        case "ADD_GAME":
            return [...state, {
                title: action.payload.title,
                id: action.payload.id
            }]
            // return [...state, action.payload]

            // return [...state, {
            //     title: action.payload,
            //     id: Math.random()*10
            // }]
        case "UPDATE_GAME":
            return []
    
        case "DELETE_GAME":
            return [...state].filter(game => game.id !== action.payload)

        default:
            return state
    }
}