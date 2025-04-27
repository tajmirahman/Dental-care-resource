import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../components/Home";
import AllTreatment from "../components/AllTreatment/AllTreatment";
import AllAppointment from "../components/AllAppointment/AllAppointment";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element:<Home />
            },
            {
                path:'/treatment',
                element:<AllTreatment />
            },
            {
                path:'/appointment',
                element:<AllAppointment />
            }
        ]
    }
])

export default router;