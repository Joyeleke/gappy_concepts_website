import NewsCard from "../NewsCard/NewsCard";

export default function NewsDisplay() {
  return (
    <section className="px-24 my-20">
      <h4 className="font-medium mb-6">Articles</h4>
      <h1 className="text-3xl font-bold">Discover the Latest Trends</h1>
      <article className="flex justify-between items-center my-2">
        <p>Stay informed with our latest blogs</p>
        <a
          href="#i"
          className="py-1 px-6 text-base text-bold border-2 border-primary"
        >
          See More
        </a>
      </article>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-x-16">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </section>
  );
}
