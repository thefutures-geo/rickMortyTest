import { boot } from "quasar/wrappers";
import { createPinia } from "pinia";

export default boot(({ app }) => {
  // Initialize Pinia
  const pinia = createPinia();
  app.use(pinia);
});

// Export the created Pinia instance
export { boot };
