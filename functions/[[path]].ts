export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);

  const isPagesDevHost =
    url.hostname === "baggagegear.pages.dev" ||
    url.hostname.endsWith(".baggagegear.pages.dev");

  if (isPagesDevHost) {
    url.hostname = "baggagegear.com";
    url.protocol = "https:";

    return Response.redirect(url.toString(), 301);
  }

  return context.next();
};
