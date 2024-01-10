import { defineNuxtPlugin } from '#app'
import plugin from 'vue-yandex-maps'


const settings = {
  apiKey: 'e9e5710f-58bd-4162-b1f6-cacf24f97c21', // Индивидуальный ключ API
  // lang: 'ru_RU', // Используемый язык
  // coordorder: 'latlong', // Порядок задания географических координат
  // debug: false, // Режим отладки
  // version: '2.1' // Версия Я.Карт
}
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(plugin, settings)
});