import { BlogSearchResult } from "../../interface/blog/BlogSearchResult";

export async function getBlogList(): Promise<BlogSearchResult[]> {
    const res = await fetch(`http://localhost:8080/blogpost/list`);
    if (!res.ok) {
        throw Error("Failed");
    }
    const data: BlogSearchResult[] = await res.json();
    return data;
}

export async function getBlogContent(): Promise<string> {
    const res = await fetch(`http://localhost:8080/blogpost/content/testing_blog_with_image.md`);
    if (!res.ok) {
        throw Error("Failed");
    }
    const data: string = await res.text();
    return data;
}