import { BlogSummary } from "../../../interface/blog/BlogSummary";
import BlogListItem from "./BlogListItem";

const BlogList = () => {
    const blogArray: BlogSummary[] = [
        {
            title: "test",
            summary: "This is a test Summary. This is a test Summary. This is a test Summary. This is a test Summary. This is a test Summary. This is a test Summary. ",
            authorName: "testing Author Name",
            postDate: "2025-01-06",
            tags: ["Java", "test"]
        },
        {
            title: "test",
            summary: "This is a test Summary",
            authorName: "testing Author Name",
            postDate: "2025-01-06",
            tags: ["Python", "test"]
        },
        {
            title: "test",
            summary: "This is a test Summary",
            authorName: "testing Author Name",
            postDate: "2025-01-06",
            tags: ["C++", "test"]
        },
        {
            title: "test",
            summary: "This is a test Summary",
            authorName: "testing Author Name",
            postDate: "2025-01-06",
            tags: ["TypeScript", "test"]
        },
        {
            title: "test",
            summary: "This is a test Summary. This is a test Summary. This is a test Summary. This is a test Summary. This is a test Summary. This is a test Summary. ",
            authorName: "testing Author Name",
            postDate: "2025-01-06",
            tags: ["Java", "test"]
        },
        {
            title: "test",
            summary: "This is a test Summary",
            authorName: "testing Author Name",
            postDate: "2025-01-06",
            tags: ["Python", "test"]
        },
        {
            title: "test",
            summary: "This is a test Summary",
            authorName: "testing Author Name",
            postDate: "2025-01-06",
            tags: ["C++", "test"]
        },
        {
            title: "test",
            summary: "This is a test Summary",
            authorName: "testing Author Name",
            postDate: "2025-01-06",
            tags: ["TypeScript", "test"]
        },
    ];

    return (
        <div className="">
            <h2 className="text-start border-t-2 border-x-2">Blog Post Total: 200</h2>

            <div className="flex flex-col gap-2 p-3 border-2 overflow-scroll max-h-96">
            {
                blogArray.map((blogSummary, i) => {
                    return (
                        <BlogListItem 
                        key={i} 
                        title={blogSummary.title} 
                        summary={blogSummary.summary} 
                        authorName={blogSummary.authorName} 
                        postDate={blogSummary.postDate} 
                        tags={blogSummary.tags} 
                        />
                    );
                })
            }
            </div>
        </div>
        
    )
}

export default BlogList;