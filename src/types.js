// @flow

export type Props = {
  element: React$ComponentType<*>,
  when: boolean | (*) => boolean,
  children: React$Element<*>,
}
