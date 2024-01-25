import Image from "next/image";
import Right from "@/components/icons/Right"

export default function Hero() {
  return (
    <section className="hero">
      <div className='py-12'>
        <h1 className="text-4xl font-semibold">

          Everything is better ith a&nbsp;
           <span className='text-primary'>
             Pizza
          </span>

          </h1>
        <p className="mt-4">

          Pizza is the missing piece that makes every day complete, a simple yet a delicious joy in life

        </p>
       <div className='flex gap-4 text-sm'>
         <button className='bg-primary uppercase flex items-center gap-2 text-white px-8 py-2 rounded-full'>
          Order now
          <Right/>
         </button>
         <button className='flex gap-2 py-2 px-3 text-gray-400'>
          Learn more
          <Right/>
         </button>
       </div>
      </div>
      <div className="relative">
      <Image src={'/pizza.png'} layout={'fill'} objectFit=
      {'contain'} alt={'pizza'}></Image>
      </div>
    </section>
  );
}
