import twikoo from "./dist.js";

export async function onRequest(context) {
  return twikoo(context.request, context.env);
}