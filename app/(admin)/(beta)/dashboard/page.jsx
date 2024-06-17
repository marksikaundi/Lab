import React from "react";

export default async function page() {
  return (
    <main className="flex flex-col items-center container px-4 mx-auto mt-20">
      <div className="flex flex-col-reverse items-center flex-wrap gap-5 w-full mb-20 lg:flex-row lg:items-start lg:flex-nowrap">
        <div className="flex flex-col gap-6 flex-none w-full lg:max-w-xs">
          <section className="p-2 divide-y divide-green-100/30 h-max">
            <div className="flex items-center gap-4 pb-6">
              <img
                className="w-16 aspect-square rounded-full"
                src="https://o2osell.com/oc/img/male_default_dp.png"
                alt="user"
              />
              <div className="space-y-2 truncate">
                <div className="flex pt-1">
                  <p className="text-2xl font-bold tracking-wide truncate">
                    UserId
                  </p>
                </div>
                <p className="text-green-900 text-sm xl:text-md">
                  Member since 4/16/2024
                </p>
              </div>
            </div>
            <div className="py-6 space-y-1">
              <div className="flex justify-between">
                <p>Total Likes</p>
                <span className="text-green-900">0</span>
              </div>
              <div className="flex justify-between">
                <p>Challenges Completed</p>
                <span className="text-green-900">0</span>
              </div>
              <div className="flex justify-between">
                <p>Current Streak</p>
                <span className="text-green-900">0</span>
              </div>
              <div className="flex justify-between">
                <p>Best Streak</p>
                <span className="text-green-900">0</span>
              </div>
              <div className="flex justify-between">
                <p>Streak Updated Today</p>
                <span className="text-green-900">❌</span>
              </div>
              <div className="flex justify-between">
                <p>Streak Resets in</p>
                <span className="text-green-900">13:33:59</span>
              </div>
              <div className="flex justify-between">
                <p>Referrals</p>
                <span className="text-green-900">0</span>
              </div>
            </div>
          </section>
          <div className="p-2">
            <h3 className="font-bold text-lg text-center tracking-wide mb-2">
              Badges to unlock:
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 py-2">
                <a
                  className="w-14 h-14 md:w-16 md:h-16 -ml-4 transition hover:scale-110"
                  href="/badges"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk6bhH9kDEON9H6KRajt1h2cVdCOqZQwdkU0Ah6hXwXA&s"
                    alt="I Coded These - Bronze"
                  />
                </a>
                <div className="flex flex-col flex-1 gap-2">
                  <div className="flex justify-between items-center text-green-900">
                    <a
                      className="font-semibold transition break-words hover:text-green-950"
                      href="/badges"
                    >
                      I Coded These - Bronze
                    </a>
                    <small className="flex-none">0 / 3</small>
                  </div>
                  <div className="bg-green-800 rounded-xl relative h-3 overflow-hidden">
                    <div
                      className="bg-green-600 absolute top-0 left-0 h-full rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-2 py-2">
                <a
                  className="w-14 h-14 md:w-16 md:h-16 -ml-4 transition hover:scale-110"
                  href="/badges"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk6bhH9kDEON9H6KRajt1h2cVdCOqZQwdkU0Ah6hXwXA&s"
                    alt="I Coded These - Bronze"
                  />
                </a>
                <div className="flex flex-col flex-1 gap-2">
                  <div className="flex justify-between items-center text-green-900">
                    <a
                      className="font-semibold transition break-words hover:text-green-950"
                      href="/badges"
                    >
                      I Coded These - Bronze
                    </a>
                    <small className="flex-none">0 / 3</small>
                  </div>
                  <div className="bg-green-800 rounded-xl relative h-3 overflow-hidden">
                    <div
                      className="bg-green-600 absolute top-0 left-0 h-full rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-2 py-2">
                <a
                  className="w-14 h-14 md:w-16 md:h-16 -ml-4 transition hover:scale-110"
                  href="/badges"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk6bhH9kDEON9H6KRajt1h2cVdCOqZQwdkU0Ah6hXwXA&s"
                    alt="I Coded These - Bronze"
                  />
                </a>
                <div className="flex flex-col flex-1 gap-2">
                  <div className="flex justify-between items-center text-green-900">
                    <a
                      className="font-semibold transition break-words hover:text-green-950"
                      href="/badges"
                    >
                      I Coded These - Bronze
                    </a>
                    <small className="flex-none">0 / 3</small>
                  </div>
                  <div className="bg-green-800 rounded-xl relative h-3 overflow-hidden">
                    <div
                      className="bg-green-600 absolute top-0 left-0 h-full rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-2 py-2">
                <a
                  className="w-14 h-14 md:w-16 md:h-16 -ml-4 transition hover:scale-110"
                  href="/badges"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk6bhH9kDEON9H6KRajt1h2cVdCOqZQwdkU0Ah6hXwXA&s"
                    alt="I Coded These - Bronze"
                  />
                </a>
                <div className="flex flex-col flex-1 gap-2">
                  <div className="flex justify-between items-center text-green-900">
                    <a
                      className="font-semibold transition break-words hover:text-green-950"
                      href="/badges"
                    >
                      I Coded These - Bronze
                    </a>
                    <small className="flex-none">0 / 3</small>
                  </div>
                  <div className="bg-green-800 rounded-xl relative h-3 overflow-hidden">
                    <div
                      className="bg-green-600 absolute top-0 left-0 h-full rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-2 py-2">
                <a
                  className="w-14 h-14 md:w-16 md:h-16 -ml-4 transition hover:scale-110"
                  href="/badges"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk6bhH9kDEON9H6KRajt1h2cVdCOqZQwdkU0Ah6hXwXA&s"
                    alt="I Coded These - Bronze"
                  />
                </a>
                <div className="flex flex-col flex-1 gap-2">
                  <div className="flex justify-between items-center text-green-900">
                    <a
                      className="font-semibold transition break-words hover:text-green-950"
                      href="/badges"
                    >
                      I Coded These - Bronze
                    </a>
                    <small className="flex-none">0 / 3</small>
                  </div>
                  <div className="bg-green-800 rounded-xl relative h-3 overflow-hidden">
                    <div
                      className="bg-green-600 absolute top-0 left-0 h-full rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-2 py-2">
                <a
                  className="w-14 h-14 md:w-16 md:h-16 -ml-4 transition hover:scale-110"
                  href="/badges"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk6bhH9kDEON9H6KRajt1h2cVdCOqZQwdkU0Ah6hXwXA&s"
                    alt="I Coded These - Bronze"
                  />
                </a>
                <div className="flex flex-col flex-1 gap-2">
                  <div className="flex justify-between items-center text-green-900">
                    <a
                      className="font-semibold transition break-words hover:text-green-950"
                      href="/badges"
                    >
                      I Coded These - Bronze
                    </a>
                    <small className="flex-none">0 / 3</small>
                  </div>
                  <div className="bg-green-800 rounded-xl relative h-3 overflow-hidden">
                    <div
                      className="bg-green-600 absolute top-0 left-0 h-full rounded-full"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <ul className="bg-green-500 p-4 rounded-md flex items-center gap-4 text-lg w-full">
            <li>
              <button className="hover:opacity-75 font-semibold">
                Challenge
              </button>
            </li>
            <li>
              <button className="hover:opacity-75 text-green-900">Feed</button>
            </li>
            <li>
              <button className="hover:opacity-75 text-green-900">
                Last 24h
              </button>
            </li>
            <li className="ml-auto">
              <a
                className="flex items-center gap-1 border-2 p-2 rounded-md font-semibold transition bg-green-700 text-sm border-none md:px-2 hover:bg-green-800"
                href="editor"
              >
                <span className="hidden md:inline-block">Code</span>
              </a>
            </li>
          </ul>

          <div className="flex flex-col xl:flex-row gap-4">
            <div className="rounded-md w-full">
              <h2 className="flex items-center justify-between font-bold text-xl tracking-wide mb-4">
                Featured Challenges
                <a className="underline text-base" href="a">
                  View all challenges
                </a>
              </h2>
              <section className="flex flex-col md:flex-row gap-4">
                <div className="bg-green-500 flex flex-col gap-4 rounded-md p-4 relative">
                  <h3 className="flex gap-2 items-center text-xl font-semibold">
                    Birthday List
                  </h3>
                  <div className="relative">
                    <img
                      className="w-full rounded-md object-cover"
                      src="https://w7.pngwing.com/pngs/804/367/png-transparent-birthday-cake-party-wish-happy-birthday-happy-birthday-text-text-happy-birthday-to-you-balloon.png"
                      alt="Birthday List"
                    />
                  </div>
                  <div className="flex flex-col gap-4 md:flex-row">
                    <a
                      className="bg-green-800 w-full border border-transparent block text-center font-semibold p-2 rounded-md grow hover:bg-opacity-60"
                      href="/modes/design-to-code/39"
                    >
                      Start
                    </a>
                    <a
                      className="bg-green-800 font-semibold w-full border border-green-900 block text-center p-2 px-4 rounded-md hover:bg-green-700"
                      href="/modes/design-to-code/39/submissions"
                    >
                      Submissions
                    </a>
                  </div>
                </div>
                <div className="bg-green-500 flex flex-col gap-4 rounded-md p-4 relative">
                  <h3 className="flex gap-2 items-center text-xl font-semibold">
                    Circle Team
                  </h3>
                  <div className="relative">
                    <img
                      className="w-full rounded-md object-cover"
                      src="https://w7.pngwing.com/pngs/804/367/png-transparent-birthday-cake-party-wish-happy-birthday-happy-birthday-text-text-happy-birthday-to-you-balloon.png"
                      alt="Circle Team"
                    />
                  </div>
                  <div className="flex flex-col gap-4 md:flex-row">
                    <a
                      className="bg-green-800 w-full border border-transparent block text-center font-semibold p-2 rounded-md grow hover:bg-opacity-60"
                      href="/modes/design-to-code/39"
                    >
                      Start
                    </a>
                    <a
                      className="bg-green-800 font-semibold w-full border border-green-900 block text-center p-2 px-4 rounded-md hover:bg-green-700"
                      href="/modes/design-to-code/39/submissions"
                    >
                      Submissions
                    </a>
                  </div>
                </div>
              </section>

              <h2 className="font-bold text-xl tracking-wide mt-8 mb-4">
                Recently Completed Challenges
              </h2>
              <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-500 flex flex-col gap-4 rounded-md p-4 relative">
                  <h3 className="flex gap-2 items-center text-xl font-semibold">
                    Circle Team
                  </h3>
                  <div className="relative">
                    <img
                      className="w-full rounded-md object-cover"
                      src="https://w7.pngwing.com/pngs/804/367/png-transparent-birthday-cake-party-wish-happy-birthday-happy-birthday-text-text-happy-birthday-to-you-balloon.png"
                      alt="Circle Team"
                    />
                  </div>
                  <div className="flex flex-col gap-4 md:flex-row">
                    <a
                      className="bg-green-800 w-full border border-transparent block text-center font-semibold p-2 rounded-md grow hover:bg-opacity-60"
                      href="/modes/design-to-code/39"
                    >
                      Start
                    </a>
                    <a
                      className="bg-green-800 font-semibold w-full border border-green-900 block text-center p-2 px-4 rounded-md hover:bg-green-700"
                      href="/modes/design-to-code/39/submissions"
                    >
                      Submissions
                    </a>
                  </div>
                </div>
                <div className="bg-green-500 flex flex-col gap-4 rounded-md p-4 relative">
                  <h3 className="flex gap-2 items-center text-xl font-semibold">
                    Circle Team
                  </h3>
                  <div className="relative">
                    <img
                      className="w-full rounded-md object-cover"
                      src="https://w7.pngwing.com/pngs/804/367/png-transparent-birthday-cake-party-wish-happy-birthday-happy-birthday-text-text-happy-birthday-to-you-balloon.png"
                      alt="Circle Team"
                    />
                  </div>
                  <div className="flex flex-col gap-4 md:flex-row">
                    <a
                      className="bg-green-800 w-full border border-transparent block text-center font-semibold p-2 rounded-md grow hover:bg-opacity-60"
                      href="/modes/design-to-code/39"
                    >
                      Start
                    </a>
                    <a
                      className="bg-green-800 font-semibold w-full border border-green-900 block text-center p-2 px-4 rounded-md hover:bg-green-700"
                      href="/modes/design-to-code/39/submissions"
                    >
                      Submissions
                    </a>
                  </div>
                </div>
                <div className="bg-green-500 flex flex-col gap-4 rounded-md p-4 relative">
                  <h3 className="flex gap-2 items-center text-xl font-semibold">
                    Circle Team
                  </h3>
                  <div className="relative">
                    <img
                      className="w-full rounded-md object-cover"
                      src="https://w7.pngwing.com/pngs/804/367/png-transparent-birthday-cake-party-wish-happy-birthday-happy-birthday-text-text-happy-birthday-to-you-balloon.png"
                      alt="Circle Team"
                    />
                  </div>
                  <div className="flex flex-col gap-4 md:flex-row">
                    <a
                      className="bg-green-800 w-full border border-transparent block text-center font-semibold p-2 rounded-md grow hover:bg-opacity-60"
                      href="/modes/design-to-code/39"
                    >
                      Start
                    </a>
                    <a
                      className="bg-green-800 font-semibold w-full border border-green-900 block text-center p-2 px-4 rounded-md hover:bg-green-700"
                      href="/modes/design-to-code/39/submissions"
                    >
                      Submissions
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-green-600 font-bold text-sm border-none px-4 py-2 rounded-md hover:bg-green-600/60 fixed bottom-16 -right-8 -rotate-90">
        Feedback
      </button>
    </main>
  );
}
