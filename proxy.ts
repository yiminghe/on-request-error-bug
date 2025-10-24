

export default function middleware() {
  throw new Error('thrown from middleware');
  // return new Response('Hello, world!')
}

export const config = {
};