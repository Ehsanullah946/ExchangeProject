import { Bar } from "react-chartjs-2"
import { Chart as chartjs
,BarElement,CategoryScale,
LinearScale,Tooltip,Legend, 
BarController} from "chart.js"
chartjs.register(
 BarElement,CategoryScale,
LinearScale,Tooltip,Legend 
)
function GraphBar() {
    const data={
        labels:["sat","sun","mon","tus","wend","turs"],
        datasets:[{
            label:"Income",
            data:[2000,3000,4000,5000,2000,6000],
            backgroundColor:'blue',
            borderColor:'white', 
        },
        {
            label:"Expence",
            data:[1000,2000,3000,4000,5000,4000],
            backgroundColor:"red",
            borderColor:'white',  
        }
    ]      
    }
    const options={
         
    }
    return (
        <div>
        <Bar
        style={
        {width:"80%",height:"300px"}
        }
        data={data}
        options={options}>     
        </Bar>
        </div>
    )
}
export default GraphBar
 