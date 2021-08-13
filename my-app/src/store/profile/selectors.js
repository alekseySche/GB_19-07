import { AUTHORS } from "../../constants";

export const selectName = (state) => state.profile.name || AUTHORS.human;