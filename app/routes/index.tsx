import { V2_MetaFunction, json } from "@remix-run/node";
import Chat from "../components/Chat";
// import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";
import { RequestArgs } from "openai/dist/base";

export const meta: V2_MetaFunction = () => [{ title: "Aliza" }];

export async function loader(request: RequestArgs) {
  return json({});
}

export default function Index() {
  const user = useOptionalUser();

  return (
    <main className="min-h-screen bg-gradient-to-r from-slate-700 to-slate-400 grid grid-cols-1 sm:grid-cols-6 sm:gap-4 gap-1 overflow-auto content-center items-center">
      <div className="sm:col-start-2 col-span-1">
        <Chat />
      </div>
    </main>
  );
}
