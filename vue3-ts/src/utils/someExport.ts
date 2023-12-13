import { Ref, ref } from 'vue'

type SomeType = {
  someString: string
}
export const obj1: Ref<SomeType> = ref({ someString: 'someString' })
