import * as borsh from "@project-serum/borsh"
import BN from "bn.js"
import * as types from "."

export type StructKindFields = {
  boolField: boolean
  u8Field: number
}
export type StructKindValue = {
  boolField: boolean
  u8Field: number
}

export interface StructKindJSON {
  kind: "StructKind"
  value: {
    boolField: boolean
    u8Field: number
  }
}

export class StructKind {
  readonly discriminator = 0
  readonly kind = "StructKind"
  readonly value: StructKindValue

  constructor(value: StructKindFields) {
    this.value = {
      boolField: value.boolField,
      u8Field: value.u8Field,
    }
  }

  toJSON(): StructKindJSON {
    return {
      kind: "StructKind",
      value: {
        boolField: this.value.boolField,
        u8Field: this.value.u8Field,
      },
    }
  }

  toEncodable() {
    return {
      StructKind: {
        bool_field: this.value.boolField,
        u8_field: this.value.u8Field,
      },
    }
  }
}

export type TupleKindFields = [Array<boolean>]
export type TupleKindValue = [Array<boolean>]

export interface TupleKindJSON {
  kind: "TupleKind"
  value: [Array<boolean>]
}

export class TupleKind {
  readonly discriminator = 1
  readonly kind = "TupleKind"
  readonly value: TupleKindValue

  constructor(value: TupleKindFields) {
    this.value = [value[0]]
  }

  toJSON(): TupleKindJSON {
    return {
      kind: "TupleKind",
      value: [this.value[0]],
    }
  }

  toEncodable() {
    return {
      TupleKind: {
        _0: this.value[0],
      },
    }
  }
}

export interface DiscriminantKindJSON {
  kind: "DiscriminantKind"
}

export class DiscriminantKind {
  readonly discriminator = 2
  readonly kind = "DiscriminantKind"

  toJSON(): DiscriminantKindJSON {
    return {
      kind: "DiscriminantKind",
    }
  }

  toEncodable() {
    return {
      DiscriminantKind: {},
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromDecoded(obj: any): types.FooEnumKind {
  if (typeof obj !== "object") {
    throw new Error("Invalid enum object")
  }

  if ("StructKind" in obj) {
    const val = obj["StructKind"]
    return new StructKind({
      boolField: val["bool_field"],
      u8Field: val["u8_field"],
    })
  }
  if ("TupleKind" in obj) {
    const val = obj["TupleKind"]
    return new TupleKind([val["_0"]])
  }
  if ("DiscriminantKind" in obj) {
    return new DiscriminantKind()
  }

  throw new Error("Invalid enum object")
}

export function fromJSON(obj: types.FooEnumJSON): types.FooEnumKind {
  switch (obj.kind) {
    case "StructKind": {
      return new StructKind({
        boolField: obj.value.boolField,
        u8Field: obj.value.u8Field,
      })
    }
    case "TupleKind": {
      return new TupleKind([obj.value[0]])
    }
    case "DiscriminantKind": {
      return new DiscriminantKind()
    }
  }
}

export function layout(property?: string) {
  const ret = borsh.rustEnum([
    borsh.struct(
      [borsh.bool("bool_field"), borsh.u8("u8_field")],
      "StructKind"
    ),
    borsh.struct([borsh.vec(borsh.bool(), "_0")], "TupleKind"),
    borsh.struct([], "DiscriminantKind"),
  ])
  if (property !== undefined) {
    return ret.replicate(property)
  }
  return ret
}
