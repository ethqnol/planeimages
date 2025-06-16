
type ENV = {
  user_db: D1Database;
};

type Runtime = import("@astrojs/cloudflare").Runtime<ENV>;
declare namespace App {
	interface Locals extends Runtime {}
}
