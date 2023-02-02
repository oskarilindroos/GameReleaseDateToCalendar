// This file provides services for navigation drawer actions
// so that they can be used anywhere without passing the navigation as props
import {
  createNavigationContainerRef,
  DrawerActions,
} from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export function toggleDrawer() {
  navigationRef.dispatch(DrawerActions.toggleDrawer());
}

export function navigateTo(name: string, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
