import { type Post, getPosts } from '@/api/posts';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export const getStaticProps : GetStaticProps<HomeProps> = async() => { 
  let posts = await getPosts();
  return {
    props: {
      posts: posts
    }
  }
}

interface HomeProps {
  posts: Post[]
}

const Home = ({posts} : HomeProps) => {
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img src="/purrtecch.png" alt="PurrTech University Logo" className="w-full md:w-1/4" />

        <div className="md:w-3/4 p-4">
          <h1 className="text-2xl font-bold mb-4 text-justify">Welcome to PurrTech University</h1>
          <p className="text-lg mb-4 text-justify">Welcome to PurrTech University, where curiosity didn't kill the cat, it just got them a degree! At PurrTech, we believe in the power of 'pawsitive' thinking and infusing a bit of fun into the serious business of education.</p>
          <p className="text-lg mb-4 text-justify">Our campus is renowned for its state-of-the-art catnapping facilities and world-class laser pointer physics labs. Whether you're here to study the intricacies of yarn ball dynamics or the art of the perfect purr, PurrTech is the place where your dreams (and daydreams) come true.</p>
          <p className="text-lg mb-4 text-justify">Don't worry about being the 'cat's whiskers' here; we value curiosity over perfection. So, sharpen your claws on the tree of knowledge and join us on this adventure. Remember, at PurrTech, it's okay to let curiosity lead the way – just watch out for the occasional hairball!</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {posts.slice(0, 2).map(post => (
          <article key={post.id} className="border rounded-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full object-cover" />
            
            <div className="flex items-center px-4 py-2">
              <img src={post.author.image} alt={post.author.name} className="w-10 h-10 rounded-full mr-4" />
              <div>
                <p className="text-sm font-bold">{post.author.name}</p>
                <p className="text-sm">{new Date(post.date).toLocaleDateString('nl-BE')}</p>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p>{post.short}</p>
              <button className="bg-blue-500 text-white rounded px-4 py-2 mt-2" onClick={() => router.push("/posts/" + post.id)}>Read More</button>
            </div>
          </article>
        ))}
      </div>

      <div className="w-full bg-gradient-to-t from-gray-700 to-gray-900 rounded-md p-10 mt-10">
        <h2 className="text-2xl font-bold mb-4 text-white">More posts</h2>

        <ul className="list-disc text-white">
          {posts.slice(2, 10).map(post => (
            <li key={post.id}><Link href={"/posts/" + post.id} className="text-lg">{post.title}</Link></li>
          ))}
          <button className="bg-white text-black rounded px-4 py-2 mt-4" onClick={() => router.push("/posts")}>See all posts</button>
        </ul>
      </div>
    </div>
  );
}

export default Home;