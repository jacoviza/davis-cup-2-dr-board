"use client";
import {useRouter} from "next/navigation";

export default async function Page() {

    const router = useRouter();
    router.push('/board');

  return (
      <div className="h-screen w-screen"></div>
  );
}