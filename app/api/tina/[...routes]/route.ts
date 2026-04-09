import { NextRequest } from "next/server";
import { TinaNodeBackend, LocalBackendAuthProvider } from "@tinacms/datalayer";
import databaseConfig from "../../../../tina/__generated__/config";

const handler = TinaNodeBackend({
  authProvider: LocalBackendAuthProvider(),
  databaseConfig,
});

export const GET = (req: NextRequest) => handler(req);
export const POST = (req: NextRequest) => handler(req);
