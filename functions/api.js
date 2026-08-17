import twikoo from "../api/index.js";

export async function onRequest(context) {
  return twikoo(context.request, context.env);
}