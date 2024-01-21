import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <h1>Everything is better with a Pizza</h1>
      <p>Pizza is the missing piece that makes every day complete, a simple yet a delicious joy in life</p>
      <div className="w-16 h-16 relative">
      <Image src={'/pizza1.png'} layout={'fill'} objectFit=
      {'contain'} alt={'pizza1'}></Image>
      </div>
    </section>
  );
}
