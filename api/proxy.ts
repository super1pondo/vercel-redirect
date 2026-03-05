export const config = {
  runtime: "edge",
};

export default async function handler(request: Request) {
  const origin = "http://moovenda.com";
  const fallback = "https://xn--hu1b83jivfn3f8sbb21bgkc.com/";

  const url = new URL(request.url);
  const target = origin + url.pathname + url.search;

  try {
    const res = await fetch(target);

    if (res.status >= 500) {
      return Response.redirect(fallback, 302);
    }

    return res;

  } catch (e) {
    return Response.redirect(fallback, 302);
  }
}
