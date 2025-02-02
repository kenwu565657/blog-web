import { useEffect, useState } from "react";
import { getBlogContent } from "../../../services/blog/BlogService";

interface BlogContentProp {
    blogpostId: string | null
}

const BlogContent = (prop: BlogContentProp) => {

    const [content, setContent] = useState("");

    useEffect(() => {
        
            getBlogContent()
            .then(content => setContent(content));
        
    }, [prop.blogpostId]);

    return (
        <div dangerouslySetInnerHTML={{__html: content}}>
            
        </div>
    )
}

export default BlogContent;