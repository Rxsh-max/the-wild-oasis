import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { deleteBooking as deleteBookingsApi } from "../../services/apiBookings"

 
 export  function useDeleteBooking(){
     const queryClient = useQueryClient()
     const {isLoading : isDeleting,mutate : deleteBookings } = useMutation({
         mutationFn : deleteBookingsApi,
         onSuccess : ()=>{
             toast.success("Booking Successfully deleted")
             queryClient.invalidateQueries({
                 queryKey : ['bookings'],
                }) 
            },
            onError : (err)=>toast.error(err.message)
        })

        return {isDeleting,deleteBookings}
    }