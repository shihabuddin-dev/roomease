export default function Head({ title = "Contact Us | RoomEase", description = "Contact RoomEase for support, partnership, or general inquiries." }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </>
  );
}
