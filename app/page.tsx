import { Montserrat, Raleway } from "next/font/google";
import Image from "next/image";
import Header from "./components/general/header";
import Footer from "./components/general/footer";

const titleFont = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const mainFont = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${mainFont.className} min-h-screen bg-[#fff4f0] text-[#2d2d2d]`}>
      <Header />
      {/* Hero Section */}
      <section className="my-6 md:mb-16 max-w-6xl mx-auto bg-white px-6 py-16 md:border md:border-[#d8bfb6] md:shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-10">
          {/* Text Content */}
          <div className="text-center">
            <h1 className={`${titleFont.className} text-[#d8bfb6] text-4xl md:text-5xl tracking-wide font-bold leading-tight`}>
              Luméa Eye Care
            </h1>
            <p className="text-lg pt-2">A mini <span className="italic font-semibold">spa break</span> at home or the office</p>
            <p className="mt-6 md:mt-10 py-4 border border-dashed border-black  font-bold text-bold">Coming Soon</p>
          </div>

          {/* Product Image */}
          <div className="pt-4 flex justify-center">
            <Image
              className="bg-[#b4cce0] rounded-lg"
              src={"/product_demo.png"}
              alt="Luméa Eye Spa"
              width={400}
              height={300}
            />
          </div>
        </div>
        <div className="max-w-5xl px-6 py-12 mx-auto grid lg:grid-cols-5 gap-x-4 items-center">
          <Image
            className="w-36 h-24 rounded-full"
            src={"/product_steam.png"}
            alt="Luméa Eye Spa"
            width={400}
            height={400}
          />
          <Image
            className="w-36 h-24 rounded-full"
            src={"/product_massage.png"}
            alt="Luméa Eye Spa"
            width={400}
            height={400}
          />
          <div>
            <h2 className="font-medium text-lg">Hydration Therapy</h2>
            <p className="pt-2">Soothing steam to hydrate the delicate under-eye area.</p>
          </div>
          <div>
            <h2 className="font-medium text-lg">Stress Relief</h2>
            <p className="pt-2">16 massage nodes to target key pressure points.</p>
          </div>
          <div>
            <h2 className="font-medium text-lg">Deep Relaxation</h2>
            <p className="pt-2">Bluetooth music for deeper relaxation and mindfulness.</p>
          </div>
        </div>
        <div className="max-w-xl mx-auto py-6 flex items-center justify-center gap-3">
          <input
            className="w-2/3 p-4 border border-[#d8bfb6] focus:outline-none focus:ring focus:ring-[#d8bfb6]"
            type="email"
            placeholder="Enter your email"
          />
          <button className="w-fit px-6 py-4 bg-[#d8bfb6] text-white font-semibold cursor-pointer hover:opacity-90">
            Notify Me
          </button>
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-6 py-20 bg-[#fdfdfd]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Latest from Our Blog</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((post) => (
              <article
                key={post}
                className="rounded-2xl shadow-md bg-white overflow-hidden hover:shadow-lg transition"
              >
                <div className="h-40 bg-[#d8bfb6]"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Blog Post Title {post}</h3>
                  <p className="text-gray-600 mb-4">
                    A short description of the blog post goes here, giving readers a
                    quick preview of the content.
                  </p>
                  <a
                    href="#"
                    className="text-[#b4cce0] font-semibold hover:underline"
                  >
                    Read more →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
