export type EventName = 
  | 'page_view'
  | 'hero_cta_click'
  | 'feature_view'
  | 'pricing_view'
  | 'billing_toggle'
  | 'plan_select'
  | 'comparison_expand'
  | 'pricing_faq_open'
  | 'enterprise_cta_click'
  | 'get_started_click'
  | 'demo_click'
  | 'demo_start'
  | 'form_submit'
  | 'login_click'
  | 'signup_click';

export function trackEvent(eventName: EventName, properties?: Record<string, any>) {
  // In a production environment, this would integrate with Google Analytics, Plausible, etc.
  // For the AI Studio preview, we just log to the console safely.
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Analytics Track]: ${eventName}`, properties);
  }
}
