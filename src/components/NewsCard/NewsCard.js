export default function NewsCard() {
  return (
    <article>
      <img src="https://picsum.photos/200" alt="news" className="w-full" />
      <p className="text-sm my-4">
        <span className="bg-gray-200 p-1 rounded-md">Fashion</span> 3 mins read
      </p>
      <h3 className="text-xl font-bold">
        10 Tips for Choosing the Perfect Aso-Oke
      </h3>
      <p className="text-sm my-4">
        Learn how to select the best aso-oke for your special occasion.
      </p>
      <a href="#i" className="text-base">
        Read More <span>&#8250;</span>
      </a>
    </article>
  );
}
