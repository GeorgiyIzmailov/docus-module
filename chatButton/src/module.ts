import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'inkeep-chat-button',
    configKey: 'inkeep'
  },
  defaults: {},
  setup () {
    const { resolve } = createResolver(import.meta.url)

    addPlugin({
      src: resolve('./runtime/chatButtonPlugin'),
      name: 'ChatButton'
    });
  }
})
