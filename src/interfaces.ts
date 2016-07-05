export interface DecodedMapping {
  fieldCount: number;
  col: number;
  src: number;
  srcLine: number;
  srcCol: number;
  name: number;
}

export type LineMappings = Array<DecodedMapping>

export interface LineDescriptor {
  mappings: LineMappings;
}

export interface DecodedMappings {
  lines: Array<LineDescriptor>;
}
