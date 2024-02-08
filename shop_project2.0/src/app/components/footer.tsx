import { Bar } from "./extra/bar";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-white pt-8 pb-6">
        <div className="container flex-wrap mx-auto px-4">
          <div className="flex flex-wrap md:flex-row flex-col md:text-left lg:text-left">
            <div className="w-full md:w-6/12 px-4">
              <h4 className="text-4xl font-bold text-RED">
                Let&aposs keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-dark">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 md:mb-0 mb-6 flex justify-center md:justify-start">
                <button
                  className="bg-dark text-RED shadow-lg font-normal h-10 w-10 items-center justify-center 
                align-center rounded-full outline-none focus:outline-none mr-2 transition ease-in-out hover:-translate-z-1 hover:scale-125"
                  type="button"
                >
                  <i className="bi bi-twitter"></i>
                </button>

                <button
                  className="bg-RED text-dark shadow-lg font-normal h-10 w-10 items-center
                justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition ease-in-out hover:-translate-z-1 hover:scale-125"
                  type="button"
                >
                  <i className="bi bi-facebook"></i>
                </button>

                <button
                  className="bg-dark text-RED shadow-lg font-normal h-10 w-10 items-center justify-center
                align-center rounded-full outline-none focus:outline-none mr-2 transition ease-in-out hover:-translate-z-1 hover:scale-125"
                  type="button"
                >
                  <i className="bi bi-linkedin"></i>
                </button>

                <button
                  className="bg-RED text-dark shadow-lg font-normal h-10 w-10 items-center justify-center
                align-center rounded-full outline-none focus:outline-none mr-2 transition ease-in-out hover:-translate-z-1 hover:scale-125"
                  type="button"
                >
                  <i className="bi bi-github"></i>
                </button>
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4 mt-6 md:mt-0">
              <div className="flex flex-wrap md:flex-row flex-col items-top mb-6">
                <div className="w-full md:w-4/12 px-4 md:ml-auto">
                  <span className="block uppercase text-RED text-sm font-bold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled text-dark">
                    <li>
                      <a
                        className="hover:text-RED block pb-2 text-sm transition ease-in-out hover:-translate-z-1 hover:scale-125"
                        href=""
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:text-RED block pb-2 text-sm transition ease-in-out hover:-translate-z-1 hover:scale-125"
                        href=""
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:text-RED block pb-2 text-sm transition ease-in-out hover:-translate-z-1 hover:scale-125"
                        href=""
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:text-RED block pb-2 text-sm transition ease-in-out hover:-translate-z-1 hover:scale-125"
                        href=""
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-4/12 px-4">
                  <span className="block uppercase text-RED font-bold text-sm mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled text-dark">
                    <li>
                      <a
                        className="hover:text-RED block pb-2 text-sm transition ease-in-out hover:-translate-z-1 hover:scale-125"
                        href=""
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:text-RED block pb-2 text-sm transition ease-in-out hover:-translate-z-1 hover:scale-125"
                        href=""
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:text-RED block pb-2 text-sm transition ease-in-out hover:-translate-z-1 hover:scale-125"
                        href=""
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:text-RED block pb-2 text-sm transition ease-in-out hover:-translate-z-1 hover:scale-125"
                        href=""
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap flex-col md:flex-row items-center md:justify-between justify-center">
            <div className="w-full px-4 mx-auto text-center">
              <Bar />
              <div>
                Copyright © <span id="get-current-year">2023</span>
                <p className="font-bold text-RED">Made by jatin Oomajee</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
