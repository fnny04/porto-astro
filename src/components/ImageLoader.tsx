export default function ImageLoader(props: {
  src?: string;
  alt?: string;
  width?: string;
  label?: string;
}) {
  const { src, alt, width = "120px" } = props;
  return (
    <>
      <img src={src} alt={alt} width={width} />
    </>
  );
}
