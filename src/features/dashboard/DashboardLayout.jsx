import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import useRecentStays from "./useRecentStays";
import useRecentBookings from "./useRecentBookings";
import Stats from "./Stats";
import useCabin from "../cabins/useCabin";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;


export default function DashboardLayout() {

    const {bookings , isLoading  } = useRecentBookings()
    const {isLoading:isStaying,confirmedStays,numDays} = useRecentStays()
    const {cabins,isLoading3} = useCabin()
      if(isLoading || isStaying || isLoading3) return <Spinner/>
      

  return (
   <StyledDashboardLayout>
    <Stats bookings={bookings} numDays={numDays} cabinCount={cabins?.length} confirmedStays={confirmedStays}/>
    <TodayActivity/>
    <DurationChart confirmedStays={confirmedStays}/>
    <SalesChart bookings={bookings} numDays={numDays}/>
   </StyledDashboardLayout>
  )
}
