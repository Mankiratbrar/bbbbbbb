import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "../../components/StartupCard";
export default async function Home({searchParams}:{
  searchParams:Promise<{query?:string}>
}) {

  const query = (await searchParams).query
  const posts = [{_createdAt:'Yesterday',
  title:'Startup Pitching',
  description:'Get Noticed',
  category:'Startup',
  views:100,
  Author:{ _id : 1 },
  _id : 1,
  image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos&psig=AOvVaw13oIKAbWUHOVAN16UBFdBp&ust=1762129461960000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCJiBufWZ0pADFQAAAAAdAAAAABAE"
  }]
  return (
      <>
        <section className="pink_container">
          <h1 className="heading rounded-4xl">Pitch your startup <br />connect with enterprenuers</h1>
          <p className="sub-heading">
            Submit Ideas, Vote on Pitches, and Get Noticed
          </p>

          <SearchForm query={query}/>
        </section>

        <section className="section_container">
          <p className="font-semibold text-2xl">
            {query ? `Results for "${query}"`:"All Startups" }

          </p>

          <ul className="mt-7 card_grid">
              {posts?.length>0?(
                posts.map((post:StartUpCardType,index:number)=>(
                  <StartupCard key={post?._id} post={post}/>
                ))
              ):(
                <p className="no-result">No results found</p>
              )}
          </ul>
        </section>
      </>
  );
}
