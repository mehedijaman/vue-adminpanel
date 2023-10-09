<script setup>
import { Bar} from 'vue-chartjs'
import { 
    Chart as ChartJS, 
    Title, 
    Tooltip, 
    Legend, 
    BarElement, 
    ArcElement, 
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js';

ChartJS.register(
    Title, 
    Tooltip, 
    Legend, 
    BarElement, 
    ArcElement ,
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}

const barChartData = {
    labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
    datasets: 
    [
        {
            label: 'Monthly Sales',
            backgroundColor: '#f87979',
            data: [500, 600, 450, 500, 340, 340, 790, 890, 900, 700, 500, 650]
        }
    ]
};
</script>
<template>
    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Export to PDF
        </span>
        </button>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Export to  Excel
        </span>
        </button>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Export to Word
        </span>
        </button>
    <div class="grid grid-cols-3 gap-4 mb-4">
        <div>            
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            #
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Month
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Sales
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</th>
                        <td class="px-6 py-4"><input type="checkbox"> </td>
                        <td class="px-6 py-4">January</td>
                        <td class="px-6 py-4">$2999</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</th>
                        <td class="px-6 py-4"><input type="checkbox"> </td>
                        <td class="px-6 py-4">January</td>
                        <td class="px-6 py-4">$2999</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</th>
                        <td class="px-6 py-4"><input type="checkbox"> </td>
                        <td class="px-6 py-4">January</td>
                        <td class="px-6 py-4">$2999</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</th>
                        <td class="px-6 py-4"><input type="checkbox"> </td>
                        <td class="px-6 py-4">January</td>
                        <td class="px-6 py-4">$2999</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</th>
                        <td class="px-6 py-4"><input type="checkbox"> </td>
                        <td class="px-6 py-4">January</td>
                        <td class="px-6 py-4">$2999</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</th>
                        <td class="px-6 py-4"><input type="checkbox"> </td>
                        <td class="px-6 py-4">January</td>
                        <td class="px-6 py-4">$2999</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</th>
                        <td class="px-6 py-4"><input type="checkbox"> </td>
                        <td class="px-6 py-4">January</td>
                        <td class="px-6 py-4">$2999</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</th>
                        <td class="px-6 py-4"><input type="checkbox"> </td>
                        <td class="px-6 py-4">January</td>
                        <td class="px-6 py-4">$2999</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</th>
                        <td class="px-6 py-4"><input type="checkbox"> </td>
                        <td class="px-6 py-4">January</td>
                        <td class="px-6 py-4">$2999</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</th>
                        <td class="px-6 py-4"><input type="checkbox"> </td>
                        <td class="px-6 py-4">January</td>
                        <td class="px-6 py-4">$2999</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</th>
                        <td class="px-6 py-4"><input type="checkbox"> </td>
                        <td class="px-6 py-4">January</td>
                        <td class="px-6 py-4">$2999</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</th>
                        <td class="px-6 py-4"><input type="checkbox"> </td>
                        <td class="px-6 py-4">January</td>
                        <td class="px-6 py-4">$2999</td>
                    </tr>


                </tbody>
            </table>

        </div>
        <div class="col-span-2 flex items-center justify-center h-96 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <Bar class="w-full" :data="barChartData" :options="chartOptions" />
        </div>
    </div>
</template>