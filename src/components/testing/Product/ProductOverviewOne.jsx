import React from "react";

export function ProductOverviewOne() {
  return (
    <div className="bg-stone-200">
      <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
        <div className="pt-8 bg-">
          <div className="flex items-center">
            <li className="text-body mt-0.5 text-4xl">/</li>

            <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
              <a className="felx items-center text-4xl font-bold " href="#">
                Rice
              </a>
            </li>
          </div>
        </div>
        <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
          <div className="col-span-5 grid grid-cols-2 gap-2.5">
            {Array.from({ length: 2 }, (_, i) => (
              <div
                key={i}
                className="col-span-1 transition duration-150 ease-in hover:opacity-90"
              >
                <img
                  src="https://media.istockphoto.com/id/966855552/photo/tractor-spraying-pesticides-on-soybean-field-with-sprayer-at-spring.jpg?s=612x612&w=0&k=20&c=jW1pVhnH6UbOIQvfpQDc3Q5OxZTD0WSANSTFG3Nmzjc="
                  alt="Nike Air Max 95 By You--0"
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="col-span-4 pt-8 lg:pt-0">
            <div className="mb-7 border-b border-gray-300 pb-7">
              <h2 className="text-heading mb-3.5 text-lg font-semibold md:text-xl lg:text-2xl 2xl:text-3xl">
                Farmer Name :<br />
                <p>Address : </p>
                <p>ETH ID : </p>
              </h2>
              <p className="items-center text-body text-2xl font-bold leading-6 lg:leading-8">
                Raw Rice
              </p>
              <div className="flex mt-5  items-center ">
                <div className="text-heading pr-2 text-base font-mediumbold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                  60.00 rs
                </div>
                <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
                  99.00 rs
                </span>
              </div>
            </div>

            <div className="space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
              <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
                <form class="max-w-xs mx-auto">
                  <label
                    for="quantity-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Choose quantity:
                  </label>
                  <div class="relative flex items-center max-w-[8rem]">
                    <button
                      type="button"
                      id="decrement-button"
                      data-input-counter-decrement="quantity-input"
                      class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                      <svg
                        class="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      id="quantity-input"
                      data-input-counter
                      aria-describedby="helper-text-explanation"
                      class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="1"
                      required
                    />
                    <button
                      type="button"
                      id="increment-button"
                      data-input-counter-increment="quantity-input"
                      class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                      <svg
                        class="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                  <p
                    id="helper-text-explanation"
                    class="mt-2 text-sm text-gray-500 dark:text-gray-400"
                  >
                    Please select a 5 digit number from 0 to 9.
                  </p>
                </form>
              </div>
              <button
                type="button"
                className="h-11 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add to cart
              </button>
            </div>
            <div className="py-6 ">
              <ul className="space-y-5 pb-1 text-sm">
                <li>
                  <span className="text-heading inline-block pr-2 font-semibold">
                    SKU:
                  </span>
                  N/A
                </li>
                <li>
                  <span className="text-heading inline-block pr-2 font-semibold">
                    Category:
                  </span>
                  <a
                    className="hover:text-heading transition hover:underline"
                    href="#"
                  >
                    kids
                  </a>
                </li>
                <li className="productTags">
                  <span className="text-heading inline-block pr-2 font-semibold">
                    Tags:
                  </span>
                  <a
                    className="hover:text-heading inline-block pr-1.5 transition last:pr-0 hover:underline"
                    href="#"
                  >
                    Na
                  </a>
                </li>
              </ul>
            </div>
            <div className="shadow-sm ">
              <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                  Product Details
                </h2>
                <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center">
                  <div className="bg-heading h-0.5 w-full rounded-sm" />
                  <div className="bg-heading absolute bottom-0 h-full w-0.5 origin-bottom scale-0 transform rounded-sm transition-transform duration-500 ease-in-out" />
                </div>
              </header>
              <div>
                <div className="pb-6 text-sm leading-7 text-gray-600 md:pb-7">
                  Our Customer Experience Team is available 7 days a week and we
                  offer 2 ways to get in contact.Email and Chat . We try to
                  reply quickly, so you need not to wait too long for a
                  response!.
                </div>
              </div>
            </div>
            <div className="">
              <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                  Additional Information
                </h2>
              </header>
            </div>
            <div className="">
              <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                  Customer Reviews
                </h2>
              </header>
              <p className=""></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
