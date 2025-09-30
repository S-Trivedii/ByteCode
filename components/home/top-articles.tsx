import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function TopArticles() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div className="p-6">
        <Link href={`/articles/${123}`}>
          {/* Image Container */}
          <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
            <Image
              src="https://plus.unsplash.com/premium_photo-1661427053933-d3da1618d8c4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Top-Article Image"
              fill
              className="object-cover"
            />
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <Avatar className="h-8 w-8">
              <AvatarImage src="" />
              <AvatarFallback>ST</AvatarFallback>
            </Avatar>
            <span>Shubhanshu Trivedi</span>
          </div>

          {/* Article Title */}
          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
            How to learn Next.js
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Education</p>

          {/* Article Meta Info */}
          <div className="mt-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>12 feb</span>
            <span>{12} min to read</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
