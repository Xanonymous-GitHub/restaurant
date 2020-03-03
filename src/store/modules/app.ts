import {ActionTree, GetterTree, MutationTree, Module} from 'vuex';
import {UserLevel} from "@/store/types/user";
import {AppState} from "@/store/types/app";
import {RootState} from '@/store/types/root';

const namespaced = true;

const state: AppState = {
  user: {
    id: "Xanonymous",
    name: "TeU Lin",
    level: UserLevel.ALPHA,
    avatar: require("@/assets/Xanonymousico512fixed.png"),
    description: "Eat more slow can let u eat more, Majaja.",
    verified: 1
  }
};

const mutations: MutationTree<AppState> = {};

const getters: GetterTree<AppState, RootState> = {
  user: (state): AppState['user'] => state.user
};

const actions: ActionTree<AppState, RootState> = {};

export const app: Module<AppState, RootState> = {
  namespaced,
  state,
  mutations,
  getters,
  actions
};
