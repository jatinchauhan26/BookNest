import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Cards({ item }) {
  const [authUser] = useAuth();
  const navigate = useNavigate();

  // Preview free book without login
  const handlePreview = () => {
    if (!item.bookUrl) {
      toast.error("PDF not available for this book yet!");
      return;
    }

    window.open(item.bookUrl, "_blank", "noopener,noreferrer");
  };

  // Free books download without login; paid books require login
  const handleBuyNow = () => {
    if (item.category === "Free") {
      if (!item.bookUrl) {
        toast.error("PDF not available for this book yet!");
        return;
      }

      const link = document.createElement("a");
      link.href = item.bookUrl;
      link.download = "";
      document.body.appendChild(link);
      link.click();
      link.remove();

      toast.success("Your book download has started!");
      return;
    }

    // Login required only for paid books
    if (!authUser) {
      toast.error("Please log in to access paid books!");
      navigate("/signup");
      return;
    }

    toast("Paid book checkout will be added later.");
  };

  return (
    <div className="mt-4 my-3 p-3 h-full">
      <div className="card w-full h-[420px] bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border flex flex-col overflow-hidden">
        <figure className="h-48 w-full shrink-0 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </figure>

        <div className="card-body p-4 flex flex-col flex-1">
          <h2 className="card-title text-base flex items-start justify-between gap-2">
            <span className="line-clamp-2">{item.name}</span>

            <div className="badge badge-secondary shrink-0">
              {item.category}
            </div>
          </h2>

          <p className="text-sm line-clamp-2">{item.title}</p>

          <div className="card-actions justify-between items-center mt-auto">
            <div className="badge badge-outline">
              ${item.price}
            </div>

            {item.category === "Free" ? (
              <div className="flex gap-2 flex-wrap justify-end">
                <button
                  type="button"
                  onClick={handlePreview}
                  className="cursor-pointer px-3 py-1 rounded-full border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white duration-200"
                >
                  Preview PDF
                </button>

                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="cursor-pointer px-3 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200"
                >
                  Download Book
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleBuyNow}
                className="cursor-pointer px-3 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white duration-200"
              >
                Buy Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;