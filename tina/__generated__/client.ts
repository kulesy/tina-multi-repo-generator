import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ cacheDir: '/Users/elikent/Projects/tina-multi-repo-generator/tina/__generated__/.cache/1775703519053', url: '/api/tina', token: 'local-development-token', queries,  });
export default client;
  