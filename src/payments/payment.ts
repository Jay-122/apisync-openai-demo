import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2023-10-16",
});

export async function charge(amount: number, customer: string) {
  return stripe.paymentIntents.create({
    amount,
    currency: "usd",
    customer,
  });
}
