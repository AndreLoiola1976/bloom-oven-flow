import type { Tenant } from "@/core/tenant/tenant.types";
import { business } from "./business";
import { contact } from "./contact";
import { catalog } from "./catalog";
import { content } from "./content";
import { theme } from "./theme";

export const bloomOvenTenant: Tenant = {
  id: "bloom-oven",
  business,
  contact,
  catalog,
  content,
  theme,
};

export default bloomOvenTenant;
