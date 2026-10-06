export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);

  const isPagesDevHost =
    url.hostname === "cookmojo.pages.dev" ||
    url.hostname.endsWith(".cookmojo.pages.dev");

  if (isPagesDevHost) {
    url.hostname = "cookmojo.com";
    url.protocol = "https:";

    return Response.redirect(url.toString(), 301);
  }

  return context.next();
};
