import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    key: 'SCUMBOY',
    storage: window.localStorage,
  }).plugin(store)
}
