import { CHANGE_LIST_REPO, CHANGE_LIST_USER } from "./type";

export const actionSetListUsers = payload => ({
    type: CHANGE_LIST_USER,
    payload
})

export const actionSetListRepo = payload => ({
    type: CHANGE_LIST_REPO,
    payload
})

