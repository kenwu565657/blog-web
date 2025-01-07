import { BlogSummary } from "../../../interface/blog/BlogSummary";
import BlogTag from "../blog-tag/BlogTag";

const BlogListItem = (prop: BlogSummary) => {
    const blogListItemContainerStyle: string = "p-3 text-start border-2 border-black border-solid flex flex-col";

    return (
        <div className={blogListItemContainerStyle}>
            <h2 className="mb-2"><b><u>{prop.title}</u></b></h2>

            <p className="mb-2">{prop.summary}</p>

            <div className="mb-2 flex flex-row justify-start gap-5">
                <span>{prop.authorName}</span>
                <span>{prop.postDate}</span>
            </div>

            <div className="flex flex-row justify-start gap-x-2">
                {
                    prop.tags.map((tagName, i) => {
                        return (
                            <BlogTag key={i} tagName={tagName} />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default BlogListItem;