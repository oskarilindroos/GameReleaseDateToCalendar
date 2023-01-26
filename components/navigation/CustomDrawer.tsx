import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { DrawerContainer } from "../styled/styled.components";

export default function CustomDrawer(props: any) {
  return (
    <DrawerContainer>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </DrawerContainer>
  );
}
