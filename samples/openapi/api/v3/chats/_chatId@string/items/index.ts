/* eslint-disable */
import type * as Types from '../../../../../@types'

export type Methods = {
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken & Types.UserInstanceIdHeader

    query?: {
      offset?: number
      ids?: string
    }

    status: 200

    resBody: {
      limit: number
      offset: number
    }
  }

  post: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken
    status: 200

    resBody: {
      id: string
    }

    reqBody: {
      type: Types.CardEnumModel
      title?: string
      abstract?: string
      sourceName?: string
      image?: string
      imageId?: string
      quotePerson?: string
      quote?: string
      url?: string
      quotePersonImageId?: string
      quotePersonImage?: string
      quoteSource?: string
      quotePersonHandle?: string
      videoId?: string
      text?: string
      headline?: string
      quoteCreated?: string
      published?: boolean
      formattedText?: string
    }
  }
}
