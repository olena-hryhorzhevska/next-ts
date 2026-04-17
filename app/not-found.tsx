'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push('/'), 4000);
    return () => clearTimeout(timer);
  }, [router]);
  
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist. Redirecting to the homepage...</p>
    </div>
  )
}