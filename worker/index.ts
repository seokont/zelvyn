interface StaticAssets {
  fetch(request: Request): Promise<Response>;
}

interface Environment {
  ASSETS: StaticAssets;
}

const EARLY_ACCESS_ENDPOINT = "https://zelvyn.vercel.app/api/early-access";

const worker = {
  async fetch(request: Request, environment: Environment): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/early-access") {
      if (request.method !== "POST") {
        return new Response(JSON.stringify({ ok: false, error: "method_not_allowed" }), {
          status: 405,
          headers: {
            "Cache-Control": "no-store",
            "Content-Type": "application/json; charset=utf-8",
          },
        });
      }

      const response = await fetch(EARLY_ACCESS_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": request.headers.get("Content-Type") ?? "application/json",
        },
        body: await request.arrayBuffer(),
      });

      return new Response(response.body, {
        status: response.status,
        headers: {
          "Cache-Control": "no-store",
          "Content-Type": response.headers.get("Content-Type") ?? "application/json; charset=utf-8",
        },
      });
    }

    return environment.ASSETS.fetch(request);
  },
};

export default worker;
