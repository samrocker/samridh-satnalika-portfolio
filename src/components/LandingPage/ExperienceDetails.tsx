import React from "react";

const ExperienceDetails = () => {
  return (
    <section>
      <main className="max-w-[1440px] m-auto">
        <div className="py-5 px-5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-between gap-5">
          <div className="py-5 flex-[1] flex-between flex-col gap-5 border-b-2 lg:border-b-0 lg:border-r-2 border-primary/50">
            <div className="flex-[1] w-full flex-center">
              <h1 className="text-primary text-8xl font-bold gradient-text">
                4+
              </h1>
            </div>
            <div className="flex-[1] w-full flex-center flex-col">
              <h1 className="text-2xl text-primary/75 font-bold">
                Years Of Dvelopment
              </h1>
              <h1 className="text-2xl text-primary/75 font-bold">experience</h1>
            </div>
          </div>
          <div className="py-5 flex-[1] flex-between flex-col gap-5 5 border-b-2 lg:border-b-0 lg:border-r-2 border-primary/50">
            <div className="flex-[1] w-full flex-center">
              <h1 className="text-primary text-8xl font-bold gradient-text">
                10+
              </h1>
            </div>
            <div className="flex-[1] w-full flex-center flex-col">
              <h1 className="text-2xl text-primary/75 font-bold">
                Overall Global
              </h1>
              <h1 className="text-2xl text-primary/75 font-bold">Customers</h1>
            </div>
          </div>
          <div className="py-5 px-5 flex-[1] flex-between flex-col gap-5 border-b-2 lg:border-b-0 border-primary/50">
            <div className="flex-[1] w-full flex-center">
              <h1 className="text-primary text-8xl font-bold gradient-text">
                34+
              </h1>
            </div>
            <div className="flex-[1] w-full flex-center flex-col ">
              <h1 className="text-2xl text-primary/75 font-bold">
                Projects I Have
              </h1>
              <h1 className="text-2xl text-primary/75 font-bold">Worked on</h1>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ExperienceDetails;
