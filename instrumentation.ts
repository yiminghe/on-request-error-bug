import { type Instrumentation } from 'next'
import { registerOTel } from '@vercel/otel';

export const onRequestError: Instrumentation.onRequestError = async (
  err,
  request,
  context
) => {
  console.log('onRequestError');
}

export function register() {
  registerOTel({
    serviceName:'bug'
  })
}