interface StaticAssets {
  fetch(request: Request): Promise<Response>;
}

interface Environment {
  ASSETS: StaticAssets;
}

const worker = {
  fetch(request: Request, environment: Environment): Promise<Response> {
    return environment.ASSETS.fetch(request);
  },
};

export default worker;
