import "server-only";

import { cache } from "react";

import { getSession } from "@/lib/auth";

export const getCurrentUser = cache(async () => {
  console.log("getCurrentUser");
  const session = await getSession();
  if (!session?.user) {
    return undefined;
  }
  return session.user;
});
