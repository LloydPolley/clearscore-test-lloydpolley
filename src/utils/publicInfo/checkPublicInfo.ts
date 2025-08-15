import type { PublicInfoType } from "../../types";

export const checkPublicInfo = (publicInfo: PublicInfoType): boolean => {
  return publicInfo?.courtAndInsolvencies?.length === 0;
};
