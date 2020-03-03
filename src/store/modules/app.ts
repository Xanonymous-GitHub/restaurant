import {ActionTree, GetterTree, MutationTree, Module} from 'vuex';
import {UserLevel} from "@/store/types/user";
import {AppState} from "@/store/types/app";
import {RootState} from '@/store/types/root';
import {Rating} from "@/store/types/restaurant";

const namespaced = true;

const state: AppState = {
    user: {
      id: "Xanonymous",
      name: "TeU Lin",
      level: UserLevel.ALPHA,
      avatar: require("@/assets/Xanonymousico512fixed.png"),
      description: "Eat more slow can let u eat more, Majaja.",
      verified: 1
    },
    restaurant: {
      name: "I AM PASTA",
      subName: "Italian restaurant",
      description: "very very good!",
      rating: Rating.FIVE
    }
  }
;

const mutations: MutationTree<AppState> = {};

const getters: GetterTree<AppState, RootState> = {
  user: (state): AppState['user'] => state.user,
  restaurant: (state): AppState['restaurant'] => state.restaurant
};

const actions: ActionTree<AppState, RootState> = {};

export const app: Module<AppState, RootState> = {
  namespaced,
  state,
  mutations,
  getters,
  actions
};
