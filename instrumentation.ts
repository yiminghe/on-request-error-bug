import { type Instrumentation } from 'next'

export const onRequestError: Instrumentation.onRequestError = async (
  err,
  request,
  context
) => {
  console.log();
  console.log();
  console.log();
  console.log();
  console.log();
  console.log();
  console.log('onRequestError');
  console.log();
  console.log();
  console.log();
  console.log();
  console.log();
  console.log();
}
