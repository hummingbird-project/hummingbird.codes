import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LogarithmicScale } from 'chart.js'
export default defineNuxtPlugin(() => {
  Chart.register(CategoryScale, LinearScale, LogarithmicScale, BarElement, Title, Tooltip, Legend)
})
