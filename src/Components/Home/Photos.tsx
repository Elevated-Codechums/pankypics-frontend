// pages/index.js
import Gallery from '../Gallery/Gallery';

export default function Home() {
  return (
    <>
    <div className="h-[50%] w-[94%] bg-darkbrown rounded-3xl flex flex-col justify-center items-center gap-10">

      <h1 className="text-center text-3xl font-bold my-8"></h1>
      <Gallery />
    </div>

    </>
  );
}
