import { useState } from "react";
import { BlogTagType } from "../../../interface/blog/BlogTag"
import BlogTag from "./BlogTag";

export interface BlogListListProp {
    data: BlogTagType[]
}

const BlogTagList = () => {

    const [search, setSearch] = useState("");

    const blogTagData: BlogTagType[] = [
        {
            tagName: "Java"
        },
        {
            tagName: "Python"
        },
        {
            tagName: "C++"
        },
        {
            tagName: "TypeScript"
        },
        {
            tagName: "Java"
        },
        {
            tagName: "Python"
        },
        {
            tagName: "C++"
        },
        {
            tagName: "TypeScript"
        }
    ];

    return (
        <div className="bg-emerald-700 max-w-64 border-solid border-2 flex flex-col gap-y-10 p-3 divide-y-5">
            <h6>Search By Tags</h6>

            <input></input>


            <div className="w-30 flex flex-row flex-wrap gap-3 border-y-4 border-solid p-3">
            {
                blogTagData.map((blogTagData, i) => {
                    return <BlogTag key={i} tagName={blogTagData.tagName} isSelected={true} />

                })
            }
            </div>

            <div className="w-30 flex flex-row flex-wrap  gap-3 border-t-4 border-solid p-3">
            {
                blogTagData.map((blogTagData, i) => {
                    return (
                        <BlogTag key={i} tagName={blogTagData.tagName} isSelected={false} />
                    )
                })
            }
            </div>

            
        </div>
        
    )
}

export default BlogTagList;