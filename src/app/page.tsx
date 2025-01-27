"use client";
import {useRouter} from "next/navigation";

export default function Page() {

    const router = useRouter();
    router.push('/board');

  return (
      <div className="h-screen w-screen"></div>
  );
}