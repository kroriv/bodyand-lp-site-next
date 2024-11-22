import Image from "next/image";

export default function Qrcode() {
  return (
    <Image
      src={ "/sec01-line_QR.png" }
      alt={ "LINEQRコード" }
      width={ 72 }
      height={ 72 }
      className={ "w-[100px] h-[100px]" }
    />
  );
}