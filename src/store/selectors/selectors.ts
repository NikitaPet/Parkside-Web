import slices from '@/store/slices'

export const getStore = (store) => store
export default getStore

export const getData = (store) => store?.[slices.name]
