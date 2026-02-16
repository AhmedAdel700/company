import CompoundDetails from "./CompoundDetails";

export default function page({ params }: { params: { id: string, locale: string } }) {
  return <CompoundDetails params={params} />;
}
