import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";



export default function useRecentStays() {
    
   const [searchParams] = useSearchParams()
    const numDays = !searchParams.get('last') ? 7 : 
    Number(searchParams.get("last"))

    const queryDate = subDays(new Date(),numDays).toISOString();

    const {isLoading , data : stayings} = useQuery({
        queryFn : ()=>getStaysAfterDate(queryDate),
        queryKey : ["stayings" , `last-${numDays}`]
    })
        const confirmedStays = stayings?.filter(stay=>stay.status === "checked-in" || stay.status === "checked-out" )
        return {isLoading ,stayings,confirmedStays,numDays}
    }



