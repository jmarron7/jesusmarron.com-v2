import posthog from 'posthog-js'
import { browser } from '$app/environment';

const posthogApiKey = import.meta.env.VITE_POSTHOG_API_KEY;
const posthogApiHost = import.meta.env.VITE_POSTHOG_API_HOST;


export const load = async () => {
  if (browser) {
    posthog.init(
      posthogApiKey,
      { 
        api_host: posthogApiHost,
        person_profiles: 'identified_only',
        capture_pageview: false,
        capture_pageleave: false,
        capture_performance: true,
      }
    )
  }
  return
};