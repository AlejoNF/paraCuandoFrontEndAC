import Footer from '@/components/Footer';
import NarvarUser from '@/components/NarvarUser';
import Preferences from '@/components/Preferences';
import Search from '@/components/Search';
import StoreRecent from '@/components/stores/StoreRecent';
import StoresPopular from '@/components/stores/StoresPopular';
import StoreSugestion from '@/components/stores/StoreSugestion';
import Image from 'next/image';

const brand_id = () => {
  return (
    <div>
      <section>
        <NarvarUser />
      </section>
      <section>
        <div className="pt-[71px] ">
          <div className="flex justify-start">
            {/* <span>Title</span>
          <span>/ Title</span>
          <span>/ Title</span> */}
            <h2 className="absolute mt-[30px] pl-[10%] py-3 rounded-full text-yellow-300 font-semibold text-900 text-5xl">
              {/* <div className=""></div> */}
              Marcas y tiendas
            </h2>
            <p className="absolute mt-[100px] pl-[10%] py-3 rounded-full text-white font-semibold text-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio,
              excepturi.
            </p>
            <Image
              width={1285}
              height={204}
              src="/Store.png"
              alt="atoms-img"
              className="w-full h-[204px]"
            ></Image>
            {/* <img
              className="w-[1280px] h-[204px] "
              src="/Store.png"
              alt="atoms-img"
            /> */}
          </div>
        </div>
      </section>

      <section>
        <Search />
      </section>

      <section>
        <StoresPopular />
      </section>

      <section>
        <StoreSugestion />
      </section>

      <section>
        <Preferences />
      </section>

      <section>
        <StoreRecent />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
};

export default brand_id;
