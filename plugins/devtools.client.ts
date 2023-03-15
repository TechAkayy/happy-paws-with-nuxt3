import devtools from '@vue/devtools'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.env.NODE_ENV /* nuxtApp.isDev */ === 'development') {
    devtools.connect(/* host, port */)
    // Expose connect on window's object so that connection with Vue Devtools can be conditionally triggered from within Pinegrow
    //@ts-ignore
    // window.devtools = devtools
  }
})
