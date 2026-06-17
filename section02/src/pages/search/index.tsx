import SearchableLayout from "@/components/searchable-layout";
import {useRouter} from "next/router";
import {ReactNode, useEffect, useState} from "react";
import BookItem from "@/components/book-item";
import fetchBooks from "@/lib/fetch-books";
import {BookData} from "@/types";
import Head from "next/head";

export default function Page() {
    const [searchedBooks, setSearchedBooks] = useState<BookData[]>([]);

    const router = useRouter();
    const q = router.query.q as string;

    const fetchSearchBooks = async () => {
        const data = await fetchBooks(q);
        setSearchedBooks(data);
    }

    useEffect(() => {
        if (q) {
            fetchSearchBooks();
        }
    }, [q]);

    return (
        <>
            <Head>
                <title>한입북스</title>
                <meta property="og:image" content="/thumbnail.png" />
                <meta property="og:title" content="한입북스 - 검색결과"/>
                <meta property="og:description" content="한입 북스에 등록된 도서들을 만나보세요."/>
            </Head>
            <div>
                {searchedBooks.map((book) => (
                    <BookItem key={book.id} {...book} />
                ))}
            </div>
        </>
    );
}

Page.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>;
};
