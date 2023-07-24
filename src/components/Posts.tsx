import React from 'react'

const Posts = ({posts}:any) => {
    
  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
    <div className="max-w-lg">
        <h1 className="text-3xl text-gray-800 font-semibold">
            Blog
        </h1>
        <p className="mt-3 text-orange-800 text-xl">
            Blogs that are loved by the community. Updated every hour.
            Get them at <span className=' hover:text-white'><a href="https://jsonplaceholder.typicode.com/posts" target='_blank'>https://jsonplaceholder.typicode.com/</a></span>
        </p>
    </div>
    <div className="mt-12 grid gap-4 divide-y md:grid-cols-2 md:divide-y-0 lg:grid-cols-3">
        {
            posts.map((item, idx) => (
                <article className="mt-5 pt-8 md:pt-0" key={idx}>
                    <a href={item.href}>
                        
                        <div className="mt-2">
                            <h3 className="text-xl text-gray-900 font-semibold hover:underline">
                                {item.title}
                            </h3>
                            <p className="text-black mt-1 leading-relaxed">
                                {item.body}
                            </p>
                        </div>
                        <button className="mt-2 outline-none flex items-center text-[14px] text-blue-600 decoration-blue-600 hover:underline">
                            READ MORE
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </a>
                </article>
            ))
        }
    </div>
</section>

  )
}

export default Posts