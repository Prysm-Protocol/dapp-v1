export enum Locale {
  EN = 'en'
}

export const localeConfig = {
  locales: [Locale.EN],
  defaultLocale: Locale.EN,
  urlMappingStrategy: 'rewriteDefault'
} as const

export default localeConfig
