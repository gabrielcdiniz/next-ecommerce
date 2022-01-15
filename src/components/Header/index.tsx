import Image from "next/image";

import { BUSINESS_NAME } from "../../constants/production";

export const Header = () => {
  return (
    <header>
      <section>
        <figure>
          <Image src={"/cart-logo.png"} alt="" width={50} height={50} />
        </figure>
        <h1>{BUSINESS_NAME}</h1>
      </section>
    </header>
  );
};
