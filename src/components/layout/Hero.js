import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid grid-cols-2">
      <div>
      <h1 className="text-4xl font-semibold">Everything is better with a Pizza</h1>
      <p>

        Pizza is the missing piece that makes every day complete, a simple yet a delicious joy in life

      </p>
      </div>
      <div className="relative">
      <Image src={'/pizza.png'} layout={'fill'} objectFit=
      {'contain'} alt={'pizza'}></Image>
      </div>
    </section>
  );
}
