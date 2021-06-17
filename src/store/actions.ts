import { Project } from "../components/RandomProject";

export enum ModalActionTypes {
	ShowModal,
	HideModal,
}

export interface ModalAction {
	type: ModalActionTypes;
	payload?: Project;
}

export function showModal(payload?: Project): ModalAction {
	return {
		type: ModalActionTypes.ShowModal,
		payload,
	};
}

export function hideModal(): ModalAction {
	return {
		type: ModalActionTypes.HideModal,
	};
}
