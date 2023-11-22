import { getPosts, type Post } from '@/api/posts';
import { GetStaticProps } from 'next';
import Link from 'next/link';

interface PostsProps {
    posts: Post[]
}

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
    let posts = await getPosts();
    return {
        props: {
            posts: posts
        }
    }
}

const Posts = ({posts} : PostsProps) => {
    return (
        <div>
            <article>
                <ul className="list-disc">
                    {posts.map(post => (
                        <div className="flex flex-row " key={post.id}>
                            <p className="w-32 font-bold">{new Date(post.date).toLocaleDateString('nl-BE')}</p>
                            <Link href={"/posts/" + post.id}>{post.title}</Link>
                        </div>
                    ))}

                </ul>
            </article>
        </div>
    );
}

export default Posts;
