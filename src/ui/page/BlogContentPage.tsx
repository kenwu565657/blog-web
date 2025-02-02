import { Params, useParams, useSearchParams } from "react-router-dom";
import BlogContent from "../../features/blog/blog-details/BlogContent";

const BlogContentPage = () => {
    const [urlParams] = useSearchParams();
    const blogpostId: string | null = urlParams.get("id");

    return (
        <div>
            <BlogContent blogpostId={blogpostId}></BlogContent>
        </div>
    )
}

export default BlogContentPage;
