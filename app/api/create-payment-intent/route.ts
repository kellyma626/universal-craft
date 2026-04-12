import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();

    console.log('Amount received:', amount);
    const amountInCents = Math.round(amount * 100);
    console.log('Amount in cents:', amountInCents);

    if (amountInCents < 50) {
      return NextResponse.json({ error: 'Amount too small' }, { status: 400 });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: 'usd',
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Stripe error:', error);
    return NextResponse.json({ error: 'Payment failed' }, { status: 500 });
  }
}
