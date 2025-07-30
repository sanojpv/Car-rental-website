import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <section
      className={
        theme == "light"
          ? "bg-gray-400 py-12 px-6 md:px-20"
          : "bg-gray-900 py-12 px-6 md:px-20"
      }
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={
            theme == "light"
              ? "text-4xl md:text-5xl font-bold text-gray-800"
              : "text-white mb-6 text-4xl md:text-5xl font-bold"
          }
        >
          About Our Car Rental Service
        </h2>
        <p
          className={
            theme == "light"
              ? "text-lg text-gray-800 mb-6 leading-relaxed"
              : "text-gray-300 mb-6 leading-relaxed"
          }
        >
          Welcome to{" "}
          <span
            className={
              theme == "light"
                ? "font-semibold text-blue-600 "
                : "text-yellow-400"
            }
          >
            EuropeDrive
          </span>{" "}
          – your trusted companion for smooth, safe, and affordable car rentals.
          Whether you're planning a weekend getaway, a business trip, or simply
          want a stylish ride, we've got the perfect car for you.
        </p>

        <div className="grid gap-8 md:grid-cols-3 mt-10 text-left">
          <div
            className={
              theme == "light"
                ? "bg-gray-800 p-6 rounded-2xl "
                : "bg-gray-800 p-6 rounded-2xl shadow-md"
            }
          >
            <h3
              className={
                theme == "light"
                  ? "text-xl font-semibold text-blue-600 "
                  : "text-yellow-400 mb-2"
              }
            >
              🚗 Wide Range of Cars
            </h3>
            <p className={theme == "light" ? "text-gray-300" : "text-gray-300"}>
              Choose from hatchbacks, sedans, SUVs, and luxury cars – all
              well-maintained and ready for the road.
            </p>
          </div>

          <div
            className={
              theme == "light"
                ? "bg-gray-800 p-6 rounded-2xl "
                : "bg-gray-800 p-6 rounded-2xl shadow-md"
            }
          >
            <h3
              className={
                theme == "light"
                  ? "text-xl font-semibold text-blue-600 "
                  : "text-yellow-400 mb-2"
              }
            >
              📅 Easy Booking
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Book your ride in just a few clicks. Pick your dates, select your
              car, and you’re ready to go!
            </p>
          </div>

          <div
            className={
              theme == "light"
                ? "bg-gray-800 p-6 rounded-2xl "
                : "bg-gray-800 p-6 rounded-2xl shadow-md"
            }
          >
            <h3
              className={
                theme == "light"
                  ? "text-xl font-semibold text-blue-600 "
                  : "text-yellow-400 mb-2"
              }
            >
              💰 Affordable & Transparent
            </h3>
            <p className={theme == "light" ? "text-gray-300" : "text-gray-300"}>
              No hidden charges. Just honest pricing, flexible packages, and
              top-notch customer support.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <p
            className={
              theme == "light"
                ? "text-lg text-gray-800 mb-6 leading-relaxed"
                : "text-gray-300 mb-6 leading-relaxed"
            }
          >
            At{" "}
            <span
              className={
                theme == "light"
                  ? "font-semibold text-blue-600 "
                  : "text-yellow-400"
              }
            >
              EuropeDrive
            </span>
            , we believe driving should be a pleasure — not a hassle. Start your
            journey with us today and experience travel reimagined!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
