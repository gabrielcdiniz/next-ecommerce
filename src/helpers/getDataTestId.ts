import { DATA_TEST_IDS } from "@/constants/unit-tests";

export const getDataTestId = (key: keyof (typeof DATA_TEST_IDS)) => `${DATA_TEST_IDS[key]}-testid`;
