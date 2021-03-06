import {Point} from 'react-native-google-places-autocomplete';
export type TypeNavSliceState = {
  origin: TypeOrigin | null;
  destination: null | string;
  travelTimeInfo: null | string;
};

export interface TypeOrigin {
  location: Pick<Point, 'lat' | 'lng'>;
  description?: string;
}
