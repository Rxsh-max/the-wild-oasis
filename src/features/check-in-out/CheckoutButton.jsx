import Button from "../../ui/Button";
import { useCheckOut } from "./useCheckOut";

function CheckoutButton({ bookingId }) {

  const {checkout , isCheckingOut} = useCheckOut()

  return (
    <Button $variation="primary" disabled={isCheckingOut} $size="small" onClick={() => checkout(bookingId)}>
      Check out
    </Button>
  );
}

export default CheckoutButton;
