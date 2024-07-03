import Image from "next/image";

export const ImageGenerator = (props) => {
  if (!props.image) {
    return <p className="text-center p-4">Upload an image first.</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        padding: props.settings.padding,
      }}
    >
      <Image
        src={props.image.src}
        alt="Image to download"
        style={{
          boxShadow: `0 0 ${props.settings.shadow}px rgba(0,0,0,.${props.settings.shadow})`,
          borderRadius: props.settings.radius,
          display: "flex",
        }}
      />
    </div>
  );
};
