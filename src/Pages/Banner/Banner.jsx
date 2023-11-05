

const Banner = () => {
    return (
        <div>
        <div
          className="hero h-[75vh]"
          style={{ backgroundImage: "url(https://i.ibb.co/tDF5XM3/Banner.png)" }}
        >
          <div className="hero-overlay bg-opacity-75"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="w-[600px">
              <h2 className="mb-5 text-2xl font-bold ">
              Your One-Stop Shop for Web Development, Graphic Design, and Digital Marketing
              </h2>
              <p>
              Connect with skilled professionals who can elevate your online presence and business with
                <br />
                <span className="font-semibold">
                their specialized expertise.
                </span>
              </p>
              <div className="inline-flex mt-4">
                <div className="text-center">
                  <input
                    type="text"
                    placeholder="Search here...."
                    className=" rounded-l py-2 px-4 outline-none"
                  />
                  <button className="bg-red-500 text-white rounded-r py-2 px-4 hover:bg-blue-600">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default Banner;