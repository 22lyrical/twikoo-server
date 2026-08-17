import twikoo from "twikoo-vercel";

export async function onRequest(context) {
  return twikoo(context.request, context.env);
}