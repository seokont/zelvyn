export function trackEvent(
  eventName: string,
  data?: Record<string, unknown>,
) {
  if (import.meta.env.DEV) {
    console.debug(`[analytics] ${eventName}`, data ?? {});
  }
}
