import Image from 'next/image';

export default function HomeMenu() {
  return (
    <section className="">
      <div>
        <Image src={'/sallad1.png'} width={'100'} height={'100'} alt={'sallad'} />
      </div>
      <div className="text-center">
        <h3 className="uppercase text-grap-600 font-semibold leading-4">Check out</h3>
        <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
      </div>
    </section>
  );
}
