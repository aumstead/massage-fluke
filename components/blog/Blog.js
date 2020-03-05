import SmallHero from '../SmallHero'
import BlogNav from './BlogNav'
import BlogList from './BlogList'
import Footer from '../Footer'

const Blog = () => {
  return (
    <main>
      <SmallHero title={"Massage Fluke Community"} />
      <BlogNav />
      <BlogList />
      <Footer />
    </main>
  )
}

export default Blog;