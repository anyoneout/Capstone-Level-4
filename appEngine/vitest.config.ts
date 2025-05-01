import { UserConfigExport } from "vitest/config";

export default {
  test: {
    globals: true, //allows the use of describe, it and expect without importing them.
    watch: false, // by default vitest watches test
  },
} as UserConfigExport;
