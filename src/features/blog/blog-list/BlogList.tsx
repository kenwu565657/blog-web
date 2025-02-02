import { BlogSearchResult } from "../../../interface/blog/BlogSearchResult";
import BlogListItem from "./BlogListItem";

interface BlogListProp {
    blogSearchResult: BlogSearchResult[]
}

const BlogList = (blogListProp: BlogListProp) => {
    return (
        <div className="w-full">
            <h2 className="text-start border-t-2 border-x-2">Blog Post Total: {blogListProp.blogSearchResult? blogListProp.blogSearchResult.length : 0}</h2>

            <div className="flex flex-col gap-2 p-3 border-2 overflow-scroll max-h-96">
            {
                blogListProp.blogSearchResult?.map((blogSummary, i) => {
                    return (
                        <BlogListItem 
                        key={i}
                        id={blogSummary.id}
                        title={blogSummary.title} 
                        summary={blogSummary.summary} 
                        authorName={blogSummary.authorName} 
                        postDate={blogSummary.authorName} 
                        tags={['Java', 'Python']} 
                        />
                    );
                })
            }
            </div>
        </div>
        
    )
}

export default BlogList;