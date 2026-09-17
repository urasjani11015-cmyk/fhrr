export async function onRequest(context) {
  // 1. Asli GIF file ko fetch karein
  const imageUrl = new URL('/ththth.gif', context.request.url);
  const imageResponse = await fetch(imageUrl);
  const imageBuffer = await imageResponse.arrayBuffer();

  return new Response(imageBuffer, {
    headers: {
      'Content-Type': 'ezgif.com-gif-maker.gif',
      'Content-Disposition': 'inline; filename="thumb.gif"',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
