import { CHANGE_LIST_REPO, CHANGE_LIST_USER, SET_LOADING } from "./type";

export const actionSetListUsers = payload => ({
    type: CHANGE_LIST_USER,
    payload
})

export const actionSetListRepo = payload => ({
    type: CHANGE_LIST_REPO,
    payload
})

export const actionSetLoading = payload => ({
    type: SET_LOADING,
    payload
})
