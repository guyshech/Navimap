import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Directions: { startPoint: string; endPoint: string };
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type DirectionsScreenRouteProp = RouteProp<RootStackParamList, 'Directions'>;

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

export type DirectionsScreenProps = {
  route: DirectionsScreenRouteProp;
};
