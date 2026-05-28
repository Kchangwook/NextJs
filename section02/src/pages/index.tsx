// CSS Module
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import {ReactNode, useEffect} from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import {InferGetServerSidePropsType} from "next";

export const getServiceSideProps = () => {
    return {
        props: {
            data,
        },
    };
};

        <h3>등록된 모든 도서</h3>
}

Home.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>;
};
