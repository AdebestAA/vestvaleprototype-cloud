import 'next'

declare module 'next' {
  export interface PageProps {
    params: { slug: string }
    searchParams?: Record<string, string | string[] | undefined>
  }
}