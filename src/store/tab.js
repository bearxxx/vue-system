export default {
  state: {
    isShow: false,
    menu: [],
    currentMenu: {},
    tabsList: [
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "s-home",
      },
    ],
  },
  mutations: {
    selectMenu(state, value) {
      if (value.name !== "home") {
        state.currentMenu = value
        let result = state.tabsList.findIndex((item) => item.name === value.name)
        result === -1 ? state.tabsList.push(value) : ""
      } else {
        state.currentMenu = null
      }
    },
    closeTab(state, val) {
      let result = state.tabsList.findIndex((item) => {
        item.name === val.name
      })
      state.tabsList.splice(result, 1)
    },
    showMenu(state) {
      state.isShow = !state.isShow
    },
  },
  actions: {},
  modules: {},
}
