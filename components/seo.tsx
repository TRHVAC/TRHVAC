import Head from "next/head";

type PropType = {
  title?: string;
};

export default function Seo({ title }: PropType) {
  return (
    <Head>
      <title>{title || "TR HVAC | Heating & Cooling"}</title>
      <meta
        name="description"
        content="TR HVAC offers professional heating and air conditioning services in Toronto"
      />
      <meta
        content="heating, cooling, hvac, ventilation, air conditioning, tr"
        name="keywords"
      />
    </Head>
  );
}
