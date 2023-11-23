import { getPostById, getPosts, type Post } from '@/api/posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import Image from 'next/image'

interface PostProps {
    post: Post
}

interface Paths extends ParsedUrlQuery { 
    id: string
}

export const getStaticPaths: GetStaticPaths<Paths> = async () => {
    let posts = await getPosts();
    let paths = posts.map(post => ({
        params: {
            id: post.id.toString()
        }
    }));
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<PostProps, Paths> = async (context) => {
    let id = parseInt(context.params?.id as string);
    let post = (await getPostById(id))!;
    return {
        props: {
            post: post
        }
    }
}

const Post = ({post} : PostProps) => {
    const router = useRouter();
    return (
        <div>
            <article className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img src={post.image} alt={post.title} className="w-full h-100 object-cover" />
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                    <p className="text-gray-700 text-base">{post.fullText}</p>
                </div>
                <div className="p-6">
                    <button className="bg-blue-500 text-white rounded px-4 py-2 mt-2" onClick={() => router.back()}>Go back</button>
                </div>
            </article>
        </div>
    );
}

export default Post;
