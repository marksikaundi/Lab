import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Component() {
  return (
    <div className="w-full">
      <section className="w-full bg-gray-950 py-12 md:py-20 lg:py-28">
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-start justify-center space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter text-gray-50 sm:text-4xl md:text-5xl lg:text-6xl">
              Tech Hack Africa
            </h1>
            <p className="max-w-[600px] text-gray-400 md:text-xl">
              Dive into the latest trends, technologies, and innovations shaping
              the tech industry with our informative and engaging podcast.
            </p>
            <div className="flex items-center gap-4">
              <Button size="lg" className="w-full max-w-[200px] md:w-auto">
                Subscribe
              </Button>
              <Link
                href="#"
                className="text-gray-400 hover:text-gray-50 transition-colors"
                prefetch={false}
              >
                <YoutubeIcon className="w-6 h-6" />
                <span className="sr-only">Subscribe on YouTube</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-gray-50 transition-colors"
                prefetch={false}
              >
                <AirplayIcon className="w-6 h-6" />
                <span className="sr-only">Subscribe on Spotify</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-gray-50 transition-colors"
                prefetch={false}
              >
                <AppleIcon className="w-6 h-6" />
                <span className="sr-only">Subscribe on Apple Podcasts</span>
              </Link>
            </div>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-xl md:h-[400px]">
            <img
              src="/placeholder.svg"
              alt="Podcast Cover Art"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-20 lg:py-28">
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="group">
              <div className="relative h-[200px] overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg"
                  alt={`Episode ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="flex flex-col gap-2">
                <h3 className="text-lg font-bold line-clamp-2">
                  Episode {index + 1}: The Future of AI in Tech
                </h3>
                <div className="text-gray-500 dark:text-gray-400">45 min</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 py-12 md:py-20 lg:py-28">
        <div className="col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">About the Host</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="rounded-full w-16 h-16 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-4xl">
                  🎙️
                </div>
                <div>
                  <h3 className="text-lg font-bold">Mark Sikaundi</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Tech Enthusiast and Podcast Host
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-gray-500 dark:text-gray-400">
                  Mark Sikaundi is a tech enthusiast and the host of The Tech
                  Hack Africa Podcast. With over 10 years of experience in the
                  industry, he shares his insights and interviews with leading
                  experts to keep you up-to-date on the latest trends and
                  innovations.
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <TwitterIcon className="w-5 h-5" />
                  <Link href="https://x.com/Alisikaundi" className="hover:underline" prefetch={false}>
                    @Alisikaundi
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <LinkedinIcon className="w-5 h-5" />
                  <Link href="https://linkedin.com/in/marksikaundi" className="hover:underline" prefetch={false}>
                    Mark Sikaundi
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Episode Categories</h2>
            <div className="grid grid-cols-2 gap-4">
              <Badge variant="secondary">AI & Machine Learning</Badge>
              <Badge variant="secondary">Web Development</Badge>
              <Badge variant="secondary">Mobile Development</Badge>
              <Badge variant="secondary">Cloud Computing</Badge>
              <Badge variant="secondary">Cybersecurity</Badge>
              <Badge variant="secondary">Entrepreneurship</Badge>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Listen to the Podcast</h2>
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://open.spotify.com/embed/episode/4XZYRd3dondnKGy9p8YITx?utm_source=generator"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              />
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Host Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full w-16 h-16 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-4xl">
                  🎙️
                </div>
                <div>
                  <h3 className="text-lg font-bold">John Doe</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Tech Enthusiast and Podcast Host
                  </p>
                </div>
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                Mark Sikaundi is a tech enthusiast and the host of The Tech
                Podcast. With over 10 years of experience in the industry, he
                shares his insights and interviews with leading experts to keep
                you up-to-date on the latest trends and innovations.
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <TwitterIcon className="w-5 h-5" />
                <Link href="https://x.com/Alisikaundi" className="hover:underline" prefetch={false}>
                  @Alisikaundi
                </Link>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <LinkedinIcon className="w-5 h-5" />
                <Link href="https://linkedin.com/in/marksikaundi" className="hover:underline" prefetch={false}>
                  Mark Sikaundi
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Episode Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Badge variant="secondary">AI & Machine Learning</Badge>
              <Badge variant="secondary">Web Development</Badge>
              <Badge variant="secondary">Mobile Development</Badge>
              <Badge variant="secondary">Cloud Computing</Badge>
              <Badge variant="secondary">Cybersecurity</Badge>
              <Badge variant="secondary">Entrepreneurship</Badge>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Follow Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <TwitterIcon className="w-5 h-5" />
                <Link href="https://x.com/Alisikaundi" className="hover:underline" prefetch={false}>
                  @lupleg
                </Link>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <InstagramIcon className="w-5 h-5" />
                <Link href="https://intagram.com/marksikaundi" className="hover:underline" prefetch={false}>
                  Lupleg
                </Link>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <YoutubeIcon className="w-5 h-5" />
                <Link href="https://youtube.com/@Lupleg" className="hover:underline" prefetch={false}>
                  Lupleg
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function AirplayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
      <path d="m12 15 5 6H7Z" />
    </svg>
  );
}

function AppleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
