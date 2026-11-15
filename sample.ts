export type Sample = {
  name: string
  enabled: boolean
}

export const sample = (): Sample => ({ name: "sample", enabled: false })
