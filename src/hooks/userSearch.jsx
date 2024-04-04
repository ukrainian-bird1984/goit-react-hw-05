import { useEffect, useState } from "react";
import { requestProducts, requestProductsByQuery } from "../services/api";
import { useSearchParams } from "react-router-dom";

export const useProductSearch = ({ isSearchPage = false }) => {
    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [query, setQuery] = useState("");
    // const [query, setQuery] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    // ?query=samsung
    const query = searchParams.get("query") // samsung

    useEffect(() => {
      if(isSearchPage) return;
@@ -25,7 +29,7 @@ export const useProductSearch = ({ isSearchPage = false }) => {
    }, [isSearchPage]);

    useEffect(() => {
      if (query.length === 0) return;
      if (!query) return;

      async function fetchProductsByQuery() {
        try {
@@ -43,7 +47,8 @@ export const useProductSearch = ({ isSearchPage = false }) => {
    }, [query]);

    const onSetSearchQuery = (searchTerm) => {
      setQuery(searchTerm);
      // setQuery(searchTerm);
      setSearchParams({ query: searchTerm });
    };
