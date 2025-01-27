"use client";
import { neon } from '@neondatabase/serverless';
import {useRouter} from "next/navigation";

export default async function Page() {

  // redirect to the board page
    const router = useRouter();
    router.push('/board');

  return (
      <div className="h-screen w-screen"></div>
  );
}