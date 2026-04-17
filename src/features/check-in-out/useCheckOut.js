import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";




export function useCheckOut()
{
    const queryClient = useQueryClient()
    
      const{ mutate:checkout ,isLoading : isCheckingOut} = useMutation({
            mutationFn : (bookingId) => updateBooking(bookingId,
            {
                status : 'checked-out',
                
            }),
            onSuccess : (data)=>{
                console.log(data.id);
                toast.success(`Booking #${data.id} successfully Checked Out `);
                queryClient.invalidateQueries({active:true})
            },
            onError: (err) => {
  console.error("Checkout error:", err);
  toast.error(err.message);
},
        });
        return {checkout,isCheckingOut}
    }
      