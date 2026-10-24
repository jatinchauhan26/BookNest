
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import { useSearch } from "../context/SearchProvider";

function Freebook() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

  const { searchQuery } = useSearch();

  useEffect(() => {
    const getBook = async () => {
      try {
       const res = await axios.get("https://booknest-12a0.onrender.com/book");

        const data = res.data.filter(
          (item) => item.category === "Free"
        );

        setBook(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    getBook();
  }, []);

  const filteredBooks = book.filter((item) =>
    `${item.name || ""} ${item.title || ""}`
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase())
  );

  return (
    <section
      id="free-books"
      className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-2 pb-8"
    >
      <div className="mb-6">
        <h2 className="font-bold text-xl md:text-2xl pb-2">
          Free Books for Everyone
        </h2>

        <p className="text-sm md:text-base leading-relaxed opacity-90">
          Explore our collection of free books and start learning
          today. Discover useful resources on programming, web
          development, databases, and computer science. Choose a book
          that interests you and download it to begin your learning
          journey.
        </p>
      </div>

      {loading ? (
        <p className="mt-6">Loading free books...</p>
      ) : filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.map((item) => (
            <Cards item={item} key={item._id} />
          ))}
        </div>
      ) : (
        <div className="py-8 text-center">
          <p className="font-semibold text-lg">
            No matching books found.
          </p>
          {searchQuery.trim() && (
            <p className="text-sm opacity-70 mt-2">
              Try another search term to find a book.
            </p>
          )}
        </div>
      )}
    </section>
  );
}

export default Freebook;
