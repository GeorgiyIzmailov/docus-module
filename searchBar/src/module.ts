import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'inkeep-docus',
    configKey: 'inkeep'
  },
  defaults: {},
  setup () {
    const { resolve } = createResolver(import.meta.url)

    addPlugin({
      src: resolve('./runtime/searchBarPlugin'),
      name: 'SearchBar'
    });
  }
})
