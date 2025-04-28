import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../components/Home";
import AllTreatment from "../components/AllTreatment/AllTreatment";
import AllAppointment from "../components/AllAppointment/AllAppointment";
import Details from "../components/Details";
import Login from "../components/Login";
import Register from "../components/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element:<Home />,
                loader: async()=>{
                    const serviceRes= await fetch('/service.json');
                    const serviceData=await serviceRes.json();

                    const feedBackRes= await fetch('/feedBack.json');
                    const feedBackData= await feedBackRes.json();

                    return {serviceData,feedBackData}
                }
            },
            {
                path:'/treatment',
                element:<AllTreatment />,
                loader:()=>fetch('/service.json')
            },
            {
                path:'/appointment',
                element:<AllAppointment />
            },
            {
                path:'/details/:id',
                element: <Details />,
                loader: async({params})=>{
                    const res= await fetch('/service.json');
                    const data= await res.json();

                    const singleData= data.find(d=> d.id == params.id);

                    return singleData;   
                }
                
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;