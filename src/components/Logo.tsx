import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src={ "/main-logo.svg" }
      alt={ "ロゴ" }
      width={ 310 }
      height={ 67 }
    />
  );
}