import Layout from "@/Layout";

export default function Home() {
  return (
    <Layout title="Search" className={` bg-primary`}>
      <div className="container mx-auto bg-blac">
        <section>
          <div className="flex flex-col  justify-center items-center mt-10 px-4">
            <h2 className="text-xl textcenter mt-0 mb-5">Search NFT rarity</h2>
            <input type="text" placeholder="Type keyword" />
          </div>
        </section>

        <section className="pb-20">
          <div className="image-gallery mt-10">
            <div className="">hellos</div>
            <div className="">hellos</div>
            <div className="">hellos</div>
            <div className="">hellos</div>
            <div className="">hellos</div>
            <div className="">hellos</div>
            <div className="">hellos</div>
            <div className="">hellos</div>
            <div className="">hellos</div>
            <div className="">hellos</div>
            <div className="">hellos</div>
            <div className="">hellos</div>
            <div className="">hellos</div>
            <div className="">hellos</div>
            <div className="">hellos</div>
            <div className="">hellos</div>
            <div className="">hellos</div>
          </div>

          <div className="flex justify-center items-center mt-14 space-x-5">
            <div className="bg-[#] border p-4 w-5 h-5 text-white justify-center items-center flex rounded-md">
              1
            </div>
            <div className="bg-[#111] p-4 border border-black w-6 h-6  text-white justify-center items-center flex rounded-md">
              2
            </div>
            <div className="bg-[#] border p-4 w-5 h-5 text-white justify-center items-center flex rounded-md">
              3
            </div>
            <div className="bg-[#] border p-4 w-5 h-5 text-white justify-center items-center flex rounded-md">
              4
            </div>
            <div className="bg-[#] border p-4 w-5 h-5 text-white justify-center items-center flex rounded-md">
              5
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
