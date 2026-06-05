import SearchableLayout from "@/components/searchable-layout";
import {useRouter} from "next/router";
import {ReactNode, useEffect, useState} from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import {GetServerSidePropsContext, GetStaticPropsContext, InferGetStaticPropsType} from "next";
import fetchBooks from "@/lib/fetch-books";
import {BookData} from "@/types";

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
        <div>
            {searchedBooks.map((book) => (
                <BookItem key={book.id} {...book} />
            ))}
        </div>
    );
}

Page.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>;
};
