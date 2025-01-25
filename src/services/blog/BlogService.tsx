import { BlogSearchResult } from "../../interface/blog/BlogSearchResult";

export async function getBlogList(): Promise<BlogSearchResult[]> {
    const res = await fetch(`http://localhost:8080/blogpost/list`);
    if (!res.ok) {
        throw Error("Failed");
    }
    const data: BlogSearchResult[] = await res.json();
    return data;
}