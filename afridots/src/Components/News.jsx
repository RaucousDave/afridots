import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import NewsCard from "./NewsCard"
import { useWindowWidth } from "../Components/hooks/useWindowWidth"
import Menu from "./Menu"

const News = () => {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get("category") || "All"

  const [selected, setSelected] = useState(initialCategory)
  const width = useWindowWidth()
  const isMobile = width < 768

  // Keep state in sync if query changes (like browser back/forward)
  useEffect(() => {
    setSelected(initialCategory)
  }, [initialCategory])

  return (
    <section className="px-4 sm:px-10 md:px-20 py-8">
      <Menu isMobile={isMobile} selected={selected} setSelected={setSelected} />
      <NewsCard filter={isMobile ? "All" : selected} />
    </section>
  )
}

export default News
