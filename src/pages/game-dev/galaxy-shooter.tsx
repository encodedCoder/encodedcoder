import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

const GalaxyShooter = () => {
  return (
    <div>
      <Head>
        <title>Galaxy Shooter · Game</title>
        <meta
          name="description"
          content="Welcome to Galaxy Shooter game page."
        />
      </Head>
      <Header />
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl">
          <h1 className="text-4xl font-bold mb-6 text-center text-black">
            Galaxy Shooter
          </h1>
          <div className="flex justify-center mb-6">
            <div>
              <Image
                src="/images/projects/gamedev/galaxy-shooter/logo.png"
                alt="Galaxy Shooter"
                title="Galaxy Shooter"
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
                Galaxy Shooter is an action-packed space shooter game where
                players defend the galaxy from alien invaders.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-left text-black">
                Game Mechanics Planning
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The game features fast-paced shooting mechanics, power-ups, and
                challenging enemy waves.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-left text-black">
                Game Animations
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Stunning animations and visual effects bring the space battles
                to life, providing an immersive experience.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Spaceship",
                    src: "https://img.itch.zone/aW1nLzE5NDg3MDI4LmdpZg==/original/awWtfB.gif",
                  },
                  {
                    title: "Laser",
                    src: "https://img.itch.zone/aW1nLzE5NDg3MDI3LmdpZg==/original/awWtfA.gif",
                  },
                  {
                    title: "Explosion",
                    src: "https://img.itch.zone/aW1nLzE5NDg3MDI2LmdpZg==/original/awWtfZ.gif",
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
                develop Galaxy Shooter.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-left text-black">
                Play the Game
              </h2>
              <iframe
                src="https://encodedcoder.github.io/galaxy-shooter-webGL/"
                width="100%"
                height="600px"
                className="border-0"
                title="Galaxy Shooter Game"
              ></iframe>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GalaxyShooter;
