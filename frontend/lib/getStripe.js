<<<<<<< HEAD:frontend/lib/getStripe.js
import {loadStripe} from "@stripe/stripe-js";
=======
import { loadStripe } from "@stripe/stripe-js";
>>>>>>> d44b38f8793e9a8438a4355c6f5a72f0c25a2f63:front_end/lib/getStripe.js

let stripe;

const getStripe = async () => {
<<<<<<< HEAD:frontend/lib/getStripe.js
    if(!stripe) {
=======
    if(!stripe){
>>>>>>> d44b38f8793e9a8438a4355c6f5a72f0c25a2f63:front_end/lib/getStripe.js
        stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    }
    return stripe;
};

<<<<<<< HEAD:frontend/lib/getStripe.js
export default getStripe;
=======
export default getStripe;

>>>>>>> d44b38f8793e9a8438a4355c6f5a72f0c25a2f63:front_end/lib/getStripe.js
