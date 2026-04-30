import { bloomOvenTenant } from "@/tenants/bloom-oven";
import type { Tenant } from "./tenant.types";

// Active tenant. In a multi-tenant setup this would be selected at runtime
// (subdomain, env var, etc.). For now we statically resolve to Bloom Oven.
export const tenant: Tenant = bloomOvenTenant;

export type { Tenant } from "./tenant.types";
