"use client"

import { CreateTRPCClient, createTRPCClient, httpBatchLink } from "@trpc/client"
import type { AppRouter } from "@gphoto/trpc/routes/router"
import { useState } from "react";

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:8000',
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: 'include',
        });
      }
    }),
  ],
});


export default function Page() {

  const [usr, setUsr] = useState({});

  const get = async () => {
    const user = await trpc.userList.query();
    setUsr(user);
    console.log(user);
  }

  return (
    <div>
      <button onClick={get}>click</button>
    </div>

  )
}