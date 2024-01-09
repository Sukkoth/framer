function BorderdLinks({ children, size, className }) {
  const linkSize =
    size === "sm"
      ? "px-5 py-3"
      : size === "md"
      ? "px-7 py-4"
      : size === "lg"
      ? "px-20 py-8"
      : size === "xl"
      ? "px-24 py-12"
      : "";
  return (
    <a
      className={`border border-white cursor-pointer ${linkSize} ${
        className || ""
      }`}
    >
      {children}
    </a>
  );
}

export default BorderdLinks;
