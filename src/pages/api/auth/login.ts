import type { APIRoute } from "astro";
import type User from "../../../lib/user";
import { getSession } from 'auth-astro/server';

export const GET: APIRoute = async ({ request, redirect, locals }) => {
  let { user_db } = locals.runtime.env
  
  
  let session = await getSession(request);
  if (!session || !session.user) {
    return redirect("/login")
  }
  
  const user = await user_db
    .prepare(`SELECT * FROM users WHERE email = ?`)
    .bind(session.user.email)
    .all();
  
  if (!user) {
    await user_db
      .prepare(`INSERT INTO users (email, name, image, is_admin) VALUES (?, ?, ?, ?)`)
      .bind(session.user.email, session.user.name, session.user.image, false)
      .run();
  }
  
  return redirect("/profile")
}