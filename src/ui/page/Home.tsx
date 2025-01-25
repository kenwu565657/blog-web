import BlogList from "../../features/blog/blog-list/BlogList";
import BlogTagList from "../../features/blog/blog-tag/BlogTagList";
import { BlogSearchResult } from "../../interface/blog/BlogSearchResult";
import { getBlogList } from "../../services/blog/BlogService";
import useTypedLoaderData from "../../hooks/useTypedLoaderData";

const Home = () => {

    const blogpostList: BlogSearchResult[] = useTypedLoaderData<BlogSearchResult[]>();
    console.log(blogpostList);

    return (
        <div className="">
            <div className="flex flex-row">
                <div className="grow-1 mx-3 flex-1">
                    <BlogList blogSearchResult={blogpostList}>

                    </BlogList>
                </div>


                <div className="mx-3">
                    <BlogTagList>

                    </BlogTagList>
                </div>
            </div>


        </div>
    )
}

export async function homePageLoader(): Promise<BlogSearchResult[]> {
    const blogpostList = await getBlogList();
    return blogpostList;
}

export default Home;