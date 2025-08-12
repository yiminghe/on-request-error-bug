import { type Instrumentation } from 'next'
const {log}=console;

export const onRequestError: Instrumentation.onRequestError = async (
  err,
  request,
  context
) => {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
  log('onRequestError')
  }
}

export function register() {
  console.log=()=>{};
  console.error=()=>{};
}