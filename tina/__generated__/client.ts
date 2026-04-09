import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: '/api/tina', token: 'local-development-token', queries,  });
export default client;
  