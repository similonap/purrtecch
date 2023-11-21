import { posts } from '@/data';
import Link from 'next/link';

const Post = () => {

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

export default Post;
