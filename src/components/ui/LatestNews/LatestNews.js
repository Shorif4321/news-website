// "use client"
import { getAllNews } from '@/utils/getAllNews';
import Image from 'next/image';
import React from 'react';

const LatestNews = async () => {

    const { data } = await getAllNews();

    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
                <figure>
                    <Image
                        src={data[0].thumbnail_url} className='w-full'
                        alt="news" width={500} height={500} />
                </figure>
                <div className="card-body">
                    <p className='bg-green-400 rounded-2xl w-[100px] text-center text-white p-2'>{data[0].category}</p>

                    <h2 className="card-title">{data[0].title}</h2>
                    <p>{data[0].details.length > 200 ? data[0].details.slice(0, 300) + " ......." : data[0].details}</p>

                </div>
            </div>

            {/* data map 4 item */}
            <div className='grid md:grid-cols-2 gap-5 my-5'>
                {
                    data.slice(1, 5).map(news => <div key={news._id} className="card bg-base-100  shadow-sm">
                        <figure>
                            <Image className='h-[230px]'
                                src={news.thumbnail_url}
                                alt="news" width={500} height={500} />
                        </figure>
                        <div className="card-body">
                            <div>
                                <p className='inline-block bg-green-400 rounded-2xl text-center text-white py-2 px-3 '>{news.category}</p>
                            </div>

                            <h2 className="card-title">{news.title}</h2>
                            <p>{news.details.length > 200 ? news.details.slice(0, 300) + " ......." : news.details}</p>

                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default LatestNews;