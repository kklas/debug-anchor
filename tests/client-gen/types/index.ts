import * as FooEnum from "./FooEnum"

export { BarStruct, BarStructFields, BarStructJSON } from "./BarStruct"
export { FooStruct, FooStructFields, FooStructJSON } from "./FooStruct"
export { FooEnum }

export type FooEnumKind =
  | FooEnum.StructKind
  | FooEnum.TupleKind
  | FooEnum.DiscriminantKind
export type FooEnumJSON =
  | FooEnum.StructKindJSON
  | FooEnum.TupleKindJSON
  | FooEnum.DiscriminantKindJSON
