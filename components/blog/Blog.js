import SmallHero from '../SmallHero'
import BlogNav from './BlogNav'
import BlogList from './BlogList'

const Blog = () => {
  return (
    <main>
      <SmallHero title={"Massage Fluke Community"} />
      <BlogNav />
      <BlogList />
    </main>
  )
}

export default Blog;