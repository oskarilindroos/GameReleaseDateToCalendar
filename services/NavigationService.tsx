// This file provides services for navigation drawer actions
// so that they can be used anywhere without passing the navigation as props
import {
  createNavigationContainerRef,
  DrawerActions,
} from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export function openDrawer() {
  navigationRef.dispatch(DrawerActions.openDrawer());
}

export function navigateTo(name: any, params: any) {
  navigationRef.navigate(name, params);
}
