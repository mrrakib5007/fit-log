import Banner from "@/components/Home/Banner";
import TheLibrarySection from "@/components/Home/TheLibrary";
import Loading from "@/components/Loading/Loading";
import { Suspense } from "react";


export default function Home() {
  return (
    <div>
      <Banner />
      <Suspense fallback={<Loading />}>
        <TheLibrarySection />
      </Suspense>
    </div>
  );
}
