import { combineReducers } from "@reduxjs/toolkit";
import { ModalAction, ModalActionTypes } from "./actions";

import { Project } from "../components/RandomProject";

type ModalState = {
	modal: Project | null | undefined;
};

const initialState: ModalState = {
	modal: null,
};

function modalReducer(state = initialState, action: ModalAction): ModalState {
	switch (action.type) {
		case ModalActionTypes.ShowModal:
			return {
				...state,
				modal: action.payload,
			};
		case ModalActionTypes.HideModal:
			return {
				...state,
				modal: null,
			};
		default:
			return state;
	}
}

const rootReducer = combineReducers({ modal: modalReducer });
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
