import type { Metadata } from "next";
import { Journal } from "@/components/blog/Journal";
import type { ListingSearchParams } from "@/lib/listing-params";
import { listingMetadata } from "@/server/listing-metadata";
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<ListingSearchParams>;
}): Promise<Metadata> {
  return listingMetadata("/blog", await searchParams);
}
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<ListingSearchParams>;
}) {
  return <Journal searchParams={await searchParams} />;
}
