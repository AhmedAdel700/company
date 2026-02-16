/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPosts } from "@/lib/api";

export default function PostsList({ initialPosts }: { initialPosts: any[] }) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 0 }) => getPosts(pageParam, 10),
    getNextPageParam: (lastPage, allPages) => {
      // If the last page has 10 items, we assume there's more. 
      // Offset is total items fetched so far.
      return lastPage.length === 10 ? allPages.length * 10 : undefined;
    },
    initialPageParam: 0,
    initialData: {
      pages: [initialPosts],
      pageParams: [0],
    },
  });

  if (isLoading && !data) {
    return <h1 className="text-4xl text-white">Loading .....</h1>;
  }

  return (
    <div className="flex flex-col items-center gap-6 p-10 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4">TanStack Query Demo</h1>
      
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.map((post: any) => (
              <li 
                key={post.id} 
                className="p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700 hover:border-blue-500 transition-colors"
              >
                <h2 className="text-lg font-semibold text-blue-400 capitalize mb-2">{post.title}</h2>
                <p className="text-gray-300 text-sm line-clamp-3">{post.body}</p>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold rounded-full transition-all shadow-xl hover:scale-105 active:scale-95"
        >
          {isFetchingNextPage ? "Loading more..." : "Load Another 10"}
        </button>
      )}

      {!hasNextPage && data && data.pages[0].length > 0 && (
        <p className="mt-8 text-gray-500 italic">No more items to load.</p>
      )}
    </div>
  );
}
