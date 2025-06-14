import type { APIRoute } from "astro";
import type User from "../../../lib/user";
import { getSession } from 'auth-astro/server';

export const GET: APIRoute = async ({ request, redirect }) => {
  let session = await getSession(request);
  return redirect("/profile")
}