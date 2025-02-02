import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

const BucksQuest = () => {
  return (
    <div>
      <Head>
        <title>Buck&apos;s Quest · Game</title>
        <meta name="description" content="Welcome to Buck's Quest game page." />
      </Head>
      <Header />
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-5xl">
          <h1 className="text-4xl font-bold mb-6 text-center text-black">
            Buck&apos;s Quest
          </h1>
          <div className="flex justify-center mb-6">
            <div>
              <Image
                src="/images/projects/gamedev/bucks-quest/logo.png"
                alt="Buck's Quest"
                title="Buck's Quest"
                width={128}
                height={128}
              />
            </div>
          </div>
          <div className="flex justify-center mt-6 mb-6"></div>
          <div className="text-center">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-left text-black">
                Game Idea
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Buck&apos;s Quest is an adventurous game where players embark on
                a thrilling journey to save the kingdom.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-left text-black">
                Game Mechanics Planning
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The game features intricate mechanics including puzzle-solving,
                combat, and exploration.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-left text-black">
                Game Animations
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Stunning animations bring the characters and environment to
                life, providing an immersive experience.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Idle",
                    src: "https://img.itch.zone/aW1nLzE5NDg3MDIzLmdpZg==/original/awWtfW.gif",
                  },
                  {
                    title: "Walk",
                    src: "https://img.itch.zone/aW1nLzE5NDg3MDI2LmdpZg==/original/awWtfZ.gif",
                  },
                  {
                    title: "Run",
                    src: "https://img.itch.zone/aW1nLzE5NDg3MDI3LmdpZg==/original/awWtfA.gif",
                  },
                  {
                    title: "Jump",
                    src: "https://img.itch.zone/aW1nLzE5NDg3MDI4LmdpZg==/original/awWtfB.gif",
                  },
                  {
                    title: "Push",
                    src: "https://img.itch.zone/aW1nLzE5NDg3MDI0LmdpZg==/original/awWtfX.gif",
                  },
                  {
                    title: "Pull",
                    src: "https://img.itch.zone/aW1nLzE5NDg3MDI1LmdpZg==/original/awWtfY.gif",
                  },
                ].map((animation) => (
                  <div
                    key={animation.title}
                    className="p-4 rounded-lg shadow-md"
                  >
                    <h3 className="text-xl font-bold mb-2 text-black">
                      {animation.title}
                    </h3>
                    <Image
                      src={animation.src}
                      alt={`${animation.title} Animation`}
                      title={`${animation.title} Animation`}
                      width={300}
                      height={200}
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-left text-black">
                More
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Stay tuned for more updates and features as we continue to
                develop Buck&apos;s Quest.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-left text-black">
                Play the Game
              </h2>
              <iframe
                src="https://encodedcoder.github.io/bucks-quest-webGL/"
                width="100%"
                height="600px"
                className="border-0"
                title="Buck's Quest Game"
              ></iframe>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BucksQuest;
