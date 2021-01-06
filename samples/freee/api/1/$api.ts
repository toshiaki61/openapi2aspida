/* eslint-disable */
import { AspidaClient, BasicHeaders, dataToURLString } from 'aspida'
import { Methods as Methods0 } from './account_items'
import { Methods as Methods1 } from './account_items/_id@number'
import { Methods as Methods2 } from './banks'
import { Methods as Methods3 } from './banks/_id@number'
import { Methods as Methods4 } from './companies'
import { Methods as Methods5 } from './companies/_id@number'
import { Methods as Methods6 } from './deals'
import { Methods as Methods7 } from './deals/_id@number'
import { Methods as Methods8 } from './deals/_id@number/payments'
import { Methods as Methods9 } from './deals/_id@number/payments/_payment_id@number'
import { Methods as Methods10 } from './deals/_id@number/renews'
import { Methods as Methods11 } from './deals/_id@number/renews/_renew_id@number'
import { Methods as Methods12 } from './expense_application_line_templates'
import { Methods as Methods13 } from './expense_application_line_templates/_id@number'
import { Methods as Methods14 } from './expense_applications'
import { Methods as Methods15 } from './expense_applications/_id@number'
import { Methods as Methods16 } from './forms/selectables'
import { Methods as Methods17 } from './invoices'
import { Methods as Methods18 } from './invoices/_id@number'
import { Methods as Methods19 } from './items'
import { Methods as Methods20 } from './items/_id@number'
import { Methods as Methods21 } from './journals'
import { Methods as Methods22 } from './journals/reports/_id@number/download'
import { Methods as Methods23 } from './journals/reports/_id@number/status'
import { Methods as Methods24 } from './manual_journals'
import { Methods as Methods25 } from './manual_journals/_id@number'
import { Methods as Methods26 } from './partners'
import { Methods as Methods27 } from './partners/_id@number'
import { Methods as Methods28 } from './partners/code/_code@string'
import { Methods as Methods29 } from './quotations'
import { Methods as Methods30 } from './quotations/_id@number'
import { Methods as Methods31 } from './receipts'
import { Methods as Methods32 } from './receipts/_id@number'
import { Methods as Methods33 } from './reports/trial_bs'
import { Methods as Methods34 } from './reports/trial_bs_three_years'
import { Methods as Methods35 } from './reports/trial_bs_two_years'
import { Methods as Methods36 } from './reports/trial_pl'
import { Methods as Methods37 } from './reports/trial_pl_sections'
import { Methods as Methods38 } from './reports/trial_pl_three_years'
import { Methods as Methods39 } from './reports/trial_pl_two_years'
import { Methods as Methods40 } from './sections'
import { Methods as Methods41 } from './sections/_id@number'
import { Methods as Methods42 } from './segments/_segment_id@number/tags'
import { Methods as Methods43 } from './segments/_segment_id@number/tags/_id@number'
import { Methods as Methods44 } from './tags'
import { Methods as Methods45 } from './tags/_id@number'
import { Methods as Methods46 } from './taxes/codes'
import { Methods as Methods47 } from './taxes/codes/_code@number'
import { Methods as Methods48 } from './taxes/companies/_company_id@number'
import { Methods as Methods49 } from './transfers'
import { Methods as Methods50 } from './transfers/_id@number'
import { Methods as Methods51 } from './users'
import { Methods as Methods52 } from './users/capabilities'
import { Methods as Methods53 } from './users/me'
import { Methods as Methods54 } from './wallet_txns'
import { Methods as Methods55 } from './wallet_txns/_id@number'
import { Methods as Methods56 } from './walletables'
import { Methods as Methods57 } from './walletables/_type/_id@number'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://api.freee.co.jp' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/1/account_items'
  const PATH1 = '/api/1/banks'
  const PATH2 = '/api/1/companies'
  const PATH3 = '/api/1/deals'
  const PATH4 = '/payments'
  const PATH5 = '/renews'
  const PATH6 = '/api/1/expense_application_line_templates'
  const PATH7 = '/api/1/expense_applications'
  const PATH8 = '/api/1/forms/selectables'
  const PATH9 = '/api/1/invoices'
  const PATH10 = '/api/1/items'
  const PATH11 = '/api/1/journals'
  const PATH12 = '/api/1/journals/reports'
  const PATH13 = '/download'
  const PATH14 = '/status'
  const PATH15 = '/api/1/manual_journals'
  const PATH16 = '/api/1/partners'
  const PATH17 = '/api/1/partners/code'
  const PATH18 = '/api/1/quotations'
  const PATH19 = '/api/1/receipts'
  const PATH20 = '/api/1/reports/trial_bs'
  const PATH21 = '/api/1/reports/trial_bs_three_years'
  const PATH22 = '/api/1/reports/trial_bs_two_years'
  const PATH23 = '/api/1/reports/trial_pl'
  const PATH24 = '/api/1/reports/trial_pl_sections'
  const PATH25 = '/api/1/reports/trial_pl_three_years'
  const PATH26 = '/api/1/reports/trial_pl_two_years'
  const PATH27 = '/api/1/sections'
  const PATH28 = '/api/1/segments'
  const PATH29 = '/tags'
  const PATH30 = '/api/1/tags'
  const PATH31 = '/api/1/taxes/codes'
  const PATH32 = '/api/1/taxes/companies'
  const PATH33 = '/api/1/transfers'
  const PATH34 = '/api/1/users'
  const PATH35 = '/api/1/users/capabilities'
  const PATH36 = '/api/1/users/me'
  const PATH37 = '/api/1/wallet_txns'
  const PATH38 = '/api/1/walletables'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    account_items: {
      _id: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          get: (option: { query: Methods1['get']['query'], config?: T }) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option: { query: Methods1['get']['query'], config?: T }) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          put: (option: { body: Methods1['put']['reqBody'], config?: T }) =>
            fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
          $put: (option: { body: Methods1['put']['reqBody'], config?: T }) =>
            fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          delete: (option: { query: Methods1['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option: { query: Methods1['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods1['get']['query'] } | { method: 'delete'; query: Methods1['delete']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      get: (option: { query: Methods0['get']['query'], config?: T }) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      $get: (option: { query: Methods0['get']['query'], config?: T }) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json(),
      $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    banks: {
      _id: (val1: number) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option: { query: Methods2['get']['query'], config?: T }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json(),
      $get: (option: { query: Methods2['get']['query'], config?: T }) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    companies: {
      _id: (val1: number) => {
        const prefix1 = `${PATH2}/${val1}`

        return {
          get: (option: { query: Methods5['get']['query'], config?: T }) =>
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option: { query: Methods5['get']['query'], config?: T }) =>
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          put: (option?: { body?: Methods5['put']['reqBody'], config?: T }) =>
            fetch<Methods5['put']['resBody'], BasicHeaders, Methods5['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
          $put: (option?: { body?: Methods5['put']['reqBody'], config?: T }) =>
            fetch<Methods5['put']['resBody'], BasicHeaders, Methods5['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods5['get']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      get: (option?: { config?: T }) =>
        fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH2, GET, option).json(),
      $get: (option?: { config?: T }) =>
        fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    deals: {
      _id: (val1: number) => {
        const prefix1 = `${PATH3}/${val1}`

        return {
          payments: {
            _payment_id: (val3: number) => {
              const prefix3 = `${prefix1}${PATH4}/${val3}`

              return {
                put: (option: { body: Methods9['put']['reqBody'], config?: T }) =>
                  fetch<Methods9['put']['resBody'], BasicHeaders, Methods9['put']['status']>(prefix, prefix3, PUT, option, 'URLSearchParams').json(),
                $put: (option: { body: Methods9['put']['reqBody'], config?: T }) =>
                  fetch<Methods9['put']['resBody'], BasicHeaders, Methods9['put']['status']>(prefix, prefix3, PUT, option, 'URLSearchParams').json().then(r => r.body),
                delete: (option: { query: Methods9['delete']['query'], config?: T }) =>
                  fetch<void, BasicHeaders, Methods9['delete']['status']>(prefix, prefix3, DELETE, option).send(),
                $delete: (option: { query: Methods9['delete']['query'], config?: T }) =>
                  fetch<void, BasicHeaders, Methods9['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
                $path: (option?: { method: 'delete'; query: Methods9['delete']['query'] }) =>
                  `${prefix}${prefix3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              }
            },
            post: (option: { body: Methods8['post']['reqBody'], config?: T }) =>
              fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `${prefix1}${PATH4}`, POST, option, 'URLSearchParams').json(),
            $post: (option: { body: Methods8['post']['reqBody'], config?: T }) =>
              fetch<Methods8['post']['resBody'], BasicHeaders, Methods8['post']['status']>(prefix, `${prefix1}${PATH4}`, POST, option, 'URLSearchParams').json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH4}`
          },
          renews: {
            _renew_id: (val3: number) => {
              const prefix3 = `${prefix1}${PATH5}/${val3}`

              return {
                put: (option: { body: Methods11['put']['reqBody'], config?: T }) =>
                  fetch<Methods11['put']['resBody'], BasicHeaders, Methods11['put']['status']>(prefix, prefix3, PUT, option, 'URLSearchParams').json(),
                $put: (option: { body: Methods11['put']['reqBody'], config?: T }) =>
                  fetch<Methods11['put']['resBody'], BasicHeaders, Methods11['put']['status']>(prefix, prefix3, PUT, option, 'URLSearchParams').json().then(r => r.body),
                delete: (option: { query: Methods11['delete']['query'], config?: T }) =>
                  fetch<Methods11['delete']['resBody'], BasicHeaders, Methods11['delete']['status']>(prefix, prefix3, DELETE, option).json(),
                $delete: (option: { query: Methods11['delete']['query'], config?: T }) =>
                  fetch<Methods11['delete']['resBody'], BasicHeaders, Methods11['delete']['status']>(prefix, prefix3, DELETE, option).json().then(r => r.body),
                $path: (option?: { method: 'delete'; query: Methods11['delete']['query'] }) =>
                  `${prefix}${prefix3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              }
            },
            post: (option: { body: Methods10['post']['reqBody'], config?: T }) =>
              fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, `${prefix1}${PATH5}`, POST, option, 'URLSearchParams').json(),
            $post: (option: { body: Methods10['post']['reqBody'], config?: T }) =>
              fetch<Methods10['post']['resBody'], BasicHeaders, Methods10['post']['status']>(prefix, `${prefix1}${PATH5}`, POST, option, 'URLSearchParams').json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH5}`
          },
          get: (option: { query: Methods7['get']['query'], config?: T }) =>
            fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option: { query: Methods7['get']['query'], config?: T }) =>
            fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          put: (option?: { body?: Methods7['put']['reqBody'], config?: T }) =>
            fetch<Methods7['put']['resBody'], BasicHeaders, Methods7['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
          $put: (option?: { body?: Methods7['put']['reqBody'], config?: T }) =>
            fetch<Methods7['put']['resBody'], BasicHeaders, Methods7['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          delete: (option: { query: Methods7['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option: { query: Methods7['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods7['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods7['get']['query'] } | { method: 'delete'; query: Methods7['delete']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      get: (option: { query: Methods6['get']['query'], config?: T }) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH3, GET, option).json(),
      $get: (option: { query: Methods6['get']['query'], config?: T }) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      post: (option?: { body?: Methods6['post']['reqBody'], config?: T }) =>
        fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH3, POST, option, 'URLSearchParams').json(),
      $post: (option?: { body?: Methods6['post']['reqBody'], config?: T }) =>
        fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH3, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods6['get']['query'] }) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    expense_application_line_templates: {
      _id: (val1: number) => {
        const prefix1 = `${PATH6}/${val1}`

        return {
          get: (option: { query: Methods13['get']['query'], config?: T }) =>
            fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option: { query: Methods13['get']['query'], config?: T }) =>
            fetch<Methods13['get']['resBody'], BasicHeaders, Methods13['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          put: (option: { body: Methods13['put']['reqBody'], config?: T }) =>
            fetch<Methods13['put']['resBody'], BasicHeaders, Methods13['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
          $put: (option: { body: Methods13['put']['reqBody'], config?: T }) =>
            fetch<Methods13['put']['resBody'], BasicHeaders, Methods13['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          delete: (option: { query: Methods13['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods13['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option: { query: Methods13['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods13['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods13['get']['query'] } | { method: 'delete'; query: Methods13['delete']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      get: (option: { query: Methods12['get']['query'], config?: T }) =>
        fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, PATH6, GET, option).json(),
      $get: (option: { query: Methods12['get']['query'], config?: T }) =>
        fetch<Methods12['get']['resBody'], BasicHeaders, Methods12['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
      post: (option: { body: Methods12['post']['reqBody'], config?: T }) =>
        fetch<Methods12['post']['resBody'], BasicHeaders, Methods12['post']['status']>(prefix, PATH6, POST, option, 'URLSearchParams').json(),
      $post: (option: { body: Methods12['post']['reqBody'], config?: T }) =>
        fetch<Methods12['post']['resBody'], BasicHeaders, Methods12['post']['status']>(prefix, PATH6, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods12['get']['query'] }) =>
        `${prefix}${PATH6}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    expense_applications: {
      _id: (val1: number) => {
        const prefix1 = `${PATH7}/${val1}`

        return {
          get: (option: { query: Methods15['get']['query'], config?: T }) =>
            fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option: { query: Methods15['get']['query'], config?: T }) =>
            fetch<Methods15['get']['resBody'], BasicHeaders, Methods15['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          put: (option?: { body?: Methods15['put']['reqBody'], config?: T }) =>
            fetch<Methods15['put']['resBody'], BasicHeaders, Methods15['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
          $put: (option?: { body?: Methods15['put']['reqBody'], config?: T }) =>
            fetch<Methods15['put']['resBody'], BasicHeaders, Methods15['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          delete: (option: { query: Methods15['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods15['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option: { query: Methods15['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods15['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods15['get']['query'] } | { method: 'delete'; query: Methods15['delete']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      get: (option: { query: Methods14['get']['query'], config?: T }) =>
        fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, PATH7, GET, option).json(),
      $get: (option: { query: Methods14['get']['query'], config?: T }) =>
        fetch<Methods14['get']['resBody'], BasicHeaders, Methods14['get']['status']>(prefix, PATH7, GET, option).json().then(r => r.body),
      post: (option?: { body?: Methods14['post']['reqBody'], config?: T }) =>
        fetch<Methods14['post']['resBody'], BasicHeaders, Methods14['post']['status']>(prefix, PATH7, POST, option, 'URLSearchParams').json(),
      $post: (option?: { body?: Methods14['post']['reqBody'], config?: T }) =>
        fetch<Methods14['post']['resBody'], BasicHeaders, Methods14['post']['status']>(prefix, PATH7, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods14['get']['query'] }) =>
        `${prefix}${PATH7}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    forms: {
      selectables: {
        get: (option: { query: Methods16['get']['query'], config?: T }) =>
          fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH8, GET, option).json(),
        $get: (option: { query: Methods16['get']['query'], config?: T }) =>
          fetch<Methods16['get']['resBody'], BasicHeaders, Methods16['get']['status']>(prefix, PATH8, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods16['get']['query'] }) =>
          `${prefix}${PATH8}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    },
    invoices: {
      _id: (val1: number) => {
        const prefix1 = `${PATH9}/${val1}`

        return {
          get: (option: { query: Methods18['get']['query'], config?: T }) =>
            fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option: { query: Methods18['get']['query'], config?: T }) =>
            fetch<Methods18['get']['resBody'], BasicHeaders, Methods18['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          put: (option?: { body?: Methods18['put']['reqBody'], config?: T }) =>
            fetch<Methods18['put']['resBody'], BasicHeaders, Methods18['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
          $put: (option?: { body?: Methods18['put']['reqBody'], config?: T }) =>
            fetch<Methods18['put']['resBody'], BasicHeaders, Methods18['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          delete: (option: { query: Methods18['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods18['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option: { query: Methods18['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods18['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods18['get']['query'] } | { method: 'delete'; query: Methods18['delete']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      get: (option: { query: Methods17['get']['query'], config?: T }) =>
        fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, PATH9, GET, option).json(),
      $get: (option: { query: Methods17['get']['query'], config?: T }) =>
        fetch<Methods17['get']['resBody'], BasicHeaders, Methods17['get']['status']>(prefix, PATH9, GET, option).json().then(r => r.body),
      post: (option?: { body?: Methods17['post']['reqBody'], config?: T }) =>
        fetch<Methods17['post']['resBody'], BasicHeaders, Methods17['post']['status']>(prefix, PATH9, POST, option, 'URLSearchParams').json(),
      $post: (option?: { body?: Methods17['post']['reqBody'], config?: T }) =>
        fetch<Methods17['post']['resBody'], BasicHeaders, Methods17['post']['status']>(prefix, PATH9, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods17['get']['query'] }) =>
        `${prefix}${PATH9}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    items: {
      _id: (val1: number) => {
        const prefix1 = `${PATH10}/${val1}`

        return {
          get: (option: { query: Methods20['get']['query'], config?: T }) =>
            fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option: { query: Methods20['get']['query'], config?: T }) =>
            fetch<Methods20['get']['resBody'], BasicHeaders, Methods20['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          put: (option?: { body?: Methods20['put']['reqBody'], config?: T }) =>
            fetch<Methods20['put']['resBody'], BasicHeaders, Methods20['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
          $put: (option?: { body?: Methods20['put']['reqBody'], config?: T }) =>
            fetch<Methods20['put']['resBody'], BasicHeaders, Methods20['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          delete: (option: { query: Methods20['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods20['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option: { query: Methods20['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods20['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods20['get']['query'] } | { method: 'delete'; query: Methods20['delete']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      get: (option: { query: Methods19['get']['query'], config?: T }) =>
        fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, PATH10, GET, option).json(),
      $get: (option: { query: Methods19['get']['query'], config?: T }) =>
        fetch<Methods19['get']['resBody'], BasicHeaders, Methods19['get']['status']>(prefix, PATH10, GET, option).json().then(r => r.body),
      post: (option?: { body?: Methods19['post']['reqBody'], config?: T }) =>
        fetch<Methods19['post']['resBody'], BasicHeaders, Methods19['post']['status']>(prefix, PATH10, POST, option, 'URLSearchParams').json(),
      $post: (option?: { body?: Methods19['post']['reqBody'], config?: T }) =>
        fetch<Methods19['post']['resBody'], BasicHeaders, Methods19['post']['status']>(prefix, PATH10, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods19['get']['query'] }) =>
        `${prefix}${PATH10}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    journals: {
      reports: {
        _id: (val2: number) => {
          const prefix2 = `${PATH12}/${val2}`

          return {
            download: {
              get: (option: { query: Methods22['get']['query'], config?: T }) =>
                fetch<void, BasicHeaders, Methods22['get']['status']>(prefix, `${prefix2}${PATH13}`, GET, option).send(),
              $get: (option: { query: Methods22['get']['query'], config?: T }) =>
                fetch<void, BasicHeaders, Methods22['get']['status']>(prefix, `${prefix2}${PATH13}`, GET, option).send().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods22['get']['query'] }) =>
                `${prefix}${prefix2}${PATH13}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            },
            status: {
              get: (option: { query: Methods23['get']['query'], config?: T }) =>
                fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, `${prefix2}${PATH14}`, GET, option).json(),
              $get: (option: { query: Methods23['get']['query'], config?: T }) =>
                fetch<Methods23['get']['resBody'], BasicHeaders, Methods23['get']['status']>(prefix, `${prefix2}${PATH14}`, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods23['get']['query'] }) =>
                `${prefix}${prefix2}${PATH14}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          }
        }
      },
      get: (option: { query: Methods21['get']['query'], config?: T }) =>
        fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, PATH11, GET, option).json(),
      $get: (option: { query: Methods21['get']['query'], config?: T }) =>
        fetch<Methods21['get']['resBody'], BasicHeaders, Methods21['get']['status']>(prefix, PATH11, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods21['get']['query'] }) =>
        `${prefix}${PATH11}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    manual_journals: {
      _id: (val1: number) => {
        const prefix1 = `${PATH15}/${val1}`

        return {
          get: (option: { query: Methods25['get']['query'], config?: T }) =>
            fetch<Methods25['get']['resBody'], BasicHeaders, Methods25['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option: { query: Methods25['get']['query'], config?: T }) =>
            fetch<Methods25['get']['resBody'], BasicHeaders, Methods25['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          put: (option?: { body?: Methods25['put']['reqBody'], config?: T }) =>
            fetch<Methods25['put']['resBody'], BasicHeaders, Methods25['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
          $put: (option?: { body?: Methods25['put']['reqBody'], config?: T }) =>
            fetch<Methods25['put']['resBody'], BasicHeaders, Methods25['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          delete: (option: { query: Methods25['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods25['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option: { query: Methods25['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods25['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods25['get']['query'] } | { method: 'delete'; query: Methods25['delete']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      get: (option: { query: Methods24['get']['query'], config?: T }) =>
        fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, PATH15, GET, option).json(),
      $get: (option: { query: Methods24['get']['query'], config?: T }) =>
        fetch<Methods24['get']['resBody'], BasicHeaders, Methods24['get']['status']>(prefix, PATH15, GET, option).json().then(r => r.body),
      post: (option?: { body?: Methods24['post']['reqBody'], config?: T }) =>
        fetch<Methods24['post']['resBody'], BasicHeaders, Methods24['post']['status']>(prefix, PATH15, POST, option, 'URLSearchParams').json(),
      $post: (option?: { body?: Methods24['post']['reqBody'], config?: T }) =>
        fetch<Methods24['post']['resBody'], BasicHeaders, Methods24['post']['status']>(prefix, PATH15, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods24['get']['query'] }) =>
        `${prefix}${PATH15}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    partners: {
      _id: (val1: number) => {
        const prefix1 = `${PATH16}/${val1}`

        return {
          get: (option: { query: Methods27['get']['query'], config?: T }) =>
            fetch<Methods27['get']['resBody'], BasicHeaders, Methods27['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option: { query: Methods27['get']['query'], config?: T }) =>
            fetch<Methods27['get']['resBody'], BasicHeaders, Methods27['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          put: (option: { body: Methods27['put']['reqBody'], config?: T }) =>
            fetch<Methods27['put']['resBody'], BasicHeaders, Methods27['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
          $put: (option: { body: Methods27['put']['reqBody'], config?: T }) =>
            fetch<Methods27['put']['resBody'], BasicHeaders, Methods27['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          delete: (option: { query: Methods27['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods27['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option: { query: Methods27['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods27['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods27['get']['query'] } | { method: 'delete'; query: Methods27['delete']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      code: {
        _code: (val2: string) => {
          const prefix2 = `${PATH17}/${val2}`

          return {
            put: (option: { body: Methods28['put']['reqBody'], config?: T }) =>
              fetch<Methods28['put']['resBody'], BasicHeaders, Methods28['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
            $put: (option: { body: Methods28['put']['reqBody'], config?: T }) =>
              fetch<Methods28['put']['resBody'], BasicHeaders, Methods28['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        }
      },
      get: (option: { query: Methods26['get']['query'], config?: T }) =>
        fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, PATH16, GET, option).json(),
      $get: (option: { query: Methods26['get']['query'], config?: T }) =>
        fetch<Methods26['get']['resBody'], BasicHeaders, Methods26['get']['status']>(prefix, PATH16, GET, option).json().then(r => r.body),
      post: (option: { body: Methods26['post']['reqBody'], config?: T }) =>
        fetch<Methods26['post']['resBody'], BasicHeaders, Methods26['post']['status']>(prefix, PATH16, POST, option, 'URLSearchParams').json(),
      $post: (option: { body: Methods26['post']['reqBody'], config?: T }) =>
        fetch<Methods26['post']['resBody'], BasicHeaders, Methods26['post']['status']>(prefix, PATH16, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods26['get']['query'] }) =>
        `${prefix}${PATH16}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    quotations: {
      _id: (val1: number) => {
        const prefix1 = `${PATH18}/${val1}`

        return {
          get: (option: { query: Methods30['get']['query'], config?: T }) =>
            fetch<Methods30['get']['resBody'], BasicHeaders, Methods30['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option: { query: Methods30['get']['query'], config?: T }) =>
            fetch<Methods30['get']['resBody'], BasicHeaders, Methods30['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          put: (option?: { body?: Methods30['put']['reqBody'], config?: T }) =>
            fetch<Methods30['put']['resBody'], BasicHeaders, Methods30['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
          $put: (option?: { body?: Methods30['put']['reqBody'], config?: T }) =>
            fetch<Methods30['put']['resBody'], BasicHeaders, Methods30['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          delete: (option: { query: Methods30['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods30['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option: { query: Methods30['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods30['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods30['get']['query'] } | { method: 'delete'; query: Methods30['delete']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      get: (option: { query: Methods29['get']['query'], config?: T }) =>
        fetch<Methods29['get']['resBody'], BasicHeaders, Methods29['get']['status']>(prefix, PATH18, GET, option).json(),
      $get: (option: { query: Methods29['get']['query'], config?: T }) =>
        fetch<Methods29['get']['resBody'], BasicHeaders, Methods29['get']['status']>(prefix, PATH18, GET, option).json().then(r => r.body),
      post: (option?: { body?: Methods29['post']['reqBody'], config?: T }) =>
        fetch<Methods29['post']['resBody'], BasicHeaders, Methods29['post']['status']>(prefix, PATH18, POST, option, 'URLSearchParams').json(),
      $post: (option?: { body?: Methods29['post']['reqBody'], config?: T }) =>
        fetch<Methods29['post']['resBody'], BasicHeaders, Methods29['post']['status']>(prefix, PATH18, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods29['get']['query'] }) =>
        `${prefix}${PATH18}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    receipts: {
      _id: (val1: number) => {
        const prefix1 = `${PATH19}/${val1}`

        return {
          get: (option: { query: Methods32['get']['query'], config?: T }) =>
            fetch<Methods32['get']['resBody'], BasicHeaders, Methods32['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option: { query: Methods32['get']['query'], config?: T }) =>
            fetch<Methods32['get']['resBody'], BasicHeaders, Methods32['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          put: (option: { body: Methods32['put']['reqBody'], config?: T }) =>
            fetch<Methods32['put']['resBody'], BasicHeaders, Methods32['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
          $put: (option: { body: Methods32['put']['reqBody'], config?: T }) =>
            fetch<Methods32['put']['resBody'], BasicHeaders, Methods32['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          delete: (option: { query: Methods32['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods32['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option: { query: Methods32['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods32['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods32['get']['query'] } | { method: 'delete'; query: Methods32['delete']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      get: (option: { query: Methods31['get']['query'], config?: T }) =>
        fetch<Methods31['get']['resBody'], BasicHeaders, Methods31['get']['status']>(prefix, PATH19, GET, option).json(),
      $get: (option: { query: Methods31['get']['query'], config?: T }) =>
        fetch<Methods31['get']['resBody'], BasicHeaders, Methods31['get']['status']>(prefix, PATH19, GET, option).json().then(r => r.body),
      post: (option: { body: Methods31['post']['reqBody'], config?: T }) =>
        fetch<Methods31['post']['resBody'], BasicHeaders, Methods31['post']['status']>(prefix, PATH19, POST, option, 'FormData').json(),
      $post: (option: { body: Methods31['post']['reqBody'], config?: T }) =>
        fetch<Methods31['post']['resBody'], BasicHeaders, Methods31['post']['status']>(prefix, PATH19, POST, option, 'FormData').json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods31['get']['query'] }) =>
        `${prefix}${PATH19}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    reports: {
      trial_bs: {
        get: (option: { query: Methods33['get']['query'], config?: T }) =>
          fetch<Methods33['get']['resBody'], BasicHeaders, Methods33['get']['status']>(prefix, PATH20, GET, option).json(),
        $get: (option: { query: Methods33['get']['query'], config?: T }) =>
          fetch<Methods33['get']['resBody'], BasicHeaders, Methods33['get']['status']>(prefix, PATH20, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods33['get']['query'] }) =>
          `${prefix}${PATH20}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      trial_bs_three_years: {
        get: (option: { query: Methods34['get']['query'], config?: T }) =>
          fetch<Methods34['get']['resBody'], BasicHeaders, Methods34['get']['status']>(prefix, PATH21, GET, option).json(),
        $get: (option: { query: Methods34['get']['query'], config?: T }) =>
          fetch<Methods34['get']['resBody'], BasicHeaders, Methods34['get']['status']>(prefix, PATH21, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods34['get']['query'] }) =>
          `${prefix}${PATH21}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      trial_bs_two_years: {
        get: (option: { query: Methods35['get']['query'], config?: T }) =>
          fetch<Methods35['get']['resBody'], BasicHeaders, Methods35['get']['status']>(prefix, PATH22, GET, option).json(),
        $get: (option: { query: Methods35['get']['query'], config?: T }) =>
          fetch<Methods35['get']['resBody'], BasicHeaders, Methods35['get']['status']>(prefix, PATH22, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods35['get']['query'] }) =>
          `${prefix}${PATH22}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      trial_pl: {
        get: (option: { query: Methods36['get']['query'], config?: T }) =>
          fetch<Methods36['get']['resBody'], BasicHeaders, Methods36['get']['status']>(prefix, PATH23, GET, option).json(),
        $get: (option: { query: Methods36['get']['query'], config?: T }) =>
          fetch<Methods36['get']['resBody'], BasicHeaders, Methods36['get']['status']>(prefix, PATH23, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods36['get']['query'] }) =>
          `${prefix}${PATH23}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      trial_pl_sections: {
        get: (option: { query: Methods37['get']['query'], config?: T }) =>
          fetch<Methods37['get']['resBody'], BasicHeaders, Methods37['get']['status']>(prefix, PATH24, GET, option).json(),
        $get: (option: { query: Methods37['get']['query'], config?: T }) =>
          fetch<Methods37['get']['resBody'], BasicHeaders, Methods37['get']['status']>(prefix, PATH24, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods37['get']['query'] }) =>
          `${prefix}${PATH24}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      trial_pl_three_years: {
        get: (option: { query: Methods38['get']['query'], config?: T }) =>
          fetch<Methods38['get']['resBody'], BasicHeaders, Methods38['get']['status']>(prefix, PATH25, GET, option).json(),
        $get: (option: { query: Methods38['get']['query'], config?: T }) =>
          fetch<Methods38['get']['resBody'], BasicHeaders, Methods38['get']['status']>(prefix, PATH25, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods38['get']['query'] }) =>
          `${prefix}${PATH25}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      trial_pl_two_years: {
        get: (option: { query: Methods39['get']['query'], config?: T }) =>
          fetch<Methods39['get']['resBody'], BasicHeaders, Methods39['get']['status']>(prefix, PATH26, GET, option).json(),
        $get: (option: { query: Methods39['get']['query'], config?: T }) =>
          fetch<Methods39['get']['resBody'], BasicHeaders, Methods39['get']['status']>(prefix, PATH26, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods39['get']['query'] }) =>
          `${prefix}${PATH26}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    },
    sections: {
      _id: (val1: number) => {
        const prefix1 = `${PATH27}/${val1}`

        return {
          get: (option: { query: Methods41['get']['query'], config?: T }) =>
            fetch<Methods41['get']['resBody'], BasicHeaders, Methods41['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option: { query: Methods41['get']['query'], config?: T }) =>
            fetch<Methods41['get']['resBody'], BasicHeaders, Methods41['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          put: (option?: { body?: Methods41['put']['reqBody'], config?: T }) =>
            fetch<Methods41['put']['resBody'], BasicHeaders, Methods41['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
          $put: (option?: { body?: Methods41['put']['reqBody'], config?: T }) =>
            fetch<Methods41['put']['resBody'], BasicHeaders, Methods41['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          delete: (option: { query: Methods41['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods41['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option: { query: Methods41['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods41['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods41['get']['query'] } | { method: 'delete'; query: Methods41['delete']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      get: (option: { query: Methods40['get']['query'], config?: T }) =>
        fetch<Methods40['get']['resBody'], BasicHeaders, Methods40['get']['status']>(prefix, PATH27, GET, option).json(),
      $get: (option: { query: Methods40['get']['query'], config?: T }) =>
        fetch<Methods40['get']['resBody'], BasicHeaders, Methods40['get']['status']>(prefix, PATH27, GET, option).json().then(r => r.body),
      post: (option?: { body?: Methods40['post']['reqBody'], config?: T }) =>
        fetch<Methods40['post']['resBody'], BasicHeaders, Methods40['post']['status']>(prefix, PATH27, POST, option, 'URLSearchParams').json(),
      $post: (option?: { body?: Methods40['post']['reqBody'], config?: T }) =>
        fetch<Methods40['post']['resBody'], BasicHeaders, Methods40['post']['status']>(prefix, PATH27, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods40['get']['query'] }) =>
        `${prefix}${PATH27}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    segments: {
      _segment_id: (val1: number) => {
        const prefix1 = `${PATH28}/${val1}`

        return {
          tags: {
            _id: (val3: number) => {
              const prefix3 = `${prefix1}${PATH29}/${val3}`

              return {
                put: (option: { body: Methods43['put']['reqBody'], config?: T }) =>
                  fetch<Methods43['put']['resBody'], BasicHeaders, Methods43['put']['status']>(prefix, prefix3, PUT, option, 'URLSearchParams').json(),
                $put: (option: { body: Methods43['put']['reqBody'], config?: T }) =>
                  fetch<Methods43['put']['resBody'], BasicHeaders, Methods43['put']['status']>(prefix, prefix3, PUT, option, 'URLSearchParams').json().then(r => r.body),
                delete: (option: { query: Methods43['delete']['query'], config?: T }) =>
                  fetch<void, BasicHeaders, Methods43['delete']['status']>(prefix, prefix3, DELETE, option).send(),
                $delete: (option: { query: Methods43['delete']['query'], config?: T }) =>
                  fetch<void, BasicHeaders, Methods43['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
                $path: (option?: { method: 'delete'; query: Methods43['delete']['query'] }) =>
                  `${prefix}${prefix3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
              }
            },
            get: (option: { query: Methods42['get']['query'], config?: T }) =>
              fetch<Methods42['get']['resBody'], BasicHeaders, Methods42['get']['status']>(prefix, `${prefix1}${PATH29}`, GET, option).json(),
            $get: (option: { query: Methods42['get']['query'], config?: T }) =>
              fetch<Methods42['get']['resBody'], BasicHeaders, Methods42['get']['status']>(prefix, `${prefix1}${PATH29}`, GET, option).json().then(r => r.body),
            post: (option: { body: Methods42['post']['reqBody'], config?: T }) =>
              fetch<Methods42['post']['resBody'], BasicHeaders, Methods42['post']['status']>(prefix, `${prefix1}${PATH29}`, POST, option, 'URLSearchParams').json(),
            $post: (option: { body: Methods42['post']['reqBody'], config?: T }) =>
              fetch<Methods42['post']['resBody'], BasicHeaders, Methods42['post']['status']>(prefix, `${prefix1}${PATH29}`, POST, option, 'URLSearchParams').json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods42['get']['query'] }) =>
              `${prefix}${prefix1}${PATH29}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      }
    },
    tags: {
      _id: (val1: number) => {
        const prefix1 = `${PATH30}/${val1}`

        return {
          get: (option: { query: Methods45['get']['query'], config?: T }) =>
            fetch<Methods45['get']['resBody'], BasicHeaders, Methods45['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option: { query: Methods45['get']['query'], config?: T }) =>
            fetch<Methods45['get']['resBody'], BasicHeaders, Methods45['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          put: (option?: { body?: Methods45['put']['reqBody'], config?: T }) =>
            fetch<Methods45['put']['resBody'], BasicHeaders, Methods45['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
          $put: (option?: { body?: Methods45['put']['reqBody'], config?: T }) =>
            fetch<Methods45['put']['resBody'], BasicHeaders, Methods45['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          delete: (option: { query: Methods45['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods45['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option: { query: Methods45['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods45['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods45['get']['query'] } | { method: 'delete'; query: Methods45['delete']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      get: (option: { query: Methods44['get']['query'], config?: T }) =>
        fetch<Methods44['get']['resBody'], BasicHeaders, Methods44['get']['status']>(prefix, PATH30, GET, option).json(),
      $get: (option: { query: Methods44['get']['query'], config?: T }) =>
        fetch<Methods44['get']['resBody'], BasicHeaders, Methods44['get']['status']>(prefix, PATH30, GET, option).json().then(r => r.body),
      post: (option: { body: Methods44['post']['reqBody'], config?: T }) =>
        fetch<Methods44['post']['resBody'], BasicHeaders, Methods44['post']['status']>(prefix, PATH30, POST, option, 'URLSearchParams').json(),
      $post: (option: { body: Methods44['post']['reqBody'], config?: T }) =>
        fetch<Methods44['post']['resBody'], BasicHeaders, Methods44['post']['status']>(prefix, PATH30, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods44['get']['query'] }) =>
        `${prefix}${PATH30}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    taxes: {
      codes: {
        _code: (val2: number) => {
          const prefix2 = `${PATH31}/${val2}`

          return {
            get: (option?: { config?: T }) =>
              fetch<Methods47['get']['resBody'], BasicHeaders, Methods47['get']['status']>(prefix, prefix2, GET, option).json(),
            $get: (option?: { config?: T }) =>
              fetch<Methods47['get']['resBody'], BasicHeaders, Methods47['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        get: (option?: { config?: T }) =>
          fetch<Methods46['get']['resBody'], BasicHeaders, Methods46['get']['status']>(prefix, PATH31, GET, option).json(),
        $get: (option?: { config?: T }) =>
          fetch<Methods46['get']['resBody'], BasicHeaders, Methods46['get']['status']>(prefix, PATH31, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH31}`
      },
      companies: {
        _company_id: (val2: number) => {
          const prefix2 = `${PATH32}/${val2}`

          return {
            get: (option?: { config?: T }) =>
              fetch<Methods48['get']['resBody'], BasicHeaders, Methods48['get']['status']>(prefix, prefix2, GET, option).json(),
            $get: (option?: { config?: T }) =>
              fetch<Methods48['get']['resBody'], BasicHeaders, Methods48['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        }
      }
    },
    transfers: {
      _id: (val1: number) => {
        const prefix1 = `${PATH33}/${val1}`

        return {
          get: (option: { query: Methods50['get']['query'], config?: T }) =>
            fetch<Methods50['get']['resBody'], BasicHeaders, Methods50['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option: { query: Methods50['get']['query'], config?: T }) =>
            fetch<Methods50['get']['resBody'], BasicHeaders, Methods50['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          put: (option: { body: Methods50['put']['reqBody'], config?: T }) =>
            fetch<Methods50['put']['resBody'], BasicHeaders, Methods50['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json(),
          $put: (option: { body: Methods50['put']['reqBody'], config?: T }) =>
            fetch<Methods50['put']['resBody'], BasicHeaders, Methods50['put']['status']>(prefix, prefix1, PUT, option, 'URLSearchParams').json().then(r => r.body),
          delete: (option: { query: Methods50['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods50['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option: { query: Methods50['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods50['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods50['get']['query'] } | { method: 'delete'; query: Methods50['delete']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      get: (option: { query: Methods49['get']['query'], config?: T }) =>
        fetch<Methods49['get']['resBody'], BasicHeaders, Methods49['get']['status']>(prefix, PATH33, GET, option).json(),
      $get: (option: { query: Methods49['get']['query'], config?: T }) =>
        fetch<Methods49['get']['resBody'], BasicHeaders, Methods49['get']['status']>(prefix, PATH33, GET, option).json().then(r => r.body),
      post: (option?: { body?: Methods49['post']['reqBody'], config?: T }) =>
        fetch<Methods49['post']['resBody'], BasicHeaders, Methods49['post']['status']>(prefix, PATH33, POST, option, 'URLSearchParams').json(),
      $post: (option?: { body?: Methods49['post']['reqBody'], config?: T }) =>
        fetch<Methods49['post']['resBody'], BasicHeaders, Methods49['post']['status']>(prefix, PATH33, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods49['get']['query'] }) =>
        `${prefix}${PATH33}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    users: {
      capabilities: {
        get: (option: { query: Methods52['get']['query'], config?: T }) =>
          fetch<Methods52['get']['resBody'], BasicHeaders, Methods52['get']['status']>(prefix, PATH35, GET, option).json(),
        $get: (option: { query: Methods52['get']['query'], config?: T }) =>
          fetch<Methods52['get']['resBody'], BasicHeaders, Methods52['get']['status']>(prefix, PATH35, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods52['get']['query'] }) =>
          `${prefix}${PATH35}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      me: {
        get: (option: { query: Methods53['get']['query'], config?: T }) =>
          fetch<Methods53['get']['resBody'], BasicHeaders, Methods53['get']['status']>(prefix, PATH36, GET, option).json(),
        $get: (option: { query: Methods53['get']['query'], config?: T }) =>
          fetch<Methods53['get']['resBody'], BasicHeaders, Methods53['get']['status']>(prefix, PATH36, GET, option).json().then(r => r.body),
        put: (option?: { body?: Methods53['put']['reqBody'], config?: T }) =>
          fetch<Methods53['put']['resBody'], BasicHeaders, Methods53['put']['status']>(prefix, PATH36, PUT, option, 'URLSearchParams').json(),
        $put: (option?: { body?: Methods53['put']['reqBody'], config?: T }) =>
          fetch<Methods53['put']['resBody'], BasicHeaders, Methods53['put']['status']>(prefix, PATH36, PUT, option, 'URLSearchParams').json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods53['get']['query'] }) =>
          `${prefix}${PATH36}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      get: (option: { query: Methods51['get']['query'], config?: T }) =>
        fetch<Methods51['get']['resBody'], BasicHeaders, Methods51['get']['status']>(prefix, PATH34, GET, option).json(),
      $get: (option: { query: Methods51['get']['query'], config?: T }) =>
        fetch<Methods51['get']['resBody'], BasicHeaders, Methods51['get']['status']>(prefix, PATH34, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods51['get']['query'] }) =>
        `${prefix}${PATH34}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    wallet_txns: {
      _id: (val1: number) => {
        const prefix1 = `${PATH37}/${val1}`

        return {
          get: (option: { query: Methods55['get']['query'], config?: T }) =>
            fetch<Methods55['get']['resBody'], BasicHeaders, Methods55['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option: { query: Methods55['get']['query'], config?: T }) =>
            fetch<Methods55['get']['resBody'], BasicHeaders, Methods55['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          delete: (option: { query: Methods55['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods55['delete']['status']>(prefix, prefix1, DELETE, option).send(),
          $delete: (option: { query: Methods55['delete']['query'], config?: T }) =>
            fetch<void, BasicHeaders, Methods55['delete']['status']>(prefix, prefix1, DELETE, option).send().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods55['get']['query'] } | { method: 'delete'; query: Methods55['delete']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      get: (option: { query: Methods54['get']['query'], config?: T }) =>
        fetch<Methods54['get']['resBody'], BasicHeaders, Methods54['get']['status']>(prefix, PATH37, GET, option).json(),
      $get: (option: { query: Methods54['get']['query'], config?: T }) =>
        fetch<Methods54['get']['resBody'], BasicHeaders, Methods54['get']['status']>(prefix, PATH37, GET, option).json().then(r => r.body),
      post: (option?: { body?: Methods54['post']['reqBody'], config?: T }) =>
        fetch<Methods54['post']['resBody'], BasicHeaders, Methods54['post']['status']>(prefix, PATH37, POST, option, 'URLSearchParams').json(),
      $post: (option?: { body?: Methods54['post']['reqBody'], config?: T }) =>
        fetch<Methods54['post']['resBody'], BasicHeaders, Methods54['post']['status']>(prefix, PATH37, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods54['get']['query'] }) =>
        `${prefix}${PATH37}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    walletables: {
      _type: (val1: number | string) => {
        const prefix1 = `${PATH38}/${val1}`

        return {
          _id: (val2: number) => {
            const prefix2 = `${prefix1}/${val2}`

            return {
              get: (option: { query: Methods57['get']['query'], config?: T }) =>
                fetch<Methods57['get']['resBody'], BasicHeaders, Methods57['get']['status']>(prefix, prefix2, GET, option).json(),
              $get: (option: { query: Methods57['get']['query'], config?: T }) =>
                fetch<Methods57['get']['resBody'], BasicHeaders, Methods57['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
              put: (option: { body?: Methods57['put']['reqBody'], query: Methods57['put']['query'], config?: T }) =>
                fetch<Methods57['put']['resBody'], BasicHeaders, Methods57['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json(),
              $put: (option: { body?: Methods57['put']['reqBody'], query: Methods57['put']['query'], config?: T }) =>
                fetch<Methods57['put']['resBody'], BasicHeaders, Methods57['put']['status']>(prefix, prefix2, PUT, option, 'URLSearchParams').json().then(r => r.body),
              delete: (option: { query: Methods57['delete']['query'], config?: T }) =>
                fetch<void, BasicHeaders, Methods57['delete']['status']>(prefix, prefix2, DELETE, option).send(),
              $delete: (option: { query: Methods57['delete']['query'], config?: T }) =>
                fetch<void, BasicHeaders, Methods57['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
              $path: (option?: { method?: 'get'; query: Methods57['get']['query'] } | { method: 'put'; query: Methods57['put']['query'] } | { method: 'delete'; query: Methods57['delete']['query'] }) =>
                `${prefix}${prefix2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          }
        }
      },
      get: (option: { query: Methods56['get']['query'], config?: T }) =>
        fetch<Methods56['get']['resBody'], BasicHeaders, Methods56['get']['status']>(prefix, PATH38, GET, option).json(),
      $get: (option: { query: Methods56['get']['query'], config?: T }) =>
        fetch<Methods56['get']['resBody'], BasicHeaders, Methods56['get']['status']>(prefix, PATH38, GET, option).json().then(r => r.body),
      post: (option?: { body?: Methods56['post']['reqBody'], config?: T }) =>
        fetch<Methods56['post']['resBody'], BasicHeaders, Methods56['post']['status']>(prefix, PATH38, POST, option, 'URLSearchParams').json(),
      $post: (option?: { body?: Methods56['post']['reqBody'], config?: T }) =>
        fetch<Methods56['post']['resBody'], BasicHeaders, Methods56['post']['status']>(prefix, PATH38, POST, option, 'URLSearchParams').json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods56['get']['query'] }) =>
        `${prefix}${PATH38}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
