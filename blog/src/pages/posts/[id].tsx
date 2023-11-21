import { posts } from '@/data';
import { useRouter } from 'next/router';

const Post = () => {
    const router = useRouter();
    const id = parseInt(router.query.id as string);
    let post = posts.find(post => post.id === id)

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
