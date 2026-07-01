import ClientComponent from "@/components/client-component";

export default async function SearchPage({searchParams}: { searchParams: Promise<{ q: string }> }) {
    const { q } = await searchParams;
    return <>
        <div>Search 페이지: {q}</div>
        <ClientComponent />
    </>
}