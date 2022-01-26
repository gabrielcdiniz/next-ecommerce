import Image from "next/image";

import { BUSINESS_NAME } from "@/constants/production";
import { useBEM } from "@/hooks/useBEM";
import { getDataTestId } from "@/helpers/getDataTestId";

import styles from "./styles.module.scss";

const tid = getDataTestId;

export const Header = () => {
  const { getStyle } = useBEM(styles);

  return (
    <header className={getStyle("header")}>
      <section title="header-sections">
        <figure
          data-testid={getDataTestId("logoImage")}
          className={getStyle("header", "image")}
        >
          <Image
            src={"/cart-logo.png"}
            alt="cart-logo.png"
            width={40}
            height={40}
          />
        </figure>

        <h1
          data-testid={tid("siteName")}
          className={getStyle("header", "site-name")}
        >
          {BUSINESS_NAME}
        </h1>
      </section>

      <section title="header-sections">
        <button
          data-testid={tid("cartAction")}
          className={getStyle("header", "cart-button")}
          type="button"
        >
          <figure
            data-testid={tid("cartImage")}
            className={getStyle("header", "cart-image")}
          >
            <Image
              src={"/cart-simple.png"}
              alt="cart-simple.png"
              width={32}
              height={32}
            />
          </figure>

          <span
            data-testid={tid("cartBadge")}
            className={getStyle("header", "cart-badge")}
          >
            +9
          </span>
        </button>
      </section>
    </header>
  );
};
