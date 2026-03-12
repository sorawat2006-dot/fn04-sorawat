import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="bg-stone-100 pb-10">
      <Banner />
      <div className="flex flex-row justify-center gap-16 px-10 py-10">
        <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg" />
        <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg" />
        <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg" />
      </div>
    </main>
  );
}